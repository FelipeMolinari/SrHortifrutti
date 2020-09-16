import React, { createContext, useState, useContext } from 'react';
import AuthorizedApi from '../services/api/AuthorizedApi';
import MainApi from '../services/api/MainApi';
import {
  getLocalStorageUser,
  setLocalStorageUser,
  setLocalStorageToken,
  clearLocalStorage
} from '../storage/authLocalStorage';
import { AuthContextProps, SectionResponse, UserOwner } from '../typescriptInterface';

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserOwner | null>(getLocalStorageUser());
  const [rejected, setRejected] = useState(false);
  const [rejectedUpdate, setRejectedUpdate] = useState(false);
  const [successUpdate, setSuccessUpdate] = useState(false);
  async function login(email: string, password: string) {
    try {
      const response: SectionResponse = await MainApi.loginUser(email, password);
      if (response) {
        setUser(response.user);
        setLocalStorageUser(response.user);
        setLocalStorageToken(response.token);
      } else {
        setRejected(true);
      }
    } catch (error) {
      setRejected(true);
    }
  }
  async function updateUser(newUser: UserOwner) {
    try {
      console.log(newUser);
      const upatedUser: UserOwner = await AuthorizedApi.updateUser(newUser);
      console.log(upatedUser);
      setUser(upatedUser);
      setLocalStorageUser(upatedUser);
      setSuccessUpdate(true);
    } catch (error) {
      setRejected(true);
    }
  }

  function logout() {
    setUser(null);
    clearLocalStorage();
  }
  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        login,
        user,
        logout,
        rejected,
        updateUser,
        rejectedUpdate,
        successUpdate
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

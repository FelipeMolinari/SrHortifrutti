import React, { createContext, useState, useContext } from 'react';
import MainApi from '../services/api/MainApi';
import {
  getLocalStorageUser,
  setLocalStorageUser,
  setLocalStorageToken,
  clearLocalStorage
} from '../storage/authLocalStorage';
import { AuthContextProps, SectionResponse, UserInterface } from '../typescriptInterface';

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserInterface | null>(getLocalStorageUser());
  const [rejected, setRejected] = useState(false);

  async function login(email: string, password: string) {
    try {
      const response: SectionResponse = await MainApi.loginUser(email, password);
      if (response) {
        console.log(response);
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

  function logout() {
    setUser(null);
    clearLocalStorage();
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, login, user, logout, rejected }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

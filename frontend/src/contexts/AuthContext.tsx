import React, { createContext, useState, useContext } from 'react';
import MainApi from '../services/api/MainApi';
import {
  getLocalStorageUser,
  setLocalStorageUser,
  setLocalStorageToken
} from '../storage/authLocalStorage';
import { AuthContextProps, SectionResponse, UserInterface } from '../typescriptInterface';

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserInterface | null>(getLocalStorageUser());

  async function login(email: string, password: string) {
    try {
      const response: SectionResponse = await MainApi.loginUser(email, password);
      if (response) {
        setUser(response.data);
        setLocalStorageUser(response.data);
        setLocalStorageToken(response.token);
      }
    } catch (error) {
      console.error(console.error);
    }
  }

  function logout() {
    setUser(null);
    setLocalStorageUser(null);
    setLocalStorageToken(null);
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, login, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

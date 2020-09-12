import React, { createContext, useState, useContext } from 'react';
import MainApi from '../services/api/MainApi';
import {
  getLocalStorageUser,
  setLocalStorageUser,
  setLocalStorageToken
} from '../storage/authLocalStorage';

interface AuthContextProps {
  signed: boolean;
  user: object | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(getLocalStorageUser());

  async function login(email: string, password: string) {
    try {
      const response = await MainApi.loginUser(email, password);
      if (response) {
        console.log(response);
        setUser(response.user);
        setLocalStorageUser(response.user);
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

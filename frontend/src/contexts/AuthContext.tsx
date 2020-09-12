import React, { createContext, useState } from 'react';
import MainApi from '../services/api/MainApi';
interface AuthContextProps {
  signed: boolean;
  user: object | null;
  login: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  async function login(email: string, password: string) {
    try {
      const response = await MainApi.loginUser(email, password);
      setUser(response.user);
    } catch (error) {
      console.error(console.error);
    }
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, login, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

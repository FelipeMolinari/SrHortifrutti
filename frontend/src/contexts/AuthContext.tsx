import React, { createContext, useState, useContext } from 'react';
import AuthorizedApi from '../services/api/AuthorizedApi';
import MainApi from '../services/api/MainApi';
import {
  getLocalStorageUser,
  setLocalStorageUser,
  setLocalStorageToken,
  clearLocalStorage
} from '../storage/authLocalStorage';
import { useToasts } from 'react-toast-notifications';
import { AuthContextProps, SectionResponse, UserOwner } from '../typescriptInterface';
import { isEquivalent } from '../util/isEquivalent';

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
  const { addToast } = useToasts();
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
    console.log(user, newUser);
    if (user) {
      if (
        isEquivalent(
          { objectData: newUser, toDelete: [] },
          {
            objectData: user,
            toDelete: ['__v', '_id', 'updatedAt', 'createdAt', 'password']
          }
        )
      ) {
        addToast(
          'Dados não foram alterados, modifique algum campo antes de prosseguir!',
          { appearance: 'error' }
        );
      } else {
        try {
          const upatedUser: UserOwner = await AuthorizedApi.updateUser(newUser);
          setUser(upatedUser);
          setLocalStorageUser(upatedUser);
          setSuccessUpdate(true);
          addToast('Dados alterados com sucesso!', { appearance: 'success' });
        } catch (error) {
          addToast('Dados não foram alterados!', { appearance: 'error' });

          setRejected(true);
        }
      }
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

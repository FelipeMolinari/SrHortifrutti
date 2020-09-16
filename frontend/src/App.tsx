import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import GlobalStyles from './styles/global';
import Routes from './Routes/index';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <ToastProvider autoDismiss autoDismissTimeout={5000}>
        <AuthContextProvider>
          <GlobalStyles />
          <Routes />
        </AuthContextProvider>
      </ToastProvider>
    </div>
  );
}

export default App;

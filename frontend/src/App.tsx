import React from 'react';
import GlobalStyles from './styles/global';
import Routes from './Routes/index';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <GlobalStyles />
        <Routes />
      </AuthContextProvider>
    </div>
  );
}

export default App;

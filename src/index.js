import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContextProvider from './components/Contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import OutContextProvider from './components/Contexts/OutContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <OutContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
      </OutContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

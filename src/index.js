import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import './index.css';
import i18n from './i18n';
import AppRoutes from './AppRoutes';
import { ThemeProvider } from './ThemeContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <ThemeProvider>
      <I18nextProvider i18n={i18n}> 
        <AppRoutes />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();

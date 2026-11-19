import React from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import App from './App.jsx';
import { messages, defaultLocale } from './i18n';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <IntlProvider locale={defaultLocale} messages={messages[defaultLocale]}>
    <App />
  </IntlProvider>
);



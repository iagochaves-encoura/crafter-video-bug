import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { crafterConf } from '@craftercms/classes';

const site = import.meta.env.REACT_APP_STUDIO_SITE_NAME;
const baseUrl = import.meta.env.REACT_APP_STUDIO_BASE_URL;
crafterConf.configure({ baseUrl, site });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

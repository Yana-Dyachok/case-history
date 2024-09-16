import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const appContainer = document.createElement('div');
appContainer.id = 'root';
document.body.append(appContainer);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

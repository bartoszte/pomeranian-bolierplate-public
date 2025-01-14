import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { App } from './App';
// import { app } from './App/Firebase/FirebaseConfig';

import { Provider } from 'react-redux';

import { store } from './store/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log('firebase: ', app.options.projectId);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

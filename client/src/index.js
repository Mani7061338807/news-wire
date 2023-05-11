import React from 'react';
import ReactDOM from 'react-dom/client';

import AppRoutes from './routes'
import { Provider } from 'react-redux';
import ReduxStore from './store/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>
     <AppRoutes/>
   </Provider>
  </React.StrictMode>
);


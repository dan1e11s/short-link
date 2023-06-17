import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App';

import { Provider } from 'react-redux';
import { store, persistor } from 'store';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

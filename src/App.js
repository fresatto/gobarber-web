import React from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import history from './services/history';
import GlobalStyles from './styles/global';
import './config/ReactotronConfig';
import { store, persistor } from './store';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyles />
          <Routes />
        </Router>
        <ToastContainer autoClose={3000} />
      </PersistGate>
    </Provider>
  );
}

export default App;

import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import history from './services/history';
import GlobalStyles from './styles/global';
import './config/ReactotronConfig';
import store from './store';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;

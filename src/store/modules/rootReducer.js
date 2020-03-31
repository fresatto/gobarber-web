import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';

const store = combineReducers({
  auth,
  user,
});

export default store;

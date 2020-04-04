import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('Você precisa ser um prestador para acessar a aplicação.');
      yield put(signFailure());
      return;
    }

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha na autênticação, verifique seus dados.');
    yield put(signFailure());
  }
}

function* signUp({ payload }) {
  const { name, email, password } = payload;
  try {
    const response = yield call(api.post, '/users', {
      name,
      email,
      password,
      provider: true,
    });

    toast.success('Usuário criado com sucesso!');
    history.push('/');
  } catch (err) {
    yield put(signFailure());
    toast.error(
      'Falha na autenticação, verifique seus dados e tente novamente.'
    );
  }
}

function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);

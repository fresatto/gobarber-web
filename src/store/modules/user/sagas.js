import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { updateUserSuccess, updateUserFailure } from './actions';

function* updateUser({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload;

    console.tron.log(rest);
    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    yield put(updateUserSuccess(response.data));

    toast.success('Seu perfil foi atualizado com sucesso!');
  } catch (err) {
    updateUserFailure();
    toast.error(
      'Erro ao atualizar o seu perfil, verifique os dados e tente novamente.'
    );
  }
}

export default all([takeLatest('@user/UPDATE_REQUEST', updateUser)]);

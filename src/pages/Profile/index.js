import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import { updateUserRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleUpdateUser(data) {
    dispatch(updateUserRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleUpdateUser}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Seu nome de usuário" />
        <Input name="email" type="email" placeholder="Seu nome de usuário" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}

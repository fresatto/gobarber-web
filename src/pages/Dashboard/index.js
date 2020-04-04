import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

export default function Dashboard() {
  const profile = useSelector((state) => state.user.profile);

  function handleUpdateUser(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleUpdateUser}>
        <Input name="name" placeholder="Seu nome de usuário" />
        <Input name="email" type="email" placeholder="Seu nome de usuário" />

        <hr />

        <Input
          type="password"
          name="oldPassowrd"
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

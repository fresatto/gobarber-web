import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/images/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <img src={logo} alt="GoBarber Llogo" />
        <Input name="email" type="text" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Digite sua senha" />
        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}

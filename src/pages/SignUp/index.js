import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/images/logo.svg';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <img src={logo} alt="GoBarber Llogo" />
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="text" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Digite sua senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}

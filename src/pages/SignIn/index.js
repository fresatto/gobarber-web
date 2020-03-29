import React from 'react';

import { Link } from 'react-router-dom';
import logo from '~/assets/images/logo.svg';

export default function SignIn() {
  return (
    <>
      <form>
        <img src={logo} alt="GoBarber Llogo" />
        <input type="text" placeholder="Digite seu e-mail" />
        <input type="password" placeholder="Digite sua senha" />
        <button type="button">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}

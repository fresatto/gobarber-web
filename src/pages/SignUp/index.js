import React from 'react';

import { Link } from 'react-router-dom';
import logo from '~/assets/images/logo.svg';

export default function SignUp() {
  return (
    <>
      <form>
        <img src={logo} alt="GoBarber Llogo" />
        <input type="text" placeholder="Nome completo" />
        <input type="text" placeholder="Digite seu e-mail" />
        <input type="password" placeholder="Digite sua senha" />
        <button type="button">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}

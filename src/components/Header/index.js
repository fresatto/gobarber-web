import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/images/logo-purple.svg';
import Notifications from '../Notifications';

export default function Header() {
  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <nav>
            <img src={logo} alt="Logo roxo" />
            <h3>DASHBOARD</h3>
          </nav>
        </Link>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <h3>Gabriel Fresatto</h3>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/45/abott@adorable.png"
              alt="Avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

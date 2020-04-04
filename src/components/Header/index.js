import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/images/logo-purple.svg';
import Notifications from '../Notifications';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);
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
              <h3>{profile.name}</h3>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar
                  ? profile.avatar.url
                  : 'https://api.adorable.io/avatars/45/abott@adorable.png'
              }
              alt="Avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

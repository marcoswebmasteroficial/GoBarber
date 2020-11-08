import React, { useState, useCallback, useEffect, useMemo } from 'react';


import { FiPower, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  Profile,
  Pesquisar,
  Content,
  Nav,
  Main,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface MonthAvailabilityItem {
  day: number;
  available: boolean;
}

interface Appointment {
  id: string;
  date: string;
  hourFormatted: string;
  user: {
    name: string;
    avatar_url: string;
  };
}

const list = [
  {
    id: 'home',
    title: 'Página Inicial',
    icone: 'Home',
  },
  {
    id: 'users',
    title: 'Usuarios',
    icone: 'users',
  },
  {
    id: 'config',
    title: 'Configuracoes',
    icone: 'Setting',
  },
];
const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <img src={logoImg} alt="GoBarber" />
        </Logo>
        <Pesquisar />
        <Profile>
          <img src="{user.avatar_url}" alt="{user.name}" />

          <div>
            <span>Bem-vindo,</span>
            <Link to="/profile">
              <strong>Marcos</strong>
            </Link>
          </div>
          <button type="button">
            <FiPower />
          </button>
        </Profile>
      </Header>
      <Content>
      <Nav>
          <nav>
            <ul>
              {list.map((item) => (
                <li key={item.id}>
                  <a href="./">
                    <FiPower />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Nav>
        <Main>conteudo</Main>
      </Content>
    </Container>
  );
};

export default Dashboard;

import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  page?: 'dashboard' | 'import';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  page = 'dashboard',
}: HeaderProps) => (
  <Container size={size} page={page}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link className="dashboard" to="/">
          Listagem
        </Link>
        <Link className="import" to="/import">
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;

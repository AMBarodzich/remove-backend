import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeaderBar, Logo, Navigation, NavLink } from './styles';

export default function Header(): React.ReactElement {
  const location = useLocation();

  return (
    <HeaderBar>
      <Logo>
        <Link to="/">
          <img src={'/images/logo.png'} alt="logo" />
        </Link>
      </Logo>
      <Navigation>
        <NavLink to="/" $isActive={location.pathname === '/'}>
          Главная
        </NavLink>
        <NavLink to="/about" $isActive={location.pathname === '/about'}>
          О нас
        </NavLink>
        <NavLink to="/contacts" $isActive={location.pathname === '/contacts'}>
          Контакты
        </NavLink>
      </Navigation>
    </HeaderBar>
  );
}



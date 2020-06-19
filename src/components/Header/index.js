import React from 'react';

import { Container } from './styles';

import Logo from '../../assets/utilsAppIcon.svg';


const Header = () => (
  <Container>
    <header>
      <img src={Logo} alt="UtilsApp" />
      <h1>UTILS
        <small>App</small>
      </h1>
    </header>
  </Container>
);

export default Header;
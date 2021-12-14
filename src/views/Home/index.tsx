import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';

const home: React.FC = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Link to="./Contact">Acessar página de contatos</Link>
    </Container>
  )
}

export default home;

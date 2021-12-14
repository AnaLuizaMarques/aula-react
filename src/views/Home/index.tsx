import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';

const Home: React.FC = () => {
  const [ isLoad, setIsLoad ] = useState(!useState);
  return (
    <Container>
      { isLoad ? (
        <div>
          <p>Carregando..</p>
        </div>
      ) : (
        <div>
          <h1>Home</h1>
          <Link to="./Contact">Acessar página de contatos</Link>
        </div>
      ) }
      <div className='button-container'>
        <button onClick={ () => setIsLoad(!isLoad) }> Clique aqui </button>
      </div>
    </Container> 
  )
}

export default Home;

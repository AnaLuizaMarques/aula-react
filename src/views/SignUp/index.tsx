import React from 'react';
import { Container } from './style';

const SingUp: React.FC = () => {
  return (
    <Container>
      <div className='card'>
        <form onSubmit={ () => alert('Test')}>
          <input type="text" placeholder='Informe seu primeiro nome'/>
          <input type="text" placeholder='Informe seu sobrenome'/>
          <input className='button' type="submit" value='Enviar'/>
        </form>
      </div>
    </Container>
  );
}

export default SingUp;
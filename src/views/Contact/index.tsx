import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';

interface Idata {
  nome: string;
  sobrenome: string;
}

const Contact: React.FC = () => {
  const [ data, setData ] = useState<Idata>( {} as Idata)
  return (
    <Container>
      <div className='form-wrapper'> 
        <h1>Contact</h1>
        Nome: {data?.nome}
        <br/>
        Sobrenome: {data?.sobrenome}
        <div className='card'>
          <form onSubmit={ () => {}}>
            <input 
              type="text" 
              placeholder='Primeiro nome' 
              onChange={ e => setData( { ...data, nome: e.target.value})}
            />
            <input 
              type="text" 
              placeholder='Sobrenome'
              onChange={ e => setData( { ...data, sobrenome: e.target.value})}
            />
            <input 
              type="submit" 
              value='Enviar'
            />
          </form>
        </div>
        <Link to="/"> 
          Voltar para página home
        </Link>
      </div>
    </Container>
  );
}

export default Contact;
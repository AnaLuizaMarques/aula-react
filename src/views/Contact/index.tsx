import React, { useState , useCallback, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';
import  { api }   from '../../services/api';

interface IData {
  nome: string;
  sobrenome: string;
}

const Contact: React.FC = () => {
  const [ data, setData ] = useState<IData>( {} as IData);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = useCallback( ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    api.post('', data).then(response => {
      if (response.status === 200) {
        setSubmit(true);
      }
    })
  }, [data]); 

  return (
    <Container>
      <div className='form-wrapper'> 
        <h1>Contact</h1>
        Nome: {data?.nome}
        <br/>
        Sobrenome: {data?.sobrenome}
        <div className='card'>
          { submit ? (
            <div>
              <h1>Obrigada pelo envio!</h1>
            </div>
          ) : (
            <form onSubmit={ handleSubmit }>  
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
          )
          }
        </div>
        <Link to="/"> 
          Voltar para página home
        </Link>
      </div>
    </Container>
  );
}

export default Contact;
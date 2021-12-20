import React, {useCallback, useState, FormEvent} from 'react';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Container } from './style';
import { api } from "../../services/api"
import 'react-toastify/dist/ReactToastify.css';

interface IData {
  registro: string;
  nome: string;
  telefone: string;
  email: string;
  celular: string;
  profissao: string;
  senha: string;
}

const SingUp: React.FC = () => {
  const [ data, setData ] = useState<IData>( {} as IData);
  const navigate = useNavigate()
  const handleSubmit = useCallback( (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    api.post('specialist', data).then (
      response => {
        console.log(response.data);
        toast.success('Cadastro realizado com sucesso!', {
          hideProgressBar: false,
          onClose: () => navigate('/signin')
        });
      }
    )
  }, [data, navigate]);
  return (
    <Container>
      <div className='card'>
        <h5>Cadastre-se</h5>
        <form onSubmit={ handleSubmit }>
          <input 
            type="text" 
            placeholder='Informe seu registro'
            onChange={ e => setData( { ...data, registro: e.target.value})}
          />
          <input 
            type="text" 
            placeholder='Informe seu primeiro nome'
            onChange={ e => setData( { ...data, nome: e.target.value})}
          />
          <input 
            type="text" 
            placeholder='Informe seu telefone'
            onChange={ e => setData( { ...data, telefone: e.target.value})}
          />
          <input 
            type="text" 
            placeholder='Informe seu email'
            onChange={ e => setData( { ...data, email: e.target.value})}
          />
          <input 
            type="text" 
            placeholder='Informe seu celular'
            onChange={ e => setData( { ...data, celular: e.target.value})}
          />
          <input 
            type="text" 
            placeholder='Informe sua profissao'
            onChange={ e => setData( { ...data, profissao: e.target.value})}
          />
          <input 
            type="password " 
            placeholder='Informe sua senha'
            onChange={ e => setData( { ...data, senha: e.target.value})}
          />
          <input 
            className='button' 
            type="submit" 
            value='Enviar'
          />
        </form>
      </div>
    </Container>
  );
}

export default SingUp;
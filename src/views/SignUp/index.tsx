import React, {useCallback, useState, FormEvent} from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { Container } from './style';
import { api } from "../../services/api"
import 'react-toastify/dist/ReactToastify.css';

interface IData {
  name: string;
  email: string;
  password: string;
}

const SingUp: React.FC = () => {
  const [ data, setData ] = useState<IData>( {} as IData);
  const [ load, setLoad ] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = useCallback( (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoad(true)
    api.post('users', data).then (
      response => {
        console.log(response.data);
        toast.success('Cadastro realizado com sucesso! Você será redirecionado para página de login', {
          hideProgressBar: false,
          onClose: () => navigate('/signin')
        });
      }
    ).catch (e => { toast.error('Oops, algo deu errado')})
    .finally(() => setLoad(false))
  }, [data, navigate])
  if (load) {
    return <Loader/>
  }
  return (
    <Container>
      <div className='card'>
        <h5>Cadastre-se</h5>
        <form onSubmit={ handleSubmit }>
          <input 
            type="text" 
            placeholder='Informe seu nome'
            onChange={ e => setData( { ...data, name: e.target.value})}
          />
          <input 
            type="text" 
            placeholder='Informe seu email'
            onChange={ e => setData( { ...data, email: e.target.value})}
          />
          <input 
            type="password " 
            placeholder='Informe sua senha'
            onChange={ e => setData( { ...data, password: e.target.value})}
          />
          <input 
            className='button' 
            type="submit" 
            value='Enviar'
          />
        </form>
        <Link to="/signin"> Já tem cadastro? Clique aqui para logar.</Link>
      </div>
    </Container>
  );
}

export default SingUp;
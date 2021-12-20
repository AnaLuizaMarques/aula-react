import React, {useCallback, useState, FormEvent} from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { Container } from './style';
import { api } from "../../services/api"
import 'react-toastify/dist/ReactToastify.css';

interface IData {
  email: string;
  password: string;
}

const SingIn: React.FC = () => {
  const [ data, setData ] = useState<IData>( {} as IData);
  const [ load, setLoad ] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = useCallback( (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoad(true)
    api.post('session', data).then(
      response => {
        const sessionToken = JSON.stringify(response.data.token)
        localStorage.setItem('@gamaServiceToken', sessionToken)
        setLoad(false)
        toast.success('Login realizado com sucesso!', {
          hideProgressBar: false,
          onClose: () => navigate('/dashboard')
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
        <h5>Logar no sistema</h5>
        <form onSubmit={ handleSubmit }>
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
            value='Logar'
          />
        </form>
        <Link to="/signup"> Não tem cadastro? Clique aqui para cadastrar.</Link>
      </div>
    </Container>
  );
}

export default SingIn;

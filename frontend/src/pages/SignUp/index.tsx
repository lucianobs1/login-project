import React, { FormEvent, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { toast, Toaster } from 'react-hot-toast';

import { Container, Aside, Main } from './styles';

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    try {
      if(username.trim() === ''){
        throw new Error('Username é obrigatório');
      }
      if(password.trim() === ''){
        throw new Error('Senha é obrigatório');
      }
      if(password.length < 6) {
        throw new Error('Senha deve conter no minimo 6 digitos');
      }
      if(confirmPassword.trim() === ''){
        throw new Error('Confirmação de senha é obrigatório');
      }
      if(password !== confirmPassword) {
        throw new Error('Senhas não batem');
      }

      toast.success('Success on send form')
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error('Any error ocurred on register your account');
      }
    }
  }

  return (
    <Container>
      <Aside />
      <Main>
        <form onSubmit={handleSubmit}>
          <h1>Doe ou adote um gato e faça um pet feliz !!</h1>
          <input
           type="text"
           placeholder="Digite seu username"
           value={username}
           onChange={(event) => setUsername(event.target.value)}
          />
          <input
           type="password"
           placeholder="Digite sua senha"
           value={password}
           onChange={(event) => setPassword(event.target.value)}
          />
          <input 
            type="password"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          <Toaster
            position="top-center"
            reverseOrder={false}
          />  

          <button type="submit">Cadastrar</button>
        </form>
        <a href="/sign-in">
          <FiArrowLeft size={16} />
          Já tenho uma conta
        </a>
      </Main>
    </Container>
  );
}

export { SignUp };
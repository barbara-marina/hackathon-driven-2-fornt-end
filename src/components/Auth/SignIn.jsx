import { useNavigate } from 'react-router';
import { useState } from 'react';

import { Title, Input, Button, Form, StyledLink } from './style';
import api from '../utils/api';

function SignIn() {
  const navigate = useNavigate();

  const [formInfo, setFormInfo] = useState({});

  function handleSignIn(e) {
    e.preventDefault();

    api.signIn(formInfo).then(handleSuccess).catch((error) => console.log(error))
  }

  function handleSuccess(){
    navigate('/')
  }

  return (
    <>
      <Title>CodeHour</Title>
      <Form onSubmit={handleSignIn}>
        <Input
          type="email"
          placeholder="E-mail"
          value={formInfo.email || ''}
          onChange={e => setFormInfo({ ...formInfo, email: e.target.value })}
          required
        >
        </Input>

        <Input
          type="password"
          placeholder="Senha"
          value={formInfo.password || ''}
          onChange={e => setFormInfo({ ...formInfo, password: e.target.value })}
          required
        >
        </Input>

        <Button type="submit">Entrar</Button>
      </Form>
      <StyledLink to="/sign-up">Primeira vez? Cadastre-se</StyledLink>
    </>
  )
}

export default SignIn;
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginImagem from '../../assets/LoginIma.svg'
import Button from '../../components/Button'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import { Container, Image, ContainerItems, Input, SignInLink, Label, Error } from './styles'

function Login () {
  const { putUserData } = useUser()
  const history = useHistory()

  const schema = Yup.object().shape({
    email: Yup.string().email('Digite um email válido').required('O email é obrigatório'),
    password: Yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter no minímo 6 digitos')
  })
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async ClientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: ClientData.email,
        password: ClientData.password
      }),
      {
        pending: 'Verificando seus dado',
        success: 'Seja bem-vinda(a)',
        error: 'Verifique seu e-mail e senha'
      }

    )
    putUserData(data)
    setTimeout(() => {
      history.push('/')
    }, 1000)
  }

  return (
    <Container>

      <Image src={LoginImagem} alt='imagem' />

      <ContainerItems>
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register('email')} error={errors.email?.message} />
          <Error>{errors.email?.message}</Error>

          <Label>Senha</Label>
          <Input type="password" {...register('password')} error={errors.password?.message} />
          <Error>{errors.password?.message}</Error>

          <Button type="submit" style={{
            marginTop: 50,
            marginBottom: 25
          }} >Sign in</Button>
        </form>

        <SignInLink>Não possui conta? <Link style={{ color: 'white' }} to='/cadastro'> Sign up</Link></SignInLink>

      </ContainerItems>

    </Container>
  )
}

export default Login

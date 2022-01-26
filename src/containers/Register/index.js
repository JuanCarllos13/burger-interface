import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import RegisterImg from '../../assets/register.svg'
import Button from '../../components/Button'
import api from '../../services/api'
import { Container, Image, ContainerItems, Input, SignInLink, Label, Error } from './styles'

function Register () {
  const schema = Yup.object().shape({
    name: Yup.string().required('Seu nome é obrigatório'),
    email: Yup.string().email('Digite um email válido').required('O email é obrigatório'),
    password: Yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter no minímo 6 digitos'),
    ConfirmPassword: Yup.string().required('A senha é obrigatória').oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async ClientData => {
    try {
      const { status } = await api.post('users', {
        name: ClientData.name,
        email: ClientData.email,
        password: ClientData.password
      },
      { validateStatus: () => true }
      )

      if (status === 200 || status === 201) {
        toast.success('cadastro criado com sucesso')
      } else if (status === 409) {
        toast.error('E-mail já cadastrado!')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! tente novamente')
    }
  }

  return (
    <Container>

      <Image src={RegisterImg} alt='imagem' />

      <ContainerItems>
        <h1>cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input type="text" {...register('name')} error={errors.name?.message} />
          <Error>{errors.name?.message}</Error>

          <Label error={errors.email?.message}>Email</Label>
          <Input type="email" {...register('email')} error={errors.email?.message} />
          <Error>{errors.email?.message}</Error>

          <Label error={errors.password?.message}>Senha</Label>
          <Input type="password" {...register('password')} error={errors.password?.message} />
          <Error>{errors.password?.message}</Error>

          <Label error={errors.ConfirmPassword?.message}>Confirmar senha</Label>
          <Input type="password" {...register('ConfirmPassword')} error={errors.ConfirmPassword?.message} />
          <Error>{errors.ConfirmPassword?.message}</Error>

          <Button type="submit" style={{
            marginTop: 25,
            marginBottom: 25
          }} >Sign Up</Button>
        </form>

        <SignInLink>Já possui conta? <Link style={{ color: 'white' }} to='/login'>Sign In</Link></SignInLink>

      </ContainerItems>

    </Container>
  )
}

export default Register

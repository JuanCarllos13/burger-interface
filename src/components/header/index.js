import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import Cart from '../../assets/cart.svg'
import User from '../../assets/user.svg'
import { useUser } from '../../hooks/UserContext'
import { Container, ContainerL, PageLink, ContainerR, ConatinerText, Line, PageLinkExist } from './styles'

export function Header () {
  const { logaout, userData } = useUser()
  const { push, location: { pathname } } = useHistory()

  const LogoutUser = () => {
    logaout()
    push('/login')
  }

  return (
    <Container>

    <ContainerL>
      <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
        Home
      </PageLink>
      <PageLink onClick={() => push('/produtos')} isActive={pathname.includes('produtos')}>
        Ver Produtos
      </PageLink>

    </ContainerL>

    <ContainerR>
      <PageLink onClick={() => push('/carrinho')}>
      <img src={Cart} alt='Carrinho' />
      </PageLink>
      <Line></Line>
      <PageLink>
      <img src={User} alt='Perfil' />
      </PageLink>

      <ConatinerText>
        <p>
          Olá, {userData.name}
        </p>

        <PageLinkExist onClick={LogoutUser}>Sair</PageLinkExist>
      </ConatinerText>

    </ContainerR>

    </Container>

  )
}

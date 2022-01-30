import React from 'react'

import Cartlogo from '../../assets/bugerCar (2).jpg'
import { CartItems, CartResume } from '../../components'
import { Container, CartImg, ContainerItems } from './styles'

export function Cart () {
  return (
    <Container>

      <CartImg src={Cartlogo} alt='Logo do carrinho' />

      <ContainerItems>
        <CartItems />
        <CartResume/>

      </ContainerItems>

    </Container>

  )
}

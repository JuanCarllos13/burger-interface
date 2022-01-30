import React from 'react'

import Homelogo from '../../assets/logo.jpg'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { Container, HomeImg } from './styles'

export function Home () {
  return (
    <Container>
      <HomeImg src={Homelogo} alt='Logo da home' />
      <CategoryCarousel />
      <OffersCarousel />

    </Container>

  )
}

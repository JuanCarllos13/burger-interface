import React from 'react'

import Homelogo from '../../assets/logo.jpg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OfferCarousel'
import { Container, HomeImg } from './styles'

function Home () {
  return (
        <Container>

    <HomeImg src={Homelogo} alt='Logo da home'/>
    <CategoryCarousel />
    <OffersCarousel />

        </Container>

  )
}

export default Home

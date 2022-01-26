import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Offer from '../../assets/OFERTAS.png'
import api from '../../services/api'
import stringToMoneraty from '../../utils/formatCurrency'
import { Container, CategoryImg, ContainerItems, Image, Button } from './styles'

function OffersCarousel () {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    async function loadOffers () {
      const { data } = await api.get('products')

      const onlyOffers = data.filter(product => product.offer)

      setOffers(onlyOffers)
    }
    loadOffers()
  }, [])

  const breakPoint = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]
  return (
    <Container>

      <CategoryImg src={Offer} alt='Logo da ofertas' />

        <Carousel itemsToShow={4} style={{ width: '90%' }} breakPoints={breakPoint} >
        {
          offers && offers.map(products => (
            <ContainerItems key={products.id}>
              <Image src={products.url} alt='Foto do produto'/>
              <p>{products.name}</p>
              <p>{stringToMoneraty(products.price)}</p>

            <Button>Peça agora</Button>
            </ContainerItems>
          ))
        }

      </Carousel>
    </Container>

  )
}

export default OffersCarousel

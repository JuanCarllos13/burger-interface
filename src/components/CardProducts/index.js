import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import { userCard } from '../../hooks/CartContext'
import fomatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button/index'
import { Container, Image, ProductName, ProductPrice } from './styles'

export function CardProducts ({ product }) {
  const { putProductsInCard } = userCard()
  const { push } = useHistory()

  return (
        <Container>
            <Image src={product.url} alt='Imagem do produto' />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{fomatCurrency(product.price)}</ProductPrice>
                <Button onClick={() => {
                  putProductsInCard(product)
                  push('/carrinho')
                }
            }>Adicionar</Button>
            </div>
        </Container>
  )
}

CardProducts.propTypes = {
  product: PropTypes.object
}

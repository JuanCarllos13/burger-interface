import React from 'react'

import { userCard } from '../../hooks/CartContext'
import fomatCurrency from '../../utils/formatCurrency'
import { Container, Headers, Body, EmptyCart } from './styles'
export function CartItems () {
  const { cardProducts, increseProducts, decreseProducts } = userCard()
  console.log(cardProducts)

  return (
    <Container>
      <Headers>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p>Total</p>
      </Headers>

      {cardProducts && cardProducts.length > 0
        ? (
            cardProducts.map(product => (

            <Body key={product.id}>
              <img src={product.url} />
              <p>{product.name}</p>
              <p>{fomatCurrency(product.price)}</p>
              <div className='quantity-container'>
                <button onClick={() => decreseProducts(product.id)}>-</button>
                <p>{product.quantity}</p>
                <button onClick={() => increseProducts(product.id)}>+</button>
              </div>

              <p>{fomatCurrency(product.quantity * product.price)}</p>

            </Body>
            ))
          )
        : (
          <EmptyCart>Carrinho vazio</EmptyCart>
          )}
    </Container>

  )
}

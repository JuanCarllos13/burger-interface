import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { userCard } from '../../hooks/CartContext'
import api from '../../services/api'
import fomatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container } from './styles'

export function CartResume () {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cardProducts } = userCard()

  useEffect(() => {
    const sumAllItems = cardProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
  }, [cardProducts, deliveryTax])

  const submitOrder = async () => {
    const order = cardProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })
    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Realizando o seu peidio...',
      success: 'Pedido finalizado com sucesso',
      error: 'Falha ao tentar realizar o seu pedido, tente novamente'
    })
  }

  return (
    <div>
      <Container>
        <div className="ContainerTop">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{fomatCurrency(finalPrice)}</p>
          <p className="tax">Taxa de entrega</p>
          <p className="tax-price">{fomatCurrency(deliveryTax)}</p>
        </div>
        <div className='ContainerBotton'>
          <p>Total</p>
          <p>{fomatCurrency(finalPrice + deliveryTax)}</p>
        </div>

      </Container>
      <Button onClick={submitOrder} style={{ width: '100%', marginTop: 30 }} >Finalizar pedido</Button>
    </div>

  )
}

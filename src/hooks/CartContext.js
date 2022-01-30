/* eslint-disable react-hooks/rules-of-hooks */
import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const CardContext = createContext({})

export const CardProvider = ({ children }) => {
  const [cardProducts, setcardProducts] = useState([])

  const updatLocalStorage = async (product) => {
    await localStorage.setItem('burger:cardInfo', JSON.stringify(product))
  }

  const putProductsInCard = async product => {
    const cardIndex = cardProducts.findIndex(prd => prd.id === product.id)

    let newCardProducts = []
    if (cardIndex >= 0) {
      newCardProducts = cardProducts

      newCardProducts[cardIndex].quantity = newCardProducts[cardIndex].quantity + 1

      setcardProducts(newCardProducts)
    } else {
      product.quantity = 1
      newCardProducts = [...cardProducts, product]
      setcardProducts(newCardProducts)
    }
    await updatLocalStorage(newCardProducts)
  }

  const deleteProducts = async productId => {
    const newCart = cardProducts.filter(product => product.id !== productId)

    setcardProducts(newCart)

    await updatLocalStorage(newCart)
  }

  const increseProducts = async productId => {
    const newCart = cardProducts.map(product => {
      return product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
    })
    setcardProducts(newCart)

    await updatLocalStorage(newCart)
  }

  const decreseProducts = async productId => {
    const cartIndex = cardProducts.findIndex(pd => pd.id === productId)

    if (cardProducts[cartIndex].quantity > 1) {
      const newCart = cardProducts.map(product => {
        return product.id === productId ? { ...product, quantity: product.quantity - 1 } : product
      })
      setcardProducts(newCart)

      await updatLocalStorage(newCart)
    } else {
      deleteProducts(productId)
    }
  }

  useEffect(() => {
    const loadUserData = async () => {
      const ClinetCarData = await localStorage.getItem('burger:cardInfo')

      if (ClinetCarData) {
        setcardProducts(JSON.parse(ClinetCarData))
      }
    }
    loadUserData()
  }, [])

  return (
        <CardContext.Provider value={{ putProductsInCard, cardProducts, increseProducts, decreseProducts }}>
            {children}
        </CardContext.Provider>
  )
}

export const userCard = () => {
  const context = useContext(CardContext)

  if (!context) {
    throw new Error('useCard must be used with CardContext')
  }
  return context
}

CardProvider.protoType = {
  children: PropTypes.node
}

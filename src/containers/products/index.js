import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import Productslogo from '../../assets/bugerCar (1).jpg'
import { CardProducts } from '../../components'
import api from '../../services/api'
import { Container, ProductsImg, CategoryButton, CategoryMenu, ProductsContainer } from './styles'

export function Products ({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setfilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('categories')

      const newCategory = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategory)
    }

    async function loadProducts () {
      const { data } = await api.get('products')

      setProducts(data)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setfilteredProducts(products)
    } else {
      const newfilteredProducts = products.filter(
        product => product.category.id === activeCategory
      )
      setfilteredProducts(newfilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ProductsImg src={Productslogo} alt='Logo de Produtos' />
      <CategoryMenu>

        {categories &&
          categories.map(category =>
            <CategoryButton type='button' key={category.id} isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name
              }</CategoryButton>)}
      </CategoryMenu>
      <ProductsContainer>
        {filteredProducts && filteredProducts.map(product => (

          <CardProducts key={product.id} product={product} />

        ))}

      </ProductsContainer>
    </Container>

  )
}

Products.propTypes = {
  location: PropTypes.object
}

import React, { useEffect, useState } from 'react'

import Productslogo from '../../assets/products-logo.jpg'
import api from '../../services/api'
import { Container, ProductsImg, CategoryButton, CategoryMenu } from './styles'

function Products () {
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('categories')

      const newCategory = [{ id: 0, name: 'Todas' }, ...data]
      setCategories(newCategory)
    }
    loadCategories()
  }, [])
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
    </Container>

  )
}

export default Products

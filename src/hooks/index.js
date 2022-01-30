import PropTypes from 'prop-types'
import React from 'react'

import { CardProvider } from './CartContext'
import { UserProvider } from './UserContext'

const appProvider = ({ children }) => (

  <UserProvider>
    <CardProvider>
      {children}
    </CardProvider>

  </UserProvider>
)

appProvider.propTypes = {
  children: PropTypes.node
}

export default appProvider

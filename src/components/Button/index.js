import PropTypes from 'prop-types'
import React from 'react'

import { Containerbutton } from './styles'

export function Button ({ children, ...props }) {
  return <Containerbutton {...props}>{children}</Containerbutton>
}

Button.propTypes = {
  children: PropTypes.string
}

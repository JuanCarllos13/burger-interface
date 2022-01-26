import React from 'react'

import { Containerbutton } from './styles'

function Button ({ children, ...props }) {
  return <Containerbutton {...props}>{children}</Containerbutton>
}

export default Button

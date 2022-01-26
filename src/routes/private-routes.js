import PropTypes from 'prop-types'
import React from 'react'
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min'

function PrivateRoute ({ componet, ...props }) {
  const user = localStorage.getItem('burger:userData')

  if (!user) {
    return <Redirect to ='/login' />
  }
  return <Route {...props} componet={componet}/>
}

export default PrivateRoute

PrivateRoute.propTypes = {
  componet: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}

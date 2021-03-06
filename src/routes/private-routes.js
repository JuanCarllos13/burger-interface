import PropTypes from 'prop-types'
import React from 'react'
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min'

import { Header } from '../components/header'
function PrivateRoute ({ componet, ...props }) {
  const user = localStorage.getItem('burger:userData')

  if (!user) {
    return <Redirect to ='/login' />
  }

  return (
    <>
    <Header/>
  <Route {...props} componet={componet}/>
  </>
  )
}

export default PrivateRoute

PrivateRoute.propTypes = {
  componet: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}

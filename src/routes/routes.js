import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'

import { Login, Register, Home, Products, Cart } from '../containers'
import PrivateRoute from './private-routes'

function Routes () {
  return (
        <Router>
            <Switch>
                <Route path='/login'component={Login} />
                <Route path='/cadastro'component={Register} />
                <PrivateRoute exact path='/'component={Home} />
                <PrivateRoute path='/produtos'component={Products} />
                <PrivateRoute path='/carrinho'component={Cart} />
            </Switch>
        </Router>
  )
}

export default Routes

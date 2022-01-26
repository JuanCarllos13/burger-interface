import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'

import Home from '../containers/home'
import Login from '../containers/Login'
import Products from '../containers/products'
import Register from '../containers/Register'
import PrivateRoute from './private-routes'

function Routes () {
  return (
        <Router>
            <Switch>
                <Route path='/login'component={Login} />
                <Route path='/cadastro'component={Register} />
                <PrivateRoute exact path='/'component={Home} />
                <PrivateRoute path='/produtos'component={Products} />
            </Switch>
        </Router>
  )
}

export default Routes

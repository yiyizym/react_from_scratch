import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './containers/Home'
import Login from './containers/Login'
import NonMatch from './containers/NonMatch'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route component={NonMatch} />
      </Switch>
    </Router>
  )
}

export default Routes

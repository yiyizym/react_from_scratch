import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Home from './containers/Home'
import Login from './containers/Login'
import NonMatch from './containers/NonMatch'

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route component={NonMatch} />
      </Switch>
    </HashRouter>
  )
}

export default Router

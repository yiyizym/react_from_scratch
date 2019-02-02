import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './containers/Home'
import Login from './containers/Login'
import NonMatch from './containers/NonMatch'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route component={NonMatch} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router

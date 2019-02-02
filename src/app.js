import React from 'react'
import Routes from './routes'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { root } from './redux/reducers'

const loogerMiddlewware = createLogger()

const store = createStore(
  root,
  applyMiddleware(
    thunkMiddleware,
    loogerMiddlewware
  )
)

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App

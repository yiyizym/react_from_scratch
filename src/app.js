import React from 'react'
import Routes from './routes'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { RootReducer } from './redux/reducers'

const store = createStore(RootReducer)

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App

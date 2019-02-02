import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const isLogin = () => {
  const loginInfo = JSON.parse(window.localStorage.getItem('user') || '{}')
  return !!loginInfo.token
}

const PrivateRoute = ({ path, component: Component }) => {
  return (<Route
    path={path}
    render={(props) => isLogin()
      ? (<Component {...props} />)
      : <Redirect to='/login' />
    }
  />)
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => { dispatch({ type: '', payload: '' }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)

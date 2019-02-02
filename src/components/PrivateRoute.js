import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ token, path, component: Component }) => {
  const isLogin = !!token
  return (<Route
    path={path}
    render={() => isLogin
      ? (<Component />)
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

import { login as loginApi, logout as logoutApi } from '../api'

export const login = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'LOGIN',
      data
    })
    return loginApi(data)
      .then(resp => {
        window.localStorage.setItem('user', JSON.stringify({
          token: resp.data.token,
          ...data
        }))
        return dispatch({
          type: resp.status === 200 ? 'LOGIN_SUCCESS' : 'LOGIN_FAIL',
          data: resp.data
        })
      })
  }
}

export const logout = () => {
  return (dispatch) => {
    return logoutApi()
      .then(resp => {
        window.localStorage.removeItem('user')
        return dispatch({
          type: 'LOGOUT',
          data: resp.data
        })
      })
  }
}

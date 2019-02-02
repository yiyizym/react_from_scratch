const userInfo = JSON.parse(window.localStorage.getItem('user') || '{}')
const initialState = {
  token: userInfo.token,
  user: {
    username: userInfo.username,
    password: userInfo.password
  }
}

export const root = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        token: null,
        user: {
          ...action.data
        }
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.data.token
      }
    case 'LOGOUT':
      return initialState
    case 'LOGIN_FAIL':
    default:
      return state
  }
}

const initialState = {
  token: null,
  user: {
    username: null,
    password: null
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

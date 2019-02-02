import axios from 'axios'

export const login = ({ username, password }) => {
  return axios.post('/api/login', {
    username,
    password
  })
}

export const logout = () => {
  return axios.post('/api/logout')
}

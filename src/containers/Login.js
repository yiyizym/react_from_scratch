import React from 'react'
import { connect } from 'react-redux'
import { login } from '../redux/actions'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  handleInput (e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  handleSubmit (e) {
    const { dispatch } = this.props
    const { username, password } = this.state
    e.preventDefault()
    if (!username || !password) return
    dispatch(login({ ...this.state })).then(() => {
      this.props.history.push('/home')
    })
  }
  render () {
    const { username, password } = this.state
    return (<div className='login_page'>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <label htmlFor='username'>username:</label>
          <input name='username' value={username} onChange={(e) => this.handleInput(e)} />
        </div>
        <div>
          <label htmlFor='password'>password:</label>
          <input name='password' value={password} onChange={(e) => this.handleInput(e)} />
        </div>
        <input type='submit' />
      </form>
    </div>)
  }
}
export default connect(state => ({ appState: state }), null)(Login)

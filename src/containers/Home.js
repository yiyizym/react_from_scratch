import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../redux/actions'
class Home extends React.Component {
  logout () {
    const { dispatch } = this.props
    dispatch(logout()).then(() => {
      this.props.history.push('/login')
    })
  }
  render () {
    const { appState } = this.props
    return (<div>
      <div>Welcome! {appState.user.username} </div>
      <button onClick={() => this.logout()}>Logout</button>
    </div>)
  }
}
export default connect(state => ({ appState: state }), null)(Home)

import actions from './actions'
import mutations from './mutations'

const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  loginPending: null,
  loginFailed: null
}

export default { state, mutations, actions }

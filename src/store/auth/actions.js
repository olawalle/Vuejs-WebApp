import { logIn } from './../../api'

function login ({ commit }, data) {
  const username = data.username
  const password = data.password
  commit('LOGIN') // show spinner

  const response = logIn(username, password)

  if (response.code === 200) {
    // Valid login
    localStorage.setItem('token', response.token)
    commit('LOGIN_SUCCESS')
  } else {
    // Invalid login
    commit('LOGIN_FAILURE')
  }
}

function logout ({ commit }) {
  localStorage.removeItem('token')
  commit('LOGOUT')
}

export default {
  login,
  logout

}

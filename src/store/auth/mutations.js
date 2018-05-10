function LOGIN (state) {
  state.loginPending = true
}

function LOGIN_FAILURE (state) {
  state.isLoggedIn = false
  state.loginPending = false
  state.loginFailed = true
  // Need to show a message saying "Invalid username/password combination" or so
}

function LOGIN_SUCCESS (state) {
  state.isLoggedIn = true
  state.loginPending = false
  // Redirect user to Home/Dashboard
}

function LOGOUT (state) {
  state.isLoggedIn = false
  state.loginPending = false
  // Redirect user to Log-in View
}

export default {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT

}

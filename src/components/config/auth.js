
const Auth = {
  isAuthenticated: false,
  authenticate(uname, pass) {
    this.isAuthenticated = true

    const users = JSON.parse(localStorage.getItem('users')) || []

    const user = users.filter( user => ((user.username === uname || user.email === uname ) && user.password === pass) )

    if( user.length > 0 ) {

      const {username, fullname, password } = user[0]

      const authenticated = {
        'authenticated': this.isAuthenticated,
        'uname': username,
        'fullname': fullname,
        'password': password
      }

      localStorage.setItem('user', JSON.stringify(authenticated) )

      return this.getAuth() ? true : false
    }

    return false
    
  },
  signout() {
    this.isAuthenticated = false
    const user  = JSON.parse(localStorage.getItem('user')) || false
    user.authenticated = user ? 0 : null
    localStorage.setItem('user', JSON.stringify(user))
    return this.isAuthenticated
  },
  getAuth() {
    const user = JSON.parse(localStorage.getItem('user')) || false
    this.isAuthenticated = user.authenticated ? user.authenticated : false
    return this.isAuthenticated
  }
}

export default Auth
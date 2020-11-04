
const Auth = {
  isAuthenticated: false,
  authenticate() {
    this.isAuthenticated = true
    localStorage.setItem('user', JSON.stringify({'isAuthenticated': 1}))
    return this.getAuth() ? true : false
  },
  signout() {
    this.isAuthenticated = false
    const user  = JSON.parse(localStorage.getItem('user')) || false
    user.isAuthenticated = user ? 0 : null
    localStorage.setItem('user', JSON.stringify({user}))
    return !this.isAuthenticated ? true : false
  },
  getAuth() {
    const user = JSON.parse(localStorage.getItem('user')) || false
    this.isAuthenticated = user.isAuthenticated ? user.isAuthenticated : this.isAuthenticated
    return this.isAuthenticated
  }
}

export default Auth
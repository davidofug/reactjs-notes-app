
const Auth = {
  isAuthenticated: false,
  authenticate() {
    this.isAuthenticated = true
    return localStorage.setItem('user', JSON.stringify({'isAuthenticated': 1})) ? true : false
  },
  signout() {
    this.isAuthenticated = false
  },
  getAuth() {
      const user = JSON.parse(localStorage.getItem('user')) || false
      this.isAuthenticated = user.isAuthenticated ? user.isAuthenticated : this.isAuthenticated
      return this.isAuthenticated
  }
}

export default Auth
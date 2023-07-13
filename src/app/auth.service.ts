export class AuthService {
  loggedIn = false;
  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn)
      }, 1000);
      // reject(err => console.log(err))
    });
return promise;
  }
  logIn() {
    this.loggedIn = true;
  }
  logOut() {
    this.loggedIn = false;
  }
}
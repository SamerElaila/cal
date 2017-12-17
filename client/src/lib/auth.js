import auth0 from 'auth0-js';
import decodeJWT from 'jwt-decode'

import history from './history';

class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'cal.eu.auth0.com',
    clientID: 'M80DZP5cMfPmVDGc6R77nXl3lGKc86Lf',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'cal-test-api',
    responseType: 'token id_token',
    scope: 'openid profile read:messages'
  });

  login() {
    this.auth0.authorize();
  }

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getUserId = this.getUserId.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/');
      } else if (err) {
        history.replace('/');
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/');
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  getUserId() {
    return decodeJWT(this.getAccessToken()).sub
  }
}

export default new Auth()

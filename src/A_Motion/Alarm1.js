import React, { Component } from 'react';
import App from './App';

class AMotion extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }
  render() {
    // calls the isAuthenticated method in authentication service
    const { isAuthenticated } = this.props.auth;
    return (
      <div style={{width: '100%', height: '100%'}}>
        {
          isAuthenticated() &&
          <div className="container column" style={{width: '100%', height: '100%'}}>
            <App style={{width: '100%', height: '100%'}}/>
          </div>
        }
        {
          !isAuthenticated() && (
            <div className="container column">
              <h5>ReactiveSearch Auth0 Example</h5>
              <h5>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login}
                >
                  Log In
                </a>
                {' '}to continue.
              </h5>
              <h6>This is the default <b><code>AMotion</code></b> component. The <b><code>App</code></b> component will only be visible once you authenticate.</h6>
            </div>
          )
        }
      </div>
      );
    }
  }

  export default AMotion;

import React, { Component } from 'react';
import App from './App';
import TreeAll from './TreeAll';
import ControlledCarousel from './Carousel.js';
import {PageHeader, Navbar, Nav, NavItem} from 'react-bootstrap';


class Home extends Component {
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
	{/* <PageHeader style={{width: '100%', height: '10%'}}>
          <small> Gestión de Alarmas </small>
        </PageHeader> */}
        {
          isAuthenticated() &&
          <div className="container column" style={{width: '100%', height: '100%'}}>
            <TreeAll />
          </div>
        }
        {
          !isAuthenticated() && (
            <div style={{width: '100%', height: '100%'}}>
              <h5>
                {' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login}
                >
                  Ingresa Aquí!
                </a>
                {' '}
              </h5>
              {/* <h6>This is the default <b><code>Home</code></b> component. The <b><code>App</code></b> component will only be visible once you authenticate.</h6> */}
              <div style={{width: '100%', height: '100%'}}>
                <ControlledCarousel />
              </div>
            </div>
          )
        }
      </div>
      );
    }
  }

  export default Home;

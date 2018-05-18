import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


class NavBar extends Component {

  render() {

    return (
      <div>
          <Navbar>
            <Nav>
                <NavItem href="/" eventKey={1}>All </NavItem>
                <NavItem href="/alarm1" eventKey={2}>Alarm1 </NavItem>
                <NavItem>Alarm2 </NavItem>
                <NavItem>Alarm3 </NavItem>
            </Nav>
          </Navbar>
      </div>
    );
  }
}

  export default NavBar;

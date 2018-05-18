import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


class NavBar extends Component {

  render() {

    return (
      <div>
          <Navbar>
            <Nav>
                <NavItem href="/" eventKey={1}>Todas</NavItem>
                <NavItem href="/alarm1" eventKey={2}>Movimiento detectado </NavItem>
                <NavItem>Puerta abierta  </NavItem>
                <NavItem>Bateria Baja </NavItem>
                <NavItem>Fallo cerradura</NavItem>
                <NavItem>Fallo hub </NavItem>
            </Nav>
          </Navbar>
      </div>
    );
  }
}

  export default NavBar;

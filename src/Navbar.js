import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


class NavBar extends Component {

  render() {

    return (
      <div>
          <Navbar>
            <Nav>
                <NavItem href="/" eventKey={1}>Todas</NavItem>
                <NavItem href="/motion" eventKey={2}>Movimiento detectado </NavItem>
                <NavItem href="/door">Puerta abierta  </NavItem>
                <NavItem href="/battery">Bateria Baja </NavItem>
                <NavItem href="/number">Claves</NavItem>
                <NavItem href="/lock">Fallo cerradura</NavItem>
                <NavItem href="/hub">Fallo hub </NavItem>
            </Nav>
          </Navbar>
      </div>
    );
  }
}

  export default NavBar;

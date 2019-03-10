import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="main">
        <Navbar expand="md">
          <NavbarBrand
            style={{ color: "white", fontWeight: 600, fontSize: "1.8em" }}
          >
            STEP
          </NavbarBrand>
          <NavbarToggler className="burger-border" onClick={this.toggle}>
            <div className="burger" />
            <div className="burger" />
            <div className="burger" />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto test" navbar>
              <NavItem>
                <NavLink>
                  <Link className="link-style" to="/">
                    Home
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="link-style" to="/about">
                    About
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="link-style" to="/classes">
                    Classes
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="link-style" to="/store">
                    Store
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="link-style" to="/trainer">
                    Trainers
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link style={{ color: "orange" }} to="/cart">
                    <FaShoppingCart />
                    (0)
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./navbar.css";

class NavBar extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div className="container main">
        <Navbar expand="md">
          <span className={this.props.state.isWhite ? "icon" : "icon-2"}>
            STEP
          </span>
          <NavbarToggler
            style={{
              color: this.props.state.background
            }}
            className={
              this.props.state.isWhite ? "burger-border" : "burger-border-2"
            }
            onClick={this.toggle}
          >
            <div className={this.props.state.isWhite ? "burger" : "burger-2"} />
            <div className={this.props.state.isWhite ? "burger" : "burger-2"} />
            <div className={this.props.state.isWhite ? "burger" : "burger-2"} />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link
                    id={this.props.state.onPage === "home" ? "onPage" : null}
                    className={
                      this.props.state.isWhite ? "link-style" : "link-style-2"
                    }
                    to="/"
                  >
                    Home
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    id={this.props.state.onPage === "join" ? "onPage" : null}
                    className={
                      this.props.state.isWhite ? "link-style" : "link-style-2"
                    }
                    to="/join"
                  >
                    Join
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    id={this.props.state.onPage === "about" ? "onPage" : null}
                    className={
                      this.props.state.isWhite ? "link-style" : "link-style-2"
                    }
                    to="/about"
                  >
                    About
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    id={this.props.state.onPage === "classes" ? "onPage" : null}
                    className={
                      this.props.state.isWhite ? "link-style" : "link-style-2"
                    }
                    to="/classes"
                  >
                    Classes
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    id={this.props.state.onPage === "store" ? "onPage" : null}
                    className={
                      this.props.state.isWhite ? "link-style" : "link-style-2"
                    }
                    to="/store"
                  >
                    Store
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    id={this.props.state.onPage === "trainer" ? "onPage" : null}
                    className={
                      this.props.state.isWhite ? "link-style" : "link-style-2"
                    }
                    to="/trainer"
                  >
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

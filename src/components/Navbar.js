import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
          <a className="navbar-brand navbar-text" href="/">
            <h3 className="font-weight-bold navbar-logo">DF</h3>
          </a>

          <div className="mobile-navbar">
          </div>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              {/* <NavLink to="/about">
                <a className="nav-item nav-link">
                  <h4>About</h4>
                </a>
              </NavLink>
              <NavLink to="/projects">
                <a className="nav-item nav-link">
                  <h4>Projects</h4>
                </a>
              </NavLink>
              <NavLink to="/contact">
                <a className="nav-item nav-link">
                  <h4>Contact</h4>
                </a>
              </NavLink> */}
              <NavLink to="/resume">
                <a className="nav-item nav-link">
                  <h4>Resumé</h4>
                </a>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

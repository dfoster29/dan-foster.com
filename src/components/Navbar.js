import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <a className="navbar-brand navbar-text" href="/">
              <h3 className="font-weight-bold">DF</h3>
            </a>

          <div className="mobile-navbar">
            <div className="row">
              <NavLink to="/about">
                <div className="col-3 text-center">
                  <a className="">
                    <h4>A</h4>
                  </a>
                </div>
              </NavLink>
              <NavLink to="/portfolio">
                <div className="col-3 text-center">
                  <a className="">
                    <h4>P</h4>
                  </a>
                </div>
              </NavLink>
              <NavLink to="/contact">
                <div className="col-3 text-center">
                  <a className="">
                    <h4>C</h4>
                  </a>
                </div>
              </NavLink>
              <NavLink to="/resume">
                <div className="col-3 text-center">
                  <a className="">
                    <h4>R</h4>
                  </a>
                </div>
              </NavLink>
            </div>
          </div>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <NavLink to="/about">
                <a className="nav-item nav-link">
                  <h4>About</h4>
                </a>
              </NavLink>
              <NavLink to="/portfolio">
                <a className="nav-item nav-link">
                  <h4>Portfolio</h4>
                </a>
              </NavLink>
              <NavLink to="/contact">
                <a className="nav-item nav-link">
                  <h4>Contact</h4>
                </a>
              </NavLink>
              <NavLink to="/resume">
                <div className="nav-item nav-link">
                  <h4>Resumé</h4>
                </div>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

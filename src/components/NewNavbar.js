import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="custom-navbar">
          <div className="row">
            <div className="col-md-6 col-4">
              <a className="navbar-brand" href="/">
                <h3 className="font-weight-bold navbar-logo pl-4">DF</h3>
              </a>
            </div>

            <div className="col-md-6 col-8">
              <div className="row">
                <div className="col-md-3 col-6 navlink-col navlink-padding">
                  <NavLink to="/about" className="navbar-text font-weight-bold">About</NavLink>
                </div>
                <div className="col-md-3 col-6 navlink-col-right navlink-padding">
                  <NavLink to="/portfolio" className="navbar-text font-weight-bold">Portfolio</NavLink>
                </div>
                <div className="col-md-3 col-6 navlink-col">
                  <NavLink to="/contact" className="navbar-text font-weight-bold">Contact</NavLink>
                </div>
                <div className="col-md-3 col-6 navlink-col-right">
                  <NavLink to="/resume" className="navbar-text font-weight-bold">Resumé</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

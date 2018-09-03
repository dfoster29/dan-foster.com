import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Info from "../images/info.png";
import Portfolio from "../images/portfolio.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand navbar-text" href="/">
            <h3 className="font-weight-bold">
              <span className="align-top">D</span>
              <span className="align-bottom">F</span>
            </h3>
          </a>

          <div className="mobile-navbar">
            <div className="row text-center">
              <NavLink to="/about">
                <div className="col-3">
                  {/* <img src={Info} className="navbar-image" alt="info" /> */}
                  about
                </div>
              </NavLink>
              <NavLink to="/portfolio">
                <div className="col-3">
                  {/* <img src={Portfolio} className="navbar-image" alt="portfolio" /> */}
                  portfolio
                </div>
              </NavLink>
              <NavLink to="/contact">
                <div className="col-3">contact</div>
              </NavLink>
              <NavLink to="/resume">
                <div className="col-3">resumé</div>
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

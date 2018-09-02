import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand navbar-text" href="/">
            <h3 className="font-weight-bold">Daniel Foster</h3>
          </a>

          <div className="mobile-navbar">
            <div className="row">
              <div className="col-3 text-center">
                <a className="" href="/about">
                  <h4>A</h4>
                </a>
              </div>
              <div className="col-3 text-center">
                <a className="" href="/portfolio">
                  <h4>P</h4>
                </a>
              </div>
              <div className="col-3 text-center">
                <a className="" href="/contact">
                  <h4>C</h4>
                </a>
              </div>
              <div className="col-3 text-center">
                <a className="" href="/resume">
                  <h4>R</h4>
                </a>
              </div>
            </div>
          </div>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="/about">
                <h4>About</h4>
              </a>
              <a className="nav-item nav-link" href="/portfolio">
                <h4>Portfolio</h4>
              </a>
              <a className="nav-item nav-link" href="/contact">
                <h4>Contact</h4>
              </a>
              <a className="nav-item nav-link" href="/resume">
                <h4>Resumé</h4>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

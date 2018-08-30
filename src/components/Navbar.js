import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand navbar-text px-3 py-1 my-1" href="/">
            <h3 className="font-weight-bold">Daniel Foster</h3>
          </a>
          <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
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

import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <h1 className="navbar-text">
          Daniel Foster
        </h1>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="./index.html">
              About
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="./portfolio.html">
              Portfolio
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="./contact.html">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
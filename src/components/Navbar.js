import React, { Component } from "react";
import Github from "../images/github.png";
import Linkedin from "../images/linkedin.png";
import StackOverflow from "../images/stackoverflow.png";
import Gmail from "../images/gmail.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="d-flex navbar fixed-top navbar-light bg-light py-0 shadow-lg">
          <a className="navbar-brand navbar-text" href="/">
            <h3 className="font-weight-bold navbar-logo">DF</h3>
          </a>

            <div className="navbar-nav">
            <div className="row justify-content-center">
            
            <a href="mailto:danieljfoster87@gmail.com">
                <img
                  src={Gmail}
                  className="img-fluid contact-image m-2"
                  alt="gmail"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-foster-8a2503126/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Linkedin}
                  className="img-fluid contact-image m-2"
                  alt="linkedin"
                />
              </a>
              <a
                href="https://github.com/dfoster29"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Github}
                  className="img-fluid contact-image m-2"
                  alt="github"
                />
              </a>
              <a
                href="https://stackoverflow.com/users/9247974/daniel-foster?tab=profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={StackOverflow}
                  className="img-fluid contact-image m-2"
                  alt="stack overflow"
                />
              </a>
            
            </div>

            </div>
          
        </nav>
      </div>
    );
  }
}

export default Navbar;

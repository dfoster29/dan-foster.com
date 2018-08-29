import React, { Component } from "react";
import ProfilePic from "../images/profile-pic.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <img
            src={ProfilePic}
            className="img-fluid profile-image component-shadow"
            alt="profile"
          />
          <div className="name-text font-weight-bold">Daniel Foster</div>
          <h3>Full-Stack Web Developer</h3>
        </div>
      </div>
    );
  }
}

export default Home;

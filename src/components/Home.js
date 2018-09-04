import React, { Component } from "react";
import ProfilePic from "../images/profile-pic.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container content-container">
          <div className="jumbotron text-center">
            <img
              src={ProfilePic}
              className="img-fluid profile-image"
              alt="profile"
            />
            <div className="name-text font-weight-bold">Daniel Foster</div>
            <h2 className="job-text">Full-Stack</h2>
            <h2 className="job-text">Web Developer</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

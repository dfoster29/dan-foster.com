import React, { Component } from "react";
import ProfilePic from "../images/profile-pic.jpg";
import PortfolioCard from "./PortfolioCard";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-container">
          <div className="row my-5">
            <div className="col-md-3" />
            <div className="col-md-3">
              <img src={ProfilePic} className="profile-image" alt="profile" />
            </div>
            <div className="col-md-3 name-section">
              <h1 className="text-center">Daniel Foster</h1>
              <h1 className="text-center">Web Developer</h1>

            </div>
            <div className="col-md-3" />
          </div>
          <PortfolioCard />
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import ProfilePic from "../images/profile-pic.jpg";
import PortfolioCard from "./PortfolioCard";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-container">
          <div className="home-grid">
            <div className="profile-section">
              <img src={ProfilePic} className="profile-image" alt="profile" />
            </div>

            <div className="name-section">
              <h1>Daniel Foster</h1>
              <h1>Web Developer</h1>
            </div>
          </div>
        </div>
        <PortfolioCard />
      </div>
    );
  }
}

export default Home;

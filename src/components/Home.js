import React, { Component } from "react";
import ProfilePic from "../images/willow.JPG";
// import PortfolioCard from "./PortfolioCard";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-container">
          <div className="home-grid">
            <div className="profile-section">
              <img src={ProfilePic} className="profile-image" alt="profile" />
              <p className="img-name">Daniel Foster</p>
              <p className="img-role">Front End Developer</p>

            </div>

            <div className="skills-section">
              <div className="postit">
              <h2>skills</h2>
              <div className="skills-grid">
                <p>HTML</p>
                <p>CSS</p>
                <p>CSS Grid</p>
                <p>Javascript</p>
                <p>React</p>
                <p>NPM</p>
                <p>Github</p>
                <p>Node</p>
                <p>jQuery</p>
                <p></p>
              </div>
              </div>
            </div>


          </div>
        </div>
        {/* <PortfolioCard /> */}
      </div>
    );
  }
}

export default Home;

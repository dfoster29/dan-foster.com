import React, { Component } from "react";
import ProfilePic from "../images/willow.JPG";
import PortfolioCard from "./PortfolioCard";

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
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>CSS Grid</li>
                <li>Javascript</li>
                <li>React</li>
                <li>NPM</li>
                <li>Github</li>
                <li>Node</li>
              </ul>
              </div>
            </div>

            {/* <div className="name-section">
              <h1 className="name">Daniel Foster</h1>
              <h1 className="title">Web Developer</h1>
            </div> */}
          </div>
        </div>
        {/* <PortfolioCard /> */}
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import ProfilePic from "../images/profile-pic.jpg";
import PortfolioCard from "./PortfolioCard";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-container">
          <div className="row my-5">


            <div className="col-md-6 col-12 text-center align-content-center">
              <img src={ProfilePic} className="profile-image" alt="profile" />
            </div>

            <div className="col-md-6 text-center name-section align-content-center">
              <h1>Daniel Foster</h1>
              <h1>Web Developer</h1>
            </div>


          </div>
          <PortfolioCard />
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import ProfilePic from "../images/profile-pic.jpg";
import PortfolioCard from "./PortfolioCard";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container home-container mb-5">
          <div className="row justify-content-center">
            <div className="col-md-4 text-center">
              <img
                src={ProfilePic}
                className="profile-image shadow-lg"
                alt="profile"
              />
            </div>

            <div className="col-md-8 text-center">
              <div className="name-text mt-5">
                Daniel Foster
                {/* <h2 className="job-text">Front-End</h2> */}
                <h2 className="job-text">Web Developer</h2>
              </div>
            </div>
          </div>
        </div>

        <PortfolioCard />
      </div>
    );
  }
}

export default Home;

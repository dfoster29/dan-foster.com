import React, { Component } from "react";
import ProfilePic from "../images/profile-pic.jpg";
import ContactCard from "./ContactCard";
import PortfolioCard from "./PortfolioCard";

class Home extends Component {
  render() {
    return (
      <div>
        {/* need to restyle, hard to read on smaller screens due to text color */}
        <div className="container home-container">
          <div className="jumbotron text-center">
            <img
              src={ProfilePic}
              className="img-fluid profile-image"
              alt="profile"
            />

            <div className="name-text">Daniel Foster</div>
            {/* <h2 className="job-text">Front-End</h2> */}
            <h2 className="job-text">Web Developer</h2>
          </div>
        </div>

        <PortfolioCard />

        <div className="mx-4 p-5">
          <ContactCard />
        </div>



      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import BootcampHelper from "../images/bootcamphelper.png";
import Burger from "../images/burger.png";
import Crystal from "../images/crystal.png";
import DriveBar from "../images/drivebar.png";
import FriendFinder from "../images/friendfinder.png";
import Giphy from "../images/giphy.png";
import Hangman from "../images/hangman.png";
import PlentyOfPups from "../images/plentyofpups.png";
import Train from "../images/train.png";
import Trivia from "../images/trivia.png";

class PortfolioCard extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <a href="https://plenty-of-pups.herokuapp.com/">
            <img
              src={PlentyOfPups}
              className="img-fluid portfolio-item shadow-lg"
              alt="plenty of pups"
            />
          </a>

          <a href="https://bootcamp-helper.herokuapp.com/">
            <img
              src={BootcampHelper}
              className="img-fluid portfolio-item shadow-lg"
              alt="bootcamp helper"
            />
          </a>

          <a href="https://aqueous-retreat-57767.herokuapp.com/index">
            <img
              src={Burger}
              className="img-fluid portfolio-item shadow-lg"
              alt="burger app"
            />
          </a>

          <a href="https://shielded-river-80675.herokuapp.com/">
            <img
              src={FriendFinder}
              className="img-fluid portfolio-item shadow-lg"
              alt="friend finder"
            />
          </a>

          <a href="https://dfoster29.github.io/Crystal-Game/">
            <img
              src={Crystal}
              className="img-fluid portfolio-item shadow-lg"
              alt="crystal game"
            />
          </a>

          <a href="https://dfoster29.github.io/project-1/">
            <img
              src={DriveBar}
              className="img-fluid portfolio-item shadow-lg"
              alt="drive bar"
            />
          </a>

          <a href="https://dfoster29.github.io/Giphy-API/">
            <img src={Giphy} className="img-fluid portfolio-item" alt="giphy" />
          </a>

          <a href="https://dfoster29.github.io/Hangman-Game/">
            <img
              src={Hangman}
              className="img-fluid portfolio-item shadow-lg"
              alt="doggo hangman"
            />
          </a>

          <a href="https://dfoster29.github.io/firebase/">
            <img
              src={Train}
              className="img-fluid portfolio-item shadow-lg"
              alt="train time app"
            />
          </a>

          <a href="https://dfoster29.github.io/TriviaGame/">
            <img
              src={Trivia}
              className="img-fluid portfolio-item shadow-lg"
              alt="trivia game"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default PortfolioCard;

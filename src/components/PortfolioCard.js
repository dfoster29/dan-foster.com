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
        <div className="container px-3">
          <div className="">
            <div className="contact-header text-center">Portfolio</div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <a href="https://plenty-of-pups.herokuapp.com/">
                <img
                  src={PlentyOfPups}
                  className="img-fluid portfolio-item p-2 mb-3"
                  alt="plenty of pups"
                />
              </a>
            </div>
            <div className="col-md-6">
              <a href="https://bootcamp-helper.herokuapp.com/">
                <img
                  src={BootcampHelper}
                  className="img-fluid portfolio-item p-2 mb-3"
                  alt="bootcamp helper"
                />
              </a>
            </div>
            <div className="col-md-6">
              <a href="https://aqueous-retreat-57767.herokuapp.com/index">
                <img
                  src={Burger}
                  className="img-fluid portfolio-item p-2 my-3"
                  alt="burger app"
                />
              </a>
            </div>
            <div className="col-md-6">
              <a href="https://dfoster29.github.io/Crystal-Game/">
                <img
                  src={Crystal}
                  className="img-fluid portfolio-item p-2 my-3"
                  alt="crystal game"
                />
              </a>
            </div>
            <div className="col-md-6">
              <a href="https://dfoster29.github.io/project-1/">
                <img
                  src={DriveBar}
                  className="img-fluid portfolio-item p-2 my-3"
                  alt="drive bar"
                />
              </a>
            </div>
            <div className="col-md-6">
              <a href="https://shielded-river-80675.herokuapp.com/">
                <img
                  src={FriendFinder}
                  className="img-fluid portfolio-item p-2 my-3"
                  alt="friend finder"
                />
              </a>
            </div>
            <div className="col-md-6">
              <a href="https://dfoster29.github.io/Giphy-API/">
                <img
                  src={Giphy}
                  className="img-fluid portfolio-item p-2 my-3"
                  alt="giphy"
                />
              </a>
            </div>
            <div className="col-md-6">
              <a href="https://dfoster29.github.io/Hangman-Game/">
                <img
                  src={Hangman}
                  className="img-fluid portfolio-item p-2 my-3"
                  alt="doggo hangman"
                />
              </a>
            </div>

            <div className="col-md-6">
              <a href="https://dfoster29.github.io/firebase/">
                <img
                  src={Train}
                  className="img-fluid portfolio-item p-2 my-3"
                  alt="train time app"
                />
              </a>
            </div>
            <div className="col-md-6">
              <a href="https://dfoster29.github.io/TriviaGame/">
                <img
                  src={Trivia}
                  className="img-fluid portfolio-item p-2 my-3"
                  alt="trivia game"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioCard;

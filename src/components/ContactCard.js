import React, { Component } from "react";
import Facebook from "../images/facebook.png";
import Gmail from "../images/gmail.png";
import Github from "../images/github.png";
import Instagram from "../images/instagram.png";
import Linkedin from "../images/linkedin.png";
import StackOverflow from "../images/stackoverflow.png";
import Spotify from "../images/spotify.png";
import Twitter from "../images/twitter.png";

class ContactCard extends Component {
  render() {
    return (
      <div>
        <div className="container text-center mt-5">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="mb-5">
                <div className="">
                  <h1 className="contact-header">Professional</h1>
                </div>
                <div className="mt-5">
                  <div className="row">
                    <div className="col-md-3 col-6">
                      <a href="mailto:danieljfoster87@gmail.com">
                        <img
                          src={Gmail}
                          className="img-fluid contact-image p-3"
                          alt="gmail"
                        />
                      </a>
                    </div>

                    <div className="col-md-3 col-6">
                      <a href="https://www.linkedin.com/in/dan-foster-8a2503126/">
                        <img
                          src={Linkedin}
                          className="img-fluid contact-image p-3"
                          alt="linkedin"
                        />
                      </a>
                    </div>
                    <div className="col-md-3 col-6">
                      <a href="https://github.com/dfoster29">
                        <img
                          src={Github}
                          className="img-fluid contact-image p-3"
                          alt="github"
                        />
                      </a>
                    </div>
                    <div className="col-md-3 col-6">
                      <a href="https://stackoverflow.com/users/9247974/daniel-foster?tab=profile">
                        <img
                          src={StackOverflow}
                          className="img-fluid contact-image p-3"
                          alt="stack overflow"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="mb-5">
                <div className="">
                  <h1 className="contact-header">Personal</h1>
                </div>
                <div className="mt-5">
                  <div className="row">
                    <div className="col-md-3 col-6">
                      <a href="https://www.instagram.com/fosterthedan/">
                        <img
                          src={Instagram}
                          className="img-fluid contact-image p-3"
                          alt="instagram"
                        />
                      </a>
                    </div>
                    <div className="col-md-3 col-6">
                      <a href="https://www.facebook.com/danfoster29">
                        <img
                          src={Facebook}
                          className="img-fluid contact-image p-3"
                          alt="facebook"
                        />
                      </a>
                    </div>
                    <div className="col-md-3 col-6">
                      <a href="https://open.spotify.com/user/12146437690?si=16ZNT_WZQ4yHmbmoT7LvWQ&nd=1">
                        <img
                          src={Spotify}
                          className="img-fluid contact-image p-3"
                          alt="spotify"
                        />
                      </a>
                    </div>
                    <div className="col-md-3 col-6">
                      <a href="https://twitter.com/dfost29">
                        <img
                          src={Twitter}
                          className="img-fluid contact-image p-3"
                          alt="twitter"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactCard;

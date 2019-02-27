import React, { Component } from "react";
// import Facebook from "../images/facebook.png";
import Gmail from "../images/gmail.png";
import Github from "../images/github.png";
// import Instagram from "../images/instagram.png";
import Linkedin from "../images/linkedin.png";
import StackOverflow from "../images/stackoverflow.png";
// import Spotify from "../images/spotify.png";

class ContactCard extends Component {
  render() {
    return (
      <div>
        {/* <div className="contact-container container">
          <div className="row justify-content-center">
            <div className="col-md-12"> */}
              <div className="row">
                <div className="col-md-3 col-6 mb-3">
                  <div className="contact-background">
                    <a href="mailto:danieljfoster87@gmail.com">
                      <img
                        src={Gmail}
                        className="img-fluid contact-image"
                        alt="gmail"
                      />
                    </a>
                  </div>
                </div>

                <div className="col-md-3 col-6 mb-3">
                  <div className="contact-background">
                    <a
                      href="https://www.linkedin.com/in/dan-foster-8a2503126/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Linkedin}
                        className="img-fluid contact-image"
                        alt="linkedin"
                      />
                    </a>
                  </div>
                </div>

                <div className="col-md-3 col-6 mb-3">
                  <div className="contact-background">
                    <a
                      href="https://github.com/dfoster29"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Github}
                        className="img-fluid contact-image"
                        alt="github"
                      />
                    </a>
                  </div>
                </div>

                <div className="col-md-3 col-6 mb-3">
                  <div className="contact-background">
                    <a
                      href="https://stackoverflow.com/users/9247974/daniel-foster?tab=profile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={StackOverflow}
                        className="img-fluid contact-image"
                        alt="stack overflow"
                      />
                    </a>
                  </div>
                </div>
              </div>
            {/* </div> */}

            {/* <div className="col-md-12 ">
              <div className="mb-3">
                {/* <div className="">
                  <h1 className="contact-header">Personal</h1>
                </div> */}
                {/* <div className="">
                  <div className="row justify-content-center">
                    <div className="col-md-3 col-6 mb-3">
                      <div className="contact-background">
                        <a
                          href="https://www.instagram.com/fosterthedan/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={Instagram}
                            className="img-fluid contact-image"
                            alt="instagram"
                          />
                        </a>
                      </div>
                    </div>

                    <div className="col-md-3 col-6 mb-3">
                      <div className="contact-background">
                        <a
                          href="https://open.spotify.com/user/12146437690?si=16ZNT_WZQ4yHmbmoT7LvWQ&nd=1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={Spotify}
                            className="img-fluid contact-image"
                            alt="spotify"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
              {/* </div>
            </div> */}
          {/* </div>
        </div> */}
      </div>
    );
  }
}

export default ContactCard;

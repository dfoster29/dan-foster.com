import React, { Component } from "react";

class ContactCard extends Component {
  render() {
    return (
      <div>
        <div className="container p-5">
          <a
            className="button btn btn-lg btn-light m-5"
            href="https://www.facebook.com/danfoster29"
          >
            facebook
          </a>
          <a
            className="button btn btn-lg btn-light m-5"
            href="https://www.linkedin.com/in/dan-foster-8a2503126/"
          >
            linkedin
          </a>
          <a
            className="button btn btn-lg btn-light m-5"
            href="https://github.com/dfoster29"
          >
            github
          </a>
          <a
            className="button btn btn-lg btn-light m-5"
            href="https://stackoverflow.com/users/9247974/daniel-foster?tab=profile"
          >
            stack overflow
          </a>
          <a
            className="button btn btn-lg btn-light m-5"
            href="https://www.instagram.com/fosterthedan/"
          >
            instagram
          </a>
          <a
            className="button btn btn-lg btn-light m-5"
            href="https://open.spotify.com/user/12146437690?si=16ZNT_WZQ4yHmbmoT7LvWQ&nd=1"
          >
            spotify
          </a>
          <a
            className="button btn btn-lg btn-light m-5"
            href="mailto:danieljfoster87@gmail.com"
          >
            gmail
          </a>
        </div>
      </div>
    );
  }
}

export default ContactCard;

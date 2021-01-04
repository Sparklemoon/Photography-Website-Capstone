import React, { Component } from "react";

import Login from "./login.js";
import loginImg from "../../static/assets/images/login.jpg";


export default class Auth extends Component {
  constructor(props) {
    super(props);

    document.getElementById("blocks").style.display = "none";
    document.getElementById("my-gallery").style.display ="none";
    document.getElementById("contacts").style.display = "none";

    this.handleSuccessfullAuth = this.handleSuccessfullAuth.bind(this);
    this.handleUnsuccessfullAuth = this.handleUnsuccessfullAuth.bind(this);
  }



  handleSuccessfullAuth() {
    this.props.handleSuccessfullLogin();
    this.props.history.push("/");
  }

  handleUnsuccessfullAuth() {
    console.log(this.props)
    this.props.handleUnsuccessfullLogin();
  }

  

  render() {
    return (



      <div className="auth-page-wrapper">
        <div
          className="left-column"
          style={{
            backgroundImage: `url(${loginImg})`
          }}
        />

        <div className="right-column">
          <Login
            handleSuccessfulAuth={this.handleSuccessfullAuth}
            handleUnsuccessfulAuth={this.handleUnsuccessfullAuth}
          />
        </div>
      </div>
    );
  }
}
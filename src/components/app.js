import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom"
import axios from 'axios';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSignOutAlt, faEdit } from "@fortawesome/free-solid-svg-icons";




import Navbar from "./navbar.js";
import Home from './home.js';
import Gallery from './gallery.js';
import Contact from './contact.js';
import PageManager from './page/page-manager';    
import PageDetail from './page/page-detail';
import Auth from "./auth.js";
import noMatch from "./no-match";

library.add(faTrash, faSignOutAlt, faEdit);


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfullLogin = this.handleSuccessfullLogin.bind(this);
    this.handleUnsuccessfullLogin = this.handleUnsuccessfullLogin.bind(this);
    this.handleSuccessfullLogout = this.handleSuccessfullLogout.bind(this);
  }

  handleSuccessfullLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  

  handleUnsuccessfullLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  handleSuccessfullLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

    checkLoginStatus() {
      return axios.get("API_KEY", { 
        withCredentials: true 
      })
      .then(response => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
    }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [
        <Route key="page-manager" path="/page-manager" component={PageManager} />
        ];  
      }

  render() {
    return (
      <div className='container'>
      <Router>
          <div>
          
           <Navbar 
            loggedInStatus={this.state.loggedInStatus}
            handleSuccessfullLogout={this.state.handleSuccessfullLogout} 
            />

            
            <Switch>
              <Route exact path="/" component={Home} />

              <Route 
              path="/auth" 
              render={props => (
                <Auth 
                  {...props}
                  handleSuccessfullLogin={this.handleSuccessfullLogin}
                  handleUnsuccessfullLogin={this.handleUnsuccessfullLogin}
                />
              )}
            />

              <Route path="/gallery" component={Gallery} />
              <Route path="/contact" component={Contact} />
              {this.state.loggedInStatus ==="LOGGED_IN" ? (
                this.authorizedPages()
                ) :null}
              
              <Route 
                exact 
                path="/page/:slug" 
                component={PageDetail} 
              />
              <Route component={noMatch} />
              
            </Switch>
          </div>
      </Router> 
     </div>
    );
  }
}






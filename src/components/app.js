import React, { Component } from 'react';


import Navbar from "./navbar.js";
import PageContent from "./page-content.js";
import Auth from "./auth.js";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar/>
        <PageContent/>
        <div className='app-auth-wrapper'>
        <Auth/>
        </div>
      </div>
    );
  }
}

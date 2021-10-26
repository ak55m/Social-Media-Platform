import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import Navbar from './Header/Navbar';
import HomeProfile from './Body/HomeProfile';
import PostForm from './Body/PostForm';
import Trending from './Body/Trending';
import FeedPosts from './Body/FeedPosts';


 class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container wrapper">
          <div className="row">
            <div className="col-md-3">
              <HomeProfile/>
            </div>
            <div className="col-md-6">
              <PostForm/>
              <FeedPosts/>
            </div>
            <div className="col-md-3">
              <Trending/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;



import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import MyWork from './MyWork';
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';
import Home from './HomeSection';

const NavigationBar = () => (
  <Router> 
      <div>
        <nav className="navBar">
          <div className="navLink">
            <Link to="/Home">Home</Link>
          </div>

          <div className="navLink"> 
            <Link to={"/MyWork"}>My Work</Link>
          </div>

          <div className="navLink">
            <Link to={"/AboutMe"}>About Me</Link>
          </div>

          <div className="navLink">
            <Link to={"/contact"}>Contact Me</Link>
          </div>

        </nav>
      
        <Route exact strict path={"/"} component={Home}/>
        <Route path={"/Home"} component={Home}/>
        <Route path={"/AboutMe"} component={AboutMe}/>
        <Route path={"/MyWork"} component={MyWork}/>
        <Route path={'/contact'} component={ContactMe} />
        <Route path={'/saykaren.github.io/sayKaren_Portfolio_2019/'} component={Home} />
      </div>
  </Router>      
  );

export default NavigationBar
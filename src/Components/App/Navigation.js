import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
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
      </div>    
        <Route exact strict path ="/" component={Home}/>
        <Route path={"/Home"} component={Home}/>
        <Route path={"/AboutMe"} component={AboutMe}/>
        <Route path={"/MyWork"} component={MyWork}/>
        <Route path={'/contact'} component={ContactMe} />
        <Route path={'/saykaren.github.io/saykarenaugsix_deploy/'} component={Home} />
        <Route exact strict path={"https://saykaren.github.io/"} component={Home} />
        <Route exact strict path={"https://saykaren.github.io/Home"} component={Home} />
     
        <Route exact strict path ="/saykaren.github.io/saykarenaugsix_deploy/" component={Home}/>

      </Router>
  );

export default NavigationBar
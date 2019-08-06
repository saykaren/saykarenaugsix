import React from 'react';
import './App.css';
import NavigationBar from './Navigation';
import Footer from './Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './HomeSection';
// import FrontPage from './FrontPage';
import MyWork from './MyWork';
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';

const App = () => (
  <div>
    <NavigationBar />
    <Footer />
  </div>
  );

export default App;
import React from 'react';
import './App.css';
import NavigationBar from './Navigation';
import Footer from './Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './HomeSection';

const App = () => (
  <div>
    <NavigationBar />
    <Footer />
  <Router basename={'/'}>
    <Route exact strict path ="/" component={Home}/>
  </Router>
  </div>

  );

export default App;
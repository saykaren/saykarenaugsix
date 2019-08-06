import React from 'react';
import './App.css';
import NavigationBar from './Navigation';
import Footer from './Footer';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './HomeSection';

const App = () => (
   <Router basename={'/'}>
      <NavigationBar />
      <Footer />
        <Route exact strict path ="/" component={Home}/>
    </Router>
  );

export default App;
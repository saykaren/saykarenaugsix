import React from 'react';
import './App.css';
import karenHero from '../../assets/karenHero.jpg'


const HeroSection= () => (
      <main
        className="heroSection"
        id="heroImage"
      >        
        <img src={karenHero}
          alt="Karen Garcia"
          id="heroContactPic"
          rel="noopener noreferrer"
        />  
        <section id="iconSection">
          <a href="https://github.com/saykaren" rel="noopener noreferrer" target="_blank" className="icons">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://codepen.io/saykaren/" rel="noopener noreferrer" target="_blank" className="icons">
            <i className="fab fa-codepen"></i>
          </a>
          <a href="https://www.linkedin.com/in/karen-garcia-05842642/" rel="noopener noreferrer" target="_blank" className="icons">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </section>
      </main> 
  );

export default HeroSection
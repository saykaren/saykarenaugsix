import React from 'react';
import './App.css';
import sayKarenLogoWhite from '../../assets/sayKaren_logo-white_8.1.2019.png'
import LogoState from './LogoState';


const FrontPage= () => (
    <div>
      <main
        className="heroSection"
        id="heroImage"
      >        
        <h1
        id="heroText"
        >
          Karen Garcia
          <section id="heroTitle">
            Front End Developer
          </section>
        </h1> 

        <section id="stateLogo">
        <img src={sayKarenLogoWhite}
              className="footerDetails"
              id="sayKarenLogoFrontPage"
              alt="sayKaren.com"
        />
        <div 
          id="stateChange"
        >
          <LogoState />
        </div>
        </section>
      </main> 
    </div> 
  );

export default FrontPage
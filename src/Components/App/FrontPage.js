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
import React from 'react';
import './App.css';
import freeCodeCamp from '../../assets/Karen_freeCodeCamp_Certificate_Responsive_Web_Design_2.13.2019.png'
import ReactWebsite from '../../assets/React_Website_ES6_8.1.2019.png'
import NumberGif from '../../assets/Number_Guesser.gif'
import Bomdigity from '../../assets/Bomdigity.gif'
import flashcard from '../../assets/flashcard-starter.gif'
import check from '../../assets/checkwritting.png'
import GitFitter from '../../assets/GitFitter.gif'
import businessFinancial from '../../assets/businessFinancial.png'


const MyWork = () => (
    <div>
      <h1 id="myWork">
        Work Examples
        
      </h1>
        <main id="workContainer">
        <section className="workPortfolio">
            <section className="front">
              <img 
                src={GitFitter}
                className="workImg"
                alt="GitFitter"
              />
            </section>
            <section className="back">
              <span className="strong">
              Project Name:
              </span>
              <span className="workDetails">
              GitFitter
              </span>
              <span className="strong">
                Demonstrates: 
              </span>
              <span className="workDetails">
                SASS / React / Hooks 
              </span>
              <a href="https://github.com/saykaren/GetFitter" target="_blank" rel="noopener noreferrer" className="workDetails">
                Code 
              </a>
              <a href="https://saykaren.github.io/GitFitter_DeployedSite/" target="_blank" rel="noopener noreferrer" className="workDetails">
                Live Site
              </a>
            </section>
          </section>

          <section className="workPortfolio">
            <section className="front">
              <img 
                src={businessFinancial}
                className="workImg"
                alt="Business Financial Analysis"
              />
            </section>
            <section className="back">
              <span className="strong">
              Project Name:
              </span>
              <span className="workDetails">
              Business Financial Analysis
              </span>
              <span className="strong">
                Demonstrates: 
              </span>
              <span className="workDetails">
                React / Hooks / SASS 
              </span>
              <a href="https://github.com/saykaren/FinancialAnalysis" target="_blank" rel="noopener noreferrer" className="workDetails">
                Code 
              </a>
              <a href="https://saykaren.github.io/BusinessFinancialAnalysis/" target="_blank" rel="noopener noreferrer" className="workDetails">
                Live Site
              </a>
            </section>
          </section>

          <section className="workPortfolio">
            <section className="front">
              <img 
                src={ReactWebsite}
                className="workImg"
                alt="Alanna_website"
              />
            </section>
            <section className="back">   
              <span className="strong">
              Project Name:
              </span>
              <span className="workDetails">
              Psychologist Website
              </span>
              <span className="strong">
                Demonstrates: 
              </span>
              <span className="workDetails">
                React skills and ES6
              </span>
              <a href="https://github.com/saykaren/deployMagic" target="_blank" rel="noopener noreferrer" className="workDetails">
                Code 
              </a>
              <a href="https://saykaren.github.io/deployMagic/" target="_blank" rel="noopener noreferrer" className="workDetails">
                Live Site
              </a>
            </section>
          </section>

          <section className="workPortfolio">
            <section className="front">
              <img 
                src={NumberGif}
                className="workImg"
                alt="Number gif"
              />
            </section>
            <section className="back">  
              <span className="strong">
              Project Name:
              </span>
              <span className="workDetails">
              Number Guesser
              </span>
              <span className="strong">
                Demonstrates: 
              </span>
              <span className="workDetails">
              Vanilla JavaScript skills
              </span>
              <a href="https://github.com/saykaren/Number_Guesser" target="_blank" rel="noopener noreferrer" className="workDetails">
                Code 
              </a>
              <a href="https://saykaren.github.io/Number_Guesser/" target="_blank" rel="noopener noreferrer"  className="workDetails">
                Live Site
              </a>
            </section>
          </section>

          <section className="workPortfolio">
            <section className="front">
              <img 
                src={Bomdigity}
                className="workImg"
                alt="Bomdigity"
              />
            </section>
            
            <section className="back"> 
              <span className="strong">
              Project Name:
              </span>
              <span className="workDetails">
              Bomdigity Testing
              </span>
              <span className="strong">
                Demonstrates:   
              </span>
              <span className="workDetails">
              Testing skills with JavaScript framework Mocha and Chai
              </span>
              <a href="https://github.com/saykaren/Bomdigity_Testing" target="_blank" rel="noopener noreferrer"  className="workDetails">
                Code 
              </a>
            </section>
          </section>

          <section className="workPortfolio">
            <section className="front">
              <img 
                src={flashcard}
                className="workImg"
                alt="Flashcard gif"
              />
            </section>
            <section className="back">
              <span className="strong">
              Project Name:
              </span>
              <span className="workDetails">
              Flashcards-Starter
              </span>
              <span className="strong">
                Demonstrates: 
              </span>
              <span className="workDetails">
                JavaScript Classes and Object-oriented Programming (OOP)
              </span>
              <a href="https://github.com/saykaren/flashcards-starter" target="_blank" rel="noopener noreferrer"  className="workDetails">
                Code 
              </a>
              Live: Clone repo and in command line use node index.js to start game 
            </section>
          </section>

          <section className="workPortfolio">
            <section className="front">
              <img 
                src={check}
                className="workImg"
                alt="Check writting"
              />
            </section>
            <section className="back">
              <span className="strong">
              Project Name:
              </span>
              <span className="workDetails">
              Check Conversion
              </span>
              <span className="strong">
                Demonstrates: 
              </span>
              <span className="workDetails">
                Vanilla Javascript and ES6 Skills
              </span>
              <a href="https://github.com/saykaren/CheckWriting7.26.2019" target="_blank" rel="noopener noreferrer" className="workDetails">
                Code 
              </a>
              <a href="https://saykaren.github.io/CheckWriting7.26.2019/" target="_blank" rel="noopener noreferrer" className="workDetails">
                Live Site
              </a>
            </section>
          </section> 

          <section className="workPortfolio">
            <section className="front">
              <a href="https://www.freecodecamp.org/certification/saykaren/responsive-web-design" 
                target="_blank" 
                rel="noopener noreferrer"
                className="workDetails" 
                id="freeCodeCamp"
              >
                <img 
                  src={freeCodeCamp}
                  className="workImg"
                  alt="freeCodeCamp Certificate"
                />
              </a>
            </section>
            <section className="back">
              <span className="strong">
              Certificate
              </span>
              <span className="workDetails">
                freeCodeCamp Responsive Web Design Certificate
              </span>
            </section>
          </section>

          {/* <section className="workPortfolio">
            <section className="front">
              <img 
                src=""
                className="workImg"
                alt=""
              />
            </section>
            <section className="back">
              <span className="strong">
              Project Name:
              </span>
              <span className="workDetails">
              ************
              </span>
              <span className="strong">
                Demonstrates: 
              </span>
              <span className="workDetails">
                ****************
              </span>
              <a href="" target="_blank" rel="noopener noreferrer" className="workDetails">
                Code 
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="workDetails">
                Live Site
              </a>
            </section>
          </section> */}

          
        </main>
    </div>
  );

export default MyWork
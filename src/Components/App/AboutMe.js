import React from 'react';
import './App.css';
import ContactMe from './ContactMe';

const AboutMe = () => (
    <div>
      <div
        className="services"

      >
        <section className="serviceSingleSection">
          <h2 className="serviceHeading">
          My Goal
          </h2>
            <article>
              <div>
                To do what you love everyday is not work but freedom. 
                I have fallen in love with the journey of programming and my goal is to pursue a career as a Front End Engineer. 
              </div>

            </article>
        </section>
        
        <section className="serviceSingleSection">
          <h2 className="serviceHeading">
          How My Coding Journey Began
          </h2>
            <article>
                <p>
                <strong>How Love Affair Began:</strong>
                  Back in November 2018 I started with python making a simple game in repli.it. From there I decided to learn more which is how I discovered freeCodeCamp.org. I received my 
                    <a 
                      href="https://www.freecodecamp.org/certification/saykaren/responsive-web-design" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      certificate
                    </a> 
                  in Response Web Design in February the following year. This allowed me to start with the basics of HTML and CSS as well as exposure to JavaScript. 
                </p>
                <p>
                  With the help of my mentors Maire and Dave I have been able to refine my knowledge on the basics as well as learn React and navigate through git.  
                  I believe you can learn anything, you just need to continually expose yourself to that information in different formats until it 
                  clicks in your head. With my resourcefulness and persistence that is what I have done with HTML, CSS, JavaScript, git and now React. With help 
                  from my mentors Maire and Dave, as well as books, Lynda.com, freeCodeCamp.org and tons of other resources I am continually working on refining my skills. 
                </p>
                <p>
                  I am excited for this new adventure. I look forward to lifting up others as I climb, the same way my mentors did for me.
                </p>
            </article>
        </section>
        
        <section className="serviceSingleSection">
          <h2 className="serviceHeading">
          A Love of Learning
          </h2>
            <article>
              I have come to realize my happiness is tied to my growth. When I am at my peak of fulfillment is when I am learning something new to better myself, my career or people around me. 
              By glancing at my resume you can see when I start with a company I just don't stay within one department or role but like to expand my knowledge into different areas so that I can serve the customer with that holistic approach. 
              I am one who loves to learn more as I realized the more I know the more I can help the end customer. 
            </article>
          </section>

          <section className="serviceSingleSection">
          <h2 className="serviceHeading">
          Non-Coding Activities
          </h2>
            <article>
              You can find me enjoying the warm summers at the pool, in my garden or on the golf course. Besides coding I am passionate about personal finance and investing. 
            </article>
          </section>
      </div>
    <ContactMe />
    </div>
  );

export default AboutMe
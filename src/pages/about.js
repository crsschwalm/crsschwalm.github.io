import React from 'react';
import meNana from '../assets/images/me-nana.jpg';

export const About = ({ className, id }) => (
  <div id={id}>
    <div className={`${className} hero`}>
      <section>
        <div className="text-area">
          <div>
            <h1>About Me</h1>
            <p>
              I am Carson Schwalm. Web Developer by day, husband and doggo dad
              by night. <br /> Currently working at DMI in Indianapolis as a
              Senior Software Engineer consulting for clients in the Indy area
              such as Eli Lilly & KAR. <br />
              <br />
              I'm on new projects often, but love the process of solutioning
              with team members and writing <em>Clean Code</em>.
            </p>
          </div>
          <div
            style={{ height: '100%', display: 'flex', alignItems: 'center' }}
          >
            <h2>
              This is my dog Nana <span rol="img">🍌</span>
            </h2>
          </div>
        </div>
        <img className="bordered-image" src={meNana} alt="Carson and Nana" />
      </section>
    </div>
  </div>
);

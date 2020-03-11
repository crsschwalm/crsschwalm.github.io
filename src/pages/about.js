import React from 'react';
import meNana from '../assets/images/me-nana.jpg'

export const About = ({ className, id }) => (
    <div id={id}>
        <div className={`${className} hero`}  >
            <section>
                <div className="text-area">
                    <div>
                        <h1>About Me</h1>
                        <p>I am Carson Schwalm. Web Developer by day, husband and doggo dad by night. <br /> Currently working at DMI in Indianapolis as a Senior Software Engineer consulting for Eli Lilly.  <br /><br />I'm on new projects often, but love the process of solutioning with team members and writing <em>Clean Code</em>.</p>
                    </div>
                    <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                        <h2>This is my dog Nana 🍌</h2>
                    </div>
                </div>
                <img className="bordered-image" src={meNana} alt="Carson and Nana" />
            </section>
        </div>
        <h1 style={{ textAlign: 'center', width: '100%' }}>Quick Quirks</h1>
        <section className="list-section">
            <div>
                <h3>Fit in</h3>
                <ul>
                    <li>Coffee Addict ☕️</li>
                    <li>Indianapolis Colts fanatic 🏈</li>
                    <li>Movie Buff 🍿</li>
                    <li>Work out every day and enjoy hikes 💪</li>
                    <li>World Traveler 🌎</li>
                    <li>Love Cooking 🥘</li>
                </ul>
            </div>
            <div>
                <h3>Things I've enjoyed</h3>
                <ul>
                    <li>Public facing <strong>Web Apps</strong></li>
                    <ul>
                        <li>Theres something that feels great about working on projects that you can show off to friends and family</li>
                    </ul>
                    <li>Mobile Development - <strong>React Native</strong></li>
                    <ul>
                        <li>Built operational prototype application for client</li>
                    </ul>
                    <li><strong>AWS</strong>... there's so many options</li>
                    <ul>
                        <li>Working through Udemy training - Associate Dev Cert 🏅</li>
                    </ul>
                </ul>
            </div>
        </section>
    </div>
)
import React from 'react';
import meNana from '../assets/images/me-nana.jpg'

export const About = ({ className = 'about' }) => (
    <div className={className}>
        <div className={`${className} hero`}>
            <section>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div>
                        <h1>About Me</h1>
                        <p>I am Carson Schwalm. Web Developer by day, husband and doggo dad by night. I work at DMI in Indianapolis as a Senior Software Engineer consulting for Eli Lilly.  I'm on new projects often, but love the process of solutioning with team members and writing Clean Code.</p>
                    </div>
                    <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                        <h2 style={{ color: '#536171' }}>This is my dog Nana 🍌</h2>
                    </div>
                </div>
                <img className="bordered-image" src={meNana} alt="Carson and Nana" />
            </section>
        </div>
        <h1 style={{ textAlign: 'center', width: '100%' }}>Quick Quirks</h1>
        <section style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            <div>
                <h3>Fit in</h3>
                <ul>
                    <li>Love my Mac 💻</li>
                    <li>Coffee Addict ☕️</li>
                    <li>the "Lord of the Rings" are my favorite movies 🌋</li>
                </ul>
            </div>
            <div>
                <h3>Break out</h3>
                <ul>
                    <li>Work out every day and enjoy hikes 💪</li>
                    <li>World Traveler 🌎</li>
                    <li>Love Cooking 🥘</li>
                </ul>
            </div>
        </section>
    </div>
)
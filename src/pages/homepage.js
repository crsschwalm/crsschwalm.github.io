import React from "react";
import StackSlide from '../components/stack-slide'
import resume from '../assets/Carson_Schwalm_Resume.pdf';
import thumb from '../assets/images/schwalm-thumb.jpg'
import notes from '../assets/images/note-taking.jpg'


export const Homepage = ({ className, id }) => (
    <div id={id}>
        <div className={`${className} hero`}>
            <section>
                <div style={{ flex: 1 }}>
                    <h1>Well hello there,<br />I'm Carson</h1>
                    <p>I can only imagine you've stumbled here to see some experience.<br />Lets get down to it then 😀</p>
                    <a className='link-button' href={resume} target="_blank">Download Resume</a>
                </div>
                <img className="bordered-image" src={thumb} alt="Carson Schwalm" />
            </section>
        </div>

        <h1 style={{ textAlign: 'center', width: '100%' }}>Full Stack Engineer</h1>

        <StackSlide />
        <section>
            <img style={{ maxWidth: '100%', width: '575px', borderRadius: '3rem 0' }} className="image" src={notes} alt="Note taking" />

            <div style={{ flex: 1, paddingLeft: '3rem' }}>
                <h2>What are you looking for?</h2>
                <p>There's so many web frameworks and tools.  I really like the tools I've used, but am even more intrigued by introducting more to that list!</p>
                <a className='link-button offset' href="mailto:crsschwalm@gmail.com?subject=I wanted to talk about a job opportunity">Email Me</a>
            </div>
        </section>
    </div>)
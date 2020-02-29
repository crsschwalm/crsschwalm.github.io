import React from 'react';
import resume from '../assets/Carson_Schwalm_Resume.pdf';


export const Connect = ({ className = 'connect' }) => (
    <div className={className}>
        <div className={`${className} hero`}>
            <section>
                <div className="shadow-box" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', padding: '2rem 0 1rem 0' }}>
                        <a className='link-button offset' href={resume} target="_blank">Resume</a>
                        <a className='link-button offset' href={'https://www.linkedin.com/in/carsonschwalm/'} target="_blank">LinkedIn</a>
                        <a className='link-button offset' href={'https://github.com/crsschwalm'} target="_blank">GitHub</a>
                        <a className='link-button offset' href="mailto:crsschwalm@gmail.com?subject=I noticed your portfolio Site">crsschwalm@gmail.com</a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0 2rem 0' }}>
                        <strong><a href="tel:317-438-0924">(317) 438-0924</a></strong>
                    </div>
                </div>
            </section>
        </div>
    </div>)
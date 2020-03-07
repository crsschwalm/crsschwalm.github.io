import React from 'react';

import resume from '../assets/Carson_Schwalm_Resume.pdf';
import linkedin from "../assets/images/sm_linkedin.png";
import email from "../assets/images/sm_email.png";
import github from "../assets/images/sm_github.png";
import resumeIcon from "../assets/images/sm_resume.png";
import phone from "../assets/images/sm_phone.png";

export const Connect = ({ className, id }) => (
    <div id={id}>
        <div className={`${className} hero`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h1>Reach Out 🤝</h1>
            <section style={{ width: '100%', margin: 0, padding: 0 }}>
                <div className="shadow-box" style={{
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', padding: '2rem 0 1rem 0' }}>
                        <a data-tip="Resume" alt="Resume" href={resume} target="_blank"><img data-tip="Resume" alt="Resume" src={resumeIcon} /></a>
                        <a data-tip="LinkedIn" alt="LinkedIn" href={'https://www.linkedin.com/in/carsonschwalm/'} target="_blank"><img src={linkedin} /></a>
                        <a data-tip="GitHub" alt="GitHub" href={'https://github.com/crsschwalm'} target="_blank"><img src={github} /></a>
                        <a data-tip="crsschwalm@gmail.com" alt="Email: crsschwalm@gmail.com" href="mailto:crsschwalm@gmail.com?subject=I noticed your portfolio Site"><img src={email} /></a>
                        <a data-tip="(317) 438-0924" alt="Phone: (317) 438-0924" href="tel:317-438-0924"><img src={phone} /></a>
                    </div>
                </div>
            </section>
        </div>
    </div>
)
import React from 'react'
import ReactTooltip from 'react-tooltip'

import github from '../assets/images/github.png';
import npm from '../assets/images/npm.png';
import node from '../assets/images/node.png';
import html5 from '../assets/images/html5.png';
import css3 from '../assets/images/css3.png';
import sass from '../assets/images/sass.png';
import heroku from '../assets/images/heroku.png';
import react from '../assets/images/react.png';
import vue from '../assets/images/vue.png';
import javascript from '../assets/images/javascript.png';
import typescript from '../assets/images/typescript.png';


export default () => (
    <section>
        <div className="shadow-box">
            <img data-tip="github" src={github} className="app-logo" alt="github" />
            <img data-tip="npm" src={npm} className="app-logo" alt="npm" />
            <img data-tip="node" src={node} className="app-logo" alt="node" />
            {/* <img data-tip="javascript" src={javascript} className="app-logo" alt="javascript" /> */}
            <img data-tip="typescript" src={typescript} className="app-logo" alt="typescript" />
            <img data-tip="react" src={react} className="app-logo" alt="react" />
            <img data-tip="vue" src={vue} className="app-logo" alt="vue" />
            {/* <img data-tip="html5" src={html5} className="app-logo" alt="html5" /> */}
            <img data-tip="sass" src={sass} className="app-logo" alt="sass" />
            {/* <img data-tip="css3" src={css3} className="app-logo" alt="css3" /> */}
            <img data-tip="heroku" src={heroku} className="app-logo" alt="heroku" />
        </div>
        <ReactTooltip />
    </section>
)
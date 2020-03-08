import React, { useEffect, useState } from 'react';
import moment from 'moment'
import { GitContributions } from '../components'
import ProjectTicker from '../components/project-ticker';
import { fetchContributions } from '../services';
import '../assets/scss/code.scss'

const now = () => moment().format()
const aYearAgo = () => moment().subtract(1, 'years').format()

export const Code = ({ className, id }) => {
    const [projectCount, setProjectCount] = useState(0)
    useEffect(() => {
        fetchContributions({ from: aYearAgo(), to: now() })
            .then(({ projectsCommittedTo }) => setProjectCount(projectsCommittedTo))
            .catch(console.warn)
    }, [])
    return (
        <div id={id}>
            <div className={`${className} hero`}>
                <span data-tip data-for='easterEgg' className="section-icon">👨‍💻</span>
                <h1>I Build Things</h1>

                <GitContributions />

                <h2>{projectCount} Projects in the last 12 months!</h2>
                <ProjectTicker />
                <section className="list-section">
                    <div>
                        <h4>This Site</h4>
                        <ul>
                            <li>React on Github Pages</li>
                            <li>Node on AWS Lambda</li>
                            <li>Github GraphQL API</li>
                            <li>Iterative releases (always a Work In Progress)</li>
                            <li><a href="https://github.com/crsschwalm/crsschwalm.github.io">Check out the source code</a></li>
                            <ul><li><a href="https://github.com/crsschwalm/portfolio-api">and the API</a></li></ul>
                            <li><a href="https://codepen.io/crsschwalm/pen/eYNGZra">Code Pen</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>What I want more of</h4>
                        <ul>
                            <li>AWS... there's so many options</li>
                            <ul>
                                <li>Working through Udemy training - Associate Dev Cert 🏅</li>
                            </ul>
                            <li>Mobile Development</li>
                            <ul>
                                <li>Some React Native experience (operational prototype app)</li>
                                <li>Would love to work on production apps 📱</li>
                            </ul>
                            <li>Public facing web apps</li>
                            <ul>
                                <li>Theres something that feels great about working on projects that you can show off to friends and family</li>
                            </ul>
                        </ul>
                    </div>
                </section>

            </div>
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import moment from 'moment'
import { GitContributions } from '../components'
import coffeeMac from '../assets/images/coffee-mac.jpg'
import ProjectTicker from '../components/project-ticker';
import { fetchContributions } from '../services';

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
                <h1 style={{ textAlign: 'center', width: '100%', padding: '2rem 0' }}>I Build Things 👨‍💻</h1>
                <section>
                    <GitContributions />
                </section>
                <h2 style={{ textAlign: 'center', width: '100%', padding: '2rem 0' }}>Contributed to {projectCount} projects this year</h2>
                <ProjectTicker />
                <section style={{ paddingTop: '2rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center', color: 'black' }}>
                    <div>
                        <h4 style={{ marginBottom: 0 }}>This Site</h4>
                        <ul style={{ marginTop: 0 }}>
                            <li>React on Github Pages</li>
                            <li>Node on AWS Lambda</li>
                            <li>Github GraphQL API</li>
                            <li>Iterative releases (always a Work In Progress)</li>
                        </ul>
                    </div>
                    <img style={{
                        borderRadius: '0 3rem',
                        padding: 0,
                        margin: 0
                    }} className="image" src={coffeeMac} alt="Coffee + Mac" />
                </section>

            </div>
        </div>
    )
}
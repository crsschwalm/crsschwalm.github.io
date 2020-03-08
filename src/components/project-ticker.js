import React, { useState, useEffect } from 'react';
import Ticker from 'react-ticker'
import { fetchProjects } from '../services/github-api';

const seperators = ["👨‍💻", "☕️", "💻", "🦔", "🚢", "🚀"]

const ProjectItem = ({ index, projectName }) => (
    <span key={index}>
        {projectName}
        <span role="img" style={{ padding: "0 1rem" }}>
            {seperators[index % seperators.length]}
        </span>
    </span>)

const GetProjectsFromAPI = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetchProjects()
            .then((projects) => {
                const projectNames = projects.map(({ name }) => name);
                setProjects(projectNames)
            })
            .catch(console.warn)
    }, [])


    return projects ? (
        <p style={{ whiteSpace: "nowrap" }}>🚀 {projects.map((p, i) => (<ProjectItem key={i} projectName={p} index={i} />))}</p>
    ) : (
            <p style={{ visibility: "hidden" }}>Fetching Project data</p>
        );
};

function ProjectTicker() {
    return (
        <Ticker offset="run-in" speed={5}>
            {() => <GetProjectsFromAPI />}
        </Ticker>
    );
}

export default ProjectTicker;
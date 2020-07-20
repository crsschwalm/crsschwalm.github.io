import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { GitContributions, Projects, ProjectTicker } from '../components';
import { fetchContributions } from '../services';
import '../assets/scss/code.scss';

const now = () => moment().format();
const aYearAgo = () => moment().subtract(1, 'years').format();

export const Code = ({ className, id }) => {
  const [projectCount, setProjectCount] = useState(0);
  useEffect(() => {
    fetchContributions({ from: aYearAgo(), to: now() })
      .then(({ projectsCommittedTo }) => setProjectCount(projectsCommittedTo))
      .catch(console.warn);
  }, []);
  return (
    <div id={id}>
      <div className="code-in-action">
        <h1>Projects out on the Web</h1>
        <Projects />
      </div>
      <div className={`${className} hero`}>
        <span
          aria-label="easter egg"
          data-tip
          data-for="easterEgg"
          role="img"
          className="section-icon"
        >
          👨‍💻
        </span>
        <h1>Quick Stats</h1>

        <GitContributions />

        <h2>
          I have worked on{' '}
          <span style={{ textDecoration: 'underline' }}>{projectCount}</span>{' '}
          projects in the last 12 months!
        </h2>
        <ProjectTicker />
      </div>
    </div>
  );
};

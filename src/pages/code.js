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
      <div className={`${className} hero`}>
        <span data-tip data-for="easterEgg" className="section-icon">
          👨‍💻
        </span>
        <h1>I Build Things</h1>

        <GitContributions />

        <h2>{projectCount} Projects in the last 12 months!</h2>
        <ProjectTicker />
        <section className="this-site">
          <div>
            <h4>This Site</h4>
            <ul>
              <li>
                <strong>React</strong> on <strong>Github Pages</strong>
              </li>
              <li>
                <strong>Node</strong> on <strong>AWS Lambda</strong>
              </li>
              <li>
                Github <strong>GraphQL API</strong>
              </li>
              <li>
                <strong>Iterative releases</strong>
              </li>
              <hr></hr>
              <li>
                <a href="https://github.com/crsschwalm/crsschwalm.github.io">
                  Check out the source code
                </a>
              </li>
              <li>
                <a href="https://github.com/crsschwalm/portfolio-api">
                  and the API
                </a>
              </li>
              <li>
                <a href="https://codepen.io/crsschwalm/pen/eYNGZra">
                  Code Pen Playground
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="code-in-action">
        <h1>Code In Action!</h1>
        <Projects />
      </div>
    </div>
  );
};

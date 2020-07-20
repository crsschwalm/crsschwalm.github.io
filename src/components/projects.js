import React from 'react';
import '../assets/scss/projects.scss';
import ltgImage from '../assets/images/projects/ltg.png';
import blogImage from '../assets/images/projects/blog.ltg.png';
import lillyImage from '../assets/images/projects/lilly.png';
import vinylTapImage from '../assets/images/projects/vinyl-tap.png';

export const Projects = () => {
  const projects = [
    {
      name: 'Lilly.com',
      description:
        'Face of one of the largest pharmaceutical companies in the world.',
      devFrontend: `Nuxt (SSR), VueJS`,
      devBackend: `Node, Contentful, Heroku`,
      link: 'https://lilly.com',
      niceLink: 'Lilly.com',
      imageUrl: lillyImage,
    },
    {
      name: 'Lilly Trial Guide',
      description: 'Helping patients get involved in the clinical trials.',
      devFrontend: `Next (SSR), React`,
      devBackend: `Node, TypeScript, Elastic Search, Heroku`,
      link: 'https://lillytrialguide.com',
      niceLink: 'LillyTrialGuide.com',
      imageUrl: ltgImage,
    },
    {
      name: 'Eli Lilly Blog',
      description:
        'A blog for sharing research, patient recognition, and company direction.',
      devFrontend: `Gatsby, React`,
      devBackend: `Contentful, GraphQL, Heroku`,
      link: 'https://blog.lillytrialguide.com',
      niceLink: 'Blog.LillyTrialGuide.com',
      imageUrl: blogImage,
    },
    {
      name: 'Vinyl Tap (for fun)',
      description:
        'A playful project of mine to learn more about AWS and the latest features of Redux in React',
      devFrontend: `React, Redux`,
      devBackend: `AWS: API Gateway, Lambda, DynamoDB, Amplify`,
      niceLink: 'Vinyl Tap',
      imageUrl: vinylTapImage,
      link: 'https://master.d7nd22pvtnx2g.amplifyapp.com/',
    },
  ];
  return (
    <ul className="cards">
      {projects.map((proj, i) => (
        <li className="cards__item" key={i}>
          <div className="card">
            <div
              className="card__image"
              style={{ backgroundImage: `url(${proj.imageUrl})` }}
            ></div>
            <div className="card__content">
              <div className="card__title">{proj.name}</div>
              <p className="card__text">{proj.description}</p>
              <code className="card__text">{proj.devFrontend}</code>
              <code className="card__text">{proj.devBackend}</code>
              <a
                className="link-button offset"
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {proj.niceLink}
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

import React from 'react';

import github from '../assets/images/github.png';
import npm from '../assets/images/npm.png';
import node from '../assets/images/node.png';
import sass from '../assets/images/sass.png';
import heroku from '../assets/images/heroku.png';
import react from '../assets/images/react.png';
import vue from '../assets/images/vue.png';
import typescript from '../assets/images/typescript.png';
import javascript from '../assets/images/javascript.png';
import html5 from '../assets/images/html5.png';
import css3 from '../assets/images/css3.png';
import redis from '../assets/images/redis.png';
import googleAnalytics from '../assets/images/google-analytics.png';
import postgres from '../assets/images/postgres.png';
import elastic from '../assets/images/elastic.png';
import graphql from '../assets/images/graphql.png';
import aws from '../assets/images/aws.png';
import slack from '../assets/images/slack.png';

export default () => (
  <section>
    <div className="shadow-box">
      <img
        data-type="info"
        data-effect="solid"
        data-tip="NodeJS - Server Side JavaScript Runtime"
        src={node}
        className="app-logo"
        alt="node"
      />

      <img
        data-type="info"
        data-effect="solid"
        data-tip="JavaScript - Functional Programming Language"
        src={javascript}
        className="app-logo"
        alt="javascript"
      />
      <img
        data-type="info"
        data-effect="solid"
        data-tip="TypeScript - Typed & Extended Javascript"
        src={typescript}
        className="app-logo"
        alt="typescript"
      />

      {/* <img data-type="info" data-effect="solid" data-tip="React & React Native - JS Front end" src={react} className="app-logo" alt="react" />
            <img data-type="info" data-effect="solid" data-tip="Vue - JS Front end" src={vue} className="app-logo" alt="vue" /> */}
      <img
        data-type="info"
        data-effect="solid"
        data-tip="HTML 5 - Modern Web Markup"
        src={html5}
        className="app-logo"
        alt="html5"
      />

      <img
        data-type="info"
        data-effect="solid"
        data-tip="CSS3 - Style Sheets"
        src={css3}
        className="app-logo"
        alt="css3"
      />
      <img
        data-type="info"
        data-effect="solid"
        data-tip="Sass - Extended CSS"
        src={sass}
        className="app-logo"
        alt="sass"
      />

      <img
        data-type="info"
        data-effect="solid"
        data-tip="Redis - Message queues/Cache"
        src={redis}
        className="app-logo"
        alt="Redis - message queues/Cache"
      />
      <img
        data-type="info"
        data-effect="solid"
        data-tip="ElasticSearch - Search Engines"
        src={elastic}
        className="app-logo"
        alt="elastic"
      />
      <img
        data-type="info"
        data-effect="solid"
        data-tip="Postgres - SQL Databases"
        src={postgres}
        className="app-logo"
        alt="Postgres"
      />
      <img
        data-type="info"
        data-effect="solid"
        data-tip="GraphQL - API for Querying Databases"
        src={graphql}
        className="app-logo"
        alt="GraphQL"
      />

      <img
        data-type="info"
        data-effect="solid"
        data-tip="NPM - Utilize and Create Open Source"
        src={npm}
        className="app-logo"
        alt="npm"
      />
      <img
        data-type="info"
        data-effect="solid"
        data-tip="GitHub - Source Code Repositories"
        src={github}
        className="app-logo"
        alt="github"
      />
      <img
        data-type="info"
        data-effect="solid"
        data-tip="Heroku - Hosting as a Service"
        src={heroku}
        className="app-logo"
        alt="heroku"
      />
      <img
        data-type="info"
        data-effect="solid"
        data-tip="AWS - Working towards Cert"
        src={aws}
        className="app-logo"
        alt="AWS"
      />

      <img
        data-type="info"
        data-effect="solid"
        data-tip="Slack - Team Collaboration"
        src={slack}
        className="app-logo"
        alt="Slack"
      />
      <img
        data-type="info"
        data-effect="solid"
        data-tip="Google Analytics - Understand User Flow & Reach Goals"
        src={googleAnalytics}
        className="app-logo"
        alt="Google Analytics"
      />
    </div>
  </section>
);

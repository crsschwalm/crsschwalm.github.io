import React from 'react';
import { useIsMobile } from '../services';
import { FullStackIcons, MyName } from '../components';

export const Intro = ({ className, id }) => {
  return (
    <div id={id}>
      <div className={`${className} hero ${useIsMobile ? 'mobile' : ''}`}>
        <section>
          <MyName />
        </section>
      </div>

      <FullStackIcons />
    </div>
  );
};

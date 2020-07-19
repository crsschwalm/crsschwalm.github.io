import React from 'react';
import { useIsMobile } from '../services';
import { MyName } from '../components/my-name';
import { FullStackIcons } from '../components/full-stack-icons';

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

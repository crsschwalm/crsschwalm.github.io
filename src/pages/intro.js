import React from 'react';
import { MyName } from '../components';
import { useIsMobile } from '../services';

export const Intro = ({ className, id }) => {
  return (
    <div id={id}>
      <div className={`${className} hero ${useIsMobile ? 'mobile' : ''}`}>
        <section>
          <MyName />
        </section>
      </div>
    </div>
  );
};

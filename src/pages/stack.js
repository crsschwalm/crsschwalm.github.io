import React from 'react';
import { FullStackIcons, StackSlide } from '../components';
import { useIsMobile } from '../services';

export const Stack = ({ className, id }) => {
  return (
    <div id={id} className={`${className} hero ${useIsMobile ? 'mobile' : ''}`}>
      <section>
        <FullStackIcons />
      </section>
      <section>
        <StackSlide />
      </section>
    </div>
  );
};

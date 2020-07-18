import React, { useState, useEffect } from 'react';
import { useScrollPosition } from '../services/use-scroll-position';
import OsxDock from './osx-dock';
import '../assets/scss/header.scss';

export const Header = ({ pages }) => {
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useEffect(() => {
    //tie up with intro animation
    setTimeout(() => setHideOnScroll(false), 4200);
  }, []);

  useScrollPosition(
    (props) => {
      const { prevPos, currPos } = props;
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
  );

  return (
    <div className="header">
      <OsxDock options={pages} className={hideOnScroll ? 'hide' : 'show'} />
    </div>
  );
};

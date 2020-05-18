import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useScrollPosition } from '../services/use-scroll-position';

import '../assets/scss/header.scss';

export const Header = ({ pages }) => {
  const [hideOnScroll, setHideOnScroll] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
  );

  const dynamicStyles = (hide) => ({
    visibility: hide ? 'hidden' : 'visible',
    transition: `all 200ms ${hide ? 'ease-out' : 'ease-in'}`,
    transform: hide ? 'translate(0, 100%)' : 'none',
  });

  return (
    <div className="header">
      <OsxDock options={pages} style={dynamicStyles(hideOnScroll)} />
    </div>
  );
};

const getOffset = (id) => {
  switch (id) {
    case 'about-id':
      return '-70';
    case 'code-id':
      return '-2';
    case 'connect-id':
    case 'home-id':
    default:
      return '0';
  }
};

const OsxDock = ({ options, style }) => {
  const [siblings, setSiblings] = useState([]);

  const handleHover = (index) => () => {
    switch (index) {
      case 0:
        return setSiblings([options[index + 1]]);
      case options.length - 1:
        return setSiblings([options[index - 1]]);
      default:
        return setSiblings([options[index + 1], options[index - 1]]);
    }
  };

  const isSibling = (id) => siblings.map(({ id }) => id).indexOf(id) !== -1;
  const siblingClass = (id) => (isSibling(id) ? 'icon active-sibling' : 'icon');
  const resetSiblings = () => setSiblings([]);

  return (
    <div className="dock-container" onMouseLeave={resetSiblings} style={style}>
      <div className="dock">
        <Scrollspy
          items={options.map(({ id }) => id)}
          currentClassName="active-icon"
          componentTag={'div'}
          className="icon-group"
        >
          {options.map(({ label, icon, id }, i) => (
            <div key={id} className="item" onMouseEnter={handleHover(i)}>
              <span>{label}</span>
              <AnchorLink offset={getOffset(id)} href={`#${id}`} title={label}>
                <div className={siblingClass(id)}>{icon}</div>
              </AnchorLink>
              <strong>&#183;</strong>
            </div>
          ))}
        </Scrollspy>
      </div>
    </div>
  );
};

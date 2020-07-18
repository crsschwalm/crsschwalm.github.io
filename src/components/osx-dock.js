import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const getOffset = (id) => {
  switch (id) {
    case 'about-id':
      return '-70';
    case 'code-id':
      return '-2';
    case 'connect-id':
    case 'home-id':
    case 'intro-id':
    default:
      return '0';
  }
};

const OsxDock = ({ options, className }) => {
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
    <div className={`dock-container ${className}`} onMouseLeave={resetSiblings}>
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

export default OsxDock;

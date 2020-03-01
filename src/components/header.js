import React from 'react';
import Scrollspy from 'react-scrollspy'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import '../assets/css/header.css'

const topOffset = 50;
export const Header = ({ pages }) => {
    return (
        <div className='header'>
            <Scrollspy offset={topOffset * -1} items={pages.map(({ id }) => id)} currentClassName="active">
                {
                    pages.map(({ id, label }, i) => (
                        <AnchorLink
                            offset={topOffset}
                            key={i}
                            href={`#${id}`}
                        >
                            {label}
                        </AnchorLink>
                    ))
                }
            </Scrollspy>
        </div>
    )
}
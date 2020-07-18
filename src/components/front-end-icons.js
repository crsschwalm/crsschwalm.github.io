import React, { useState } from 'react';
import '../assets/scss/front-end-icons.scss';
import StackSlide from './stack-slide';
import { useScrollPosition } from '../services/use-scroll-position';

export const AnimatedIcons = () => {
  const [show, setShow] = useState(false);

  useScrollPosition(
    (props) => {
      const { currPos } = props;
      if (currPos.y < -300 || show) setShow(true);
    },
    [show],
  );

  return (
    <article className="content services animated-icons">
      <h2>Full Stack</h2>
      <ul className="list-services">
        <li>
          <figure className={show ? 'show' : 'hide'}>
            <svg
              className="angular"
              width="256px"
              height="272px"
              viewBox="0 0 256 272"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  className="bg"
                  d="M0.0996108949,45.522179 L125.908171,0.697276265 L255.103502,44.7252918 L234.185214,211.175097 L125.908171,271.140856 L19.3245136,211.971984 L0.0996108949,45.522179 Z"
                  fill="#E23237"
                />
                <path
                  className="bg-2"
                  d="M255.103502,44.7252918 L125.908171,0.697276265 L125.908171,271.140856 L234.185214,211.274708 L255.103502,44.7252918 L255.103502,44.7252918 Z"
                  fill="#B52E31"
                />
                <path
                  className="a"
                  d="M126.107393,32.27393 L126.107393,32.27393 L47.7136187,206.692607 L76.9992218,206.194553 L92.7377432,166.848249 L126.207004,166.848249 L126.306615,166.848249 L163.063035,166.848249 L180.29572,206.692607 L208.286381,207.190661 L126.107393,32.27393 L126.107393,32.27393 Z M126.306615,88.155642 L152.803113,143.5393 L127.402335,143.5393 L126.107393,143.5393 L102.997665,143.5393 L126.306615,88.155642 L126.306615,88.155642 Z"
                  fill="#FFFFFF"
                />
              </g>
            </svg>
            <figcaption>Angular</figcaption>
          </figure>
        </li>
        <li>
          <figure className={show ? 'show' : 'hide'}>
            <svg
              className="react"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              height="200px"
              viewBox="0 0 841 595.3"
            >
              <g>
                <circle
                  id="circle"
                  className="st0 circle"
                  cx="420.9"
                  cy="296.5"
                  r="45.7"
                />
                <path
                  id="elipse"
                  className="st0 elipse"
                  d="M540.4,503.3c-24.6,14.2-60.1,4.6-99.9-27c-37.3-29.7-75-75.7-106.1-129.7
c-31.2-54-52.2-109.6-59.2-156.7c-7.5-50.3, 1.9-85.8, 26.5-100s60.1-4.6, 99.9, 27c37.3, 29.7, 75, 75.7, 106.1, 129.7s52.2, 109.6, 59.2, 156.7 C574.5, 453.5, 565, 489, 540.4, 503.3z M311.7, 107.2c-16.8, 9.7-22.9, 38.7-16.8, 79.7c6.7, 44.7, 26.8, 97.9, 56.8, 149.7s65.9, 95.9, 101.3, 124 c32.4, 25.8, 60.6, 35, 77.4, 25.3s22.9-38.7, 16.8-79.7c-6.7-44.7-26.9-97.9-56.8-149.7c-29.9-51.8-65.9-95.9-101.3-124 C356.7, 106.7, 328.5, 97.5, 311.7, 107.2z"
                />
                <path
                  id="elipse2"
                  className="st0 elipse2"
                  d="M659.7,296.6c0,28.4-26,54.4-73.3,73C542.1,387,483.4,396.6,421,396.6c-62.3,0-121-9.6-165.4-27.1
c-47.3-18.6-73.3-44.5-73.3-73s26-54.4, 73.3-73c44.3-17.5, 103.1-27.1, 165.4-27.1s121, 9.6, 165.4, 27.1 C633.7, 242.2, 659.7, 268.1, 659.7, 296.6z M202.4, 296.6c0, 19.4, 22.1, 39.2, 60.6, 54.4c42.1, 16.6, 98.2, 25.7, 158, 25.7s116-9.1, 158-25.7 c38.5-15.2, 60.6-35, 60.6-54.4s-22.1-39.2-60.6-54.4c-42.1-16.6-98.2-25.7-158-25.7s-116, 9.1-158, 25.7 C224.5, 257.4, 202.4, 277.2, 202.4, 296.6z"
                />
                <path
                  id="elipse3"
                  className="st0 elipse3"
                  d="M301.7,503.3c-24.6-14.2-34.1-49.7-26.5-100c7-47.1,28.1-102.8,59.2-156.7c31.2-54,68.8-100,106.1-129.7
c39.8-31.6, 75.2-41.2, 99.9-27s34.1, 49.7, 26.5, 100c-7, 47.1-28.1, 102.8-59.2, 156.7s-68.8, 100-106.1, 129.7 C361.8, 507.9, 326.3, 517.5, 301.7, 503.3z M530.4, 107.2c-16.8-9.7-45-0.5-77.4, 25.3c-35.4, 28.1-71.3, 72.2-101.3, 124 s-50.1, 105-56.8, 149.7c-6.1, 41, 0, 70, 16.8, 79.7s45, 0.5, 77.4-25.3c35.4-28.1, 71.3-72.2, 101.3-124c29.9-51.8, 50.1-105, 56.8-149.7 C553.3, 145.9, 547.2, 116.9, 530.4, 107.2z"
                />
              </g>
            </svg>
            <figcaption>React</figcaption>
          </figure>
        </li>
        <li>
          <figure className={show ? 'show' : 'hide'}>
            <svg
              width="256px"
              height="221px"
              viewBox="0 0 256 221"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  className="v-enter"
                  d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z"
                  fill="#41B883"
                ></path>
                <path
                  className="v-1"
                  d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z"
                  fill="#41B883"
                ></path>
                <path
                  className="v-2"
                  d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z"
                  fill="#35495E"
                ></path>
              </g>
            </svg>
            <figcaption>Vuejs</figcaption>
          </figure>
        </li>
      </ul>
      <StackSlide />
    </article>
  );
};

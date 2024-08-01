// app/components/NavBar.tsx
import React from 'react';
import { Exo_2 } from 'next/font/google';
import styles from './navBar.module.css'

/* istanbul ignore next */
const exo_2 = Exo_2({
  subsets: ['latin'],
  weight:'700',
});
const NavBar: React.FC = () => {
  return (
    <div>
      <div className="navbar bg-base-100" data-theme="synthwave">
        <div className="flex-1">
          <h1>
          <a className=" ${exo_2.className} btn btn-ghost text-xl" style={{ fontFamily: 'Exo 2', fontSize: '48px' }}>
            Aptix
          </a>
          </h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Services</a></li>
            <li><a>Resources</a></li>
            <li><a>About us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

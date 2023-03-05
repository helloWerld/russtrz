import React, { useState } from 'react';
import { HiX } from 'react-icons/hi';
import { BsGithub, BsLinkedin, BsDownload } from 'react-icons/bs';
import { GiHamburger } from 'react-icons/gi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'portfolio','skills', 'education', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <a href={`#${item}`}>{item}</a>
            </span>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <GiHamburger onClick={() => setToggle(true)} />
      </div>
        {toggle && (
          <motion.div
            whileInView={{ x: [200,0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className='app__navbar-sidebar'
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'portfolio', 'skills', 'education', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href="https://github.com/helloWerld" target="_blank" rel="noreferrer">
                  <BsGithub />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/russelltrzaska/" target="_blank" rel="noreferrer">
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a href="../assets/Russell_Trzaska_Web_developer.pdf" download>
                  <BsDownload />
                </a>
              </li>
            </ul>
          </motion.div>
        )}

    </nav>
  );
};

export default Navbar;
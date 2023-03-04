import React from 'react';
import { BsGithub, BsLinkedin, BsDownload } from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/helloWerld" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/russelltrzaska/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="../assets/Russell_Trzaska_Web_developer.pdf" download>
        <BsDownload />
      </a>
    </div>
  </div>
);

export default SocialMedia;
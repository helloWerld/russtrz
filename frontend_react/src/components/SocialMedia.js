import React from 'react';
import { BsGithub, BsLinkedin, BsDownload } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div  onClick={() => window.location.href='https://www.google.com'}>
      <BsGithub />
    </div>
    <div>
      <BsLinkedin />
    </div>
    <div>
      <BsDownload/>
    </div>
  </div>
);

export default SocialMedia;
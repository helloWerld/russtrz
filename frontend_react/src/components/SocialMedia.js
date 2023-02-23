import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { GrDocumentDownload } from 'react-icons/gr';

const SocialMedia = () => (
  <div className="app__social">
    <div  onClick={() => window.location.href='https://www.google.com'}>
      <BsGithub />
    </div>
    <div>
      <BsLinkedin />
    </div>
    <div>
      <GrDocumentDownload/>
    </div>
  </div>
);

export default SocialMedia;
import React, { useState, useEffect } from 'react';
import { BsGithub, BsLinkedin, BsDownload } from 'react-icons/bs';
import { client } from '../client';

const SocialMedia = () => {

  const [resume, setResume] = useState();

  useEffect(() => {
    const resumeQuery = '*[_type == "docs" && title == "Resume"]{ title, "resumeUrl": docFile.asset->url }';

    client.fetch(resumeQuery).then((data) => {
      setResume(data[0].resumeUrl);
    });
  }, []);

  return (
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
        <a href={`${resume}?dl=`} download>
          <BsDownload />
        </a>
      </div>
    </div>

  )
};

export default SocialMedia;
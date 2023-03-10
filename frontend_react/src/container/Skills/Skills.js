import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import Moment from 'react-moment';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {

  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const expQuery = '*[_type == "workExperience"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(expQuery).then((data) => {
      setExperience(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Expert <span>Skills</span> and <span>Experience</span></h2>
      <div className="app__skills-container">
        <motion.div
          className="app__skills-list"
        >
          {skills?.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={index}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>

          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience?.map((experience, index) => (
            <motion.div 
              className="app__skills-exp-item"
              key={index}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">
                  <Moment format="MMM YYYY">
                    {experience.startDate}
                  </Moment>
                  {" - "}
                  {experience.endDate ?
                    <Moment format="MMM YYYY">
                      {`to ${experience.endDate}`}
                    </Moment>
                  : "Present"}
                </p>
              </div>
              <motion.div className="app__skills-exp-works">
                  <div key={experience.jobTitle}>

                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work app__flex"
                      data-tooltip-id={experience.jobTitle}
                      data-tooltip-content={experience.resp} 
                    >
                      <h4 className="bold-text">{experience.jobTitle}</h4>
                      <p className="p-text">{experience.company}</p>
                    </motion.div>
                    <Tooltip
                      id={experience.jobTitle}
                      className="skills-tooltip"
                    />
                  </div>

              </motion.div>
            </motion.div>
            ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);
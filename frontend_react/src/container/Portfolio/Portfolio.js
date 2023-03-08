import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Portfolio.scss';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filterProject, setFilterProject] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "portfolio"]';

    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterProject(data);
    });
  }, []);

  const handleProjectFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterProject(projects);
      } else {
        setFilterProject(projects.filter((project) => project.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Awesome <span>Portfolio</span> Projects</h2>

      <div className="app__project-filter">
        {['All', 'Web App', 'Mobile App', 'Chrome Extension', 'HTML CSS JS', 'Python', 'React JS', 'Tailwind CSS', 'Sanity', 'MERN'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleProjectFilter(item)}
            className={`app__project-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__project-portfolio"
      >
          {filterProject.map((project, index) => (
            <div key={index}>
            <motion.div 
            className="app__project-item app__flex"
            
            whileHover={{ scale: [1, 1.01] }}
            transition={{ duration: 0.1, ease: 'easeIn' }}
            >
              <div className="app__project-img app__flex">
                <img src={urlFor(project.imgUrl)} alt={project.name} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.2, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__project-hover app__flex"
                >
                  <a href={project.projectLink} target="_blank" rel="noreferrer">

                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.1 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.1 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__project-content app__flex">
                <h4 className="bold-text">{project.title}</h4>
                <p
                  className="p-text"
                  style={{
                    marginTop: 2,
                    color: 'lightgray',
                    textShadow: '0 0 20px black',
                    textAlign: 'center'
                  }}
                >
                  {project.description}
                </p>

                <div className="app__project-tag app__flex">
                  <p className="p-text">{project?.tags[0]}</p>
                </div>
              </div>
              </motion.div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Portfolio, 'app__portfolio'),
  'portfolio',
  'app__primarybg'
);
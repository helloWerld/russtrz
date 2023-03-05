
import React, { useState, useEffect } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { FaUniversity, FaChalkboardTeacher } from 'react-icons/fa';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { motion } from 'framer-motion';

import Moment from 'react-moment';
import { urlFor, client } from '../../client';
import { images } from '../../constants';

import './Education.scss';

const Education = () => {
  const [filterEducation, setFilterEducation] = useState([]);
  const [activeFilter, setActiveFilter] = useState('');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const educationsQuery = '*[_type == "education"]';

    client.fetch(educationsQuery).then((data) => {
      setEducations(data);
      setFilterEducation(data);
    });
  }, []);

  const handleEducationFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      setFilterEducation(educations.filter((education) => education.programType.includes(item)));
    }, 500);

  };

  const handleSchoolFilter = (school) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      setFilterEducation(educations.filter((education) => education.programType.includes(activeFilter) && education.school.includes(school)));
    }, 500);

  };

  return (
    <>
      <div>
        <h2 className='head-text'>I'm Extensively <span>Educated.</span></h2>
        <div className='app__education-program head-text'>
          <div onClick={() => handleEducationFilter('University')}>
            <FaUniversity className={(activeFilter === 'University') ? 'active-filter' : ''} />
            <p>University</p>
          </div>
          <div onClick={() => handleEducationFilter('Bootcamp')}>
            <FaChalkboardTeacher className={(activeFilter === 'Bootcamp') ? 'active-filter' : ''} />
            <p>Bootcamp</p>
          </div>
          <div onClick={() => handleEducationFilter('Online Course')}>
            <HiOutlineDesktopComputer className={(activeFilter === 'Online Course') ? 'active-filter' : ''} />
            <p>Online Course</p>
          </div>
        </div>
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__education-container'
      >
          {filterEducation.map((education, index) => (
            <div className='app__education-item' key={index}  onClick={() => handleSchoolFilter(education.school)}>
                <div className='app__education-years'>
                  {education.startDate ?
                    <>
                      <Moment format="MMM YYYY">
                        {education.startDate}
                      </Moment>
                      <p> to </p>
                    </>
                    : <p>Issued</p>}
                    {education.endDate ?
                      <Moment format="MMM YYYY">
                        {education.endDate}
                      </Moment>
                      : "Present"}
                </div>  
                <div className='app__education-school'>
                  <img src={urlFor(education.schoolImg)} alt={education.school} />
                  <div className="app__education-block">
                    <h3>{education.degree && `${education.degree}: `} {education.course}</h3>
                    <p>{education.school}</p>
                    <div className="app__education-course-langs">
                      {education?.languages?.map((language, index) => (
                          images[language.toLowerCase()] &&
                          <div className='app__education-img' key={index}>
                            <img src={images[language.toLowerCase()]} alt={language} />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
            </div>
          ))}
      </motion.div>

    </>
  );
}

export default AppWrap(
    MotionWrap(Education, 'app__education'),
    'education',
    'app__primarybg'
);
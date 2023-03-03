import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';

import { AppWrap,MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {

  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0)

  const handleClick = (index) => {
    setIndex(index);
  }

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(testimonialsQuery).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const test = testimonials[index];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex"> 
            <img src={urlFor(test.imgurl)} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className='p-text'>{test.feedback}</p>
              <div>
                <h4 className="bold-text grad-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">

            <div className='app__flex' onClick={() => handleClick(index === 0 ? testimonials.length - 1 : index - 1)}>
              <HiChevronLeft />
            </div>

            <div className='app__flex' onClick={() => handleClick(index === testimonials.length - 1 ? 0 : index + 1)}>
              <HiChevronRight/>
            </div>

          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
          whileInView={{ opacity: [0,1] }}
          transition={{ duration: 0.5, type: "tween" }}
          key={brand.name}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name}/>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__whitebg'
);
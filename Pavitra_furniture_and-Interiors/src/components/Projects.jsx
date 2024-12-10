import React from 'react';
import img163 from "../assets/image 163.png";
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    viewport={{once: true, amount: .4}}
    className='mt-28 flex justify-center px-6 md:px-12 lg:px-20'>
      <div className='w-full md:w-4/5 lg:w-full h-fit '>
        <h1 className='text-center font-sans font-bold text-bg-primary text-[36px] sm:text-[32px] lg:text-[48px] mb-10'>
          Our Projects
        </h1>
        <div className='mt-0 lg:mt-20'>
          <motion.img
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:2}}
          viewport={{once: true, amount: .4}}
            src={img163}
            alt="Project Image"
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex justify-center mt-10 lg:mt-16'>
          <button className='text-[18px] sm:text-[20px] lg:text-[24px] text-bg-primary border-bg-primary border px-12 lg:px-20 py-3 lg:py-6 font-sans font-bold '>
            View More
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;

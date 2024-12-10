import React from 'react';
import instagram from "../assets/instagram 2.png";
import facebook from "../assets/facebook-app-symbol 2.png";
import linkedin from "../assets/linkedin 1.png"
import twitter from "../assets/twitter 2 (1).png"
import circle from "../assets/Ellipse 649.png"
import { easeIn, easeInOut, easeOut, motion } from 'framer-motion';

const Subscribe = () => {
  return (
    <div className="flex flex-wrap justify-between items-center px-6 md:px-20 py-10 border-b border-customGray">
      {/* Left Section */}
      <motion.div 
      initial={{opacity:0, x:-50}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:1, ease:easeOut}}
      viewport={{once:true, amount:.3}}
      className="w-full md:w-1/2 mb-6 md:mb-0">
        <h1 className="font-sans text-[16px] lg:text-[24px] text-sub-color text-center md:text-left">
          Subscribe to our newsletter
        </h1>
        <form className="space-y-4 mt-6 flex flex-col items-center md:items-start">
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Email Id"
              className="border border-gray-300 py-8 px-3 pr-32 w-full md:w-[600px] border-sub-border font-montserrat rounded-[9px] focus:outline-none"
            />
            <button
              type="button"
              className="absolute top-1/2 lg:right-16 right-3 transform -translate-y-1/2 bg-bg-primary text-text-primary text-[16px] md:text-[20px] font-semibold px-10 py-4 rounded-[5px]"
            >
              Subscribe
            </button>
          </div>
        </form>
      </motion.div>

      {/* Right Section */}
      <motion.div
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1, ease:easeOut}}
      viewport={{once:true, amount:.3}}
      
      className="w-full md:w-1/2 flex justify-center md:justify-end items-center gap-4 mt-6 md:mt-0 lg:gap-10 lg:mt-10">
        {/* Social Media Icons */}
        <a href="">

        <motion.div
        whileHover={{scale:1.3}}
        transition={{duration:.5, ease:easeInOut}}
        className='relative w-12 lg:w-16 h-12 lg:h-16'>
            <img src={circle} alt="" />
            <img className='absolute w-6 h-6 lg:w-8 lg:h-8 inset-0 m-auto' src={facebook} alt="" />
        </motion.div>
        </a>
        <a href="">

        <motion.div 
        whileHover={{scale:1.3}}
        transition={{duration:.5, ease:easeInOut}}
        className='relative w-12 lg:w-16 h-12 lg:h-16'>
            <img src={circle} alt="" />
            <img className='absolute w-6 h-6 lg:w-8 lg:h-8 inset-0 m-auto' src={instagram} alt="" />
        </motion.div>
        </a>
        <a href="">

        <motion.div
        whileHover={{scale:1.3}}
        transition={{duration:.5, ease:easeInOut}}
         className='relative w-12 lg:w-16 h-12 lg:h-16'>
            <img src={circle} alt="" />
            <img className='absolute w-6 h-6 inset-0 m-auto' src={linkedin} alt="" />
        </motion.div>
        </a>
        <a href="">

        <motion.div
        whileHover={{scale:1.3}}
        transition={{duration:.5, ease:easeInOut}}
        className='relative w-12 lg:w-16 h-12 lg:h-16'>
            <img src={circle} alt="" />
            <img className='absolute w-6 h-6 lg:w-8 lg:h-8 inset-0 m-auto' src={twitter} alt="" />
        </motion.div>
        </a>
      </motion.div>
    </div>
  );
};

export default Subscribe;



import React from "react";
import expbg from "../assets/Rectangle 23107.png";
import exp from "../assets/image 160.png";
import { motion } from "framer-motion";

const Expertise = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 font-sans mt-0 lg:mt-20">
      {/* Text Section */}
      <motion.div
      initial={{ opacity: 0, x: -50 }} // Start invisible and slightly below
      whileInView={{ opacity: 1, x: 0 }} // Fade in and move to original position
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the paragraph is in view
      className="px-6 sm:px-10 lg:px-20 py-6 lg:py-10">
        <h1 className="text-center lg:text-left font-bold text-bg-primary text-[32px]  lg:text-[48px] mb-6">
          Our Expertise
        </h1> <br />
        <div className="ml-9">
          <ul className="list-disc">
            <li className="text-[16px] sm:text-[22px] lg:text-[22px] font-sans font-bold text-sub-color">
              Custom Furniture Design
            </li>
            <p className="font-sans font-normal text-sub-color mt-2 text-[12px] sm:text-base lg:text-[14px]">
              Tailored to your preferences, our CNC-crafted furniture ensures
              every piece is a reflection of your unique style.
            </p>
            {/*  */}
            <li className="text-[16px] sm:text-[22px] lg:text-[22px] font-sans font-bold text-sub-color mt-4">
              Interior Styling and Design
            </li>
            <p className="font-sans font-normal text-sub-color mt-2 text-[12px] sm:text-base lg:text-[14px]">
              We provide complete interior styling that complements your space,
              blending aesthetics and functionality.
            </p>
            {/*  */}
            <li className="text-[16px] sm:text-[22px] lg:text-[22px] font-sans font-bold text-sub-color mt-4">
              Wood Carving and Craftsmanship
            </li>
            <p className="font-sans font-normal text-sub-color mt-2 text-[12px] sm:text-base lg:text-[14px]">
              Our craftsmen excel at intricate wood carving, offering highly
              detailed and personalized pieces.
            </p>
            {/*  */}
            <li className="text-[16px] sm:text-[22px] lg:text-[22px] font-sans font-bold text-sub-color mt-4">
              CNC Precision Work
            </li>
            <p className="font-sans font-normal text-sub-color mt-2 text-[12px] sm:text-base lg:text-[14px]">
              We use state-of-the-art CNC machinery to create precise, flexible,
              and custom designs.
            </p>
          </ul>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} // Start with reduced opacity and size
      whileInView={{ opacity: 1, scale: 1 }} // Fade in and scale up to normal size
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the image is in view
      whileHover={{scale:1.1, ease: "easeOut"}}
      className="relative  mr-20 "
      >
        <img src={expbg} className=" object-cover ml-10 lg:ml-0" alt="First Image" />

        <img
          src={exp}
          className="absolute top-8 left-8  ml-10 lg:ml-0 "
          alt="Second Image"
        />
      </motion.div>
    </div>
  );
};

export default Expertise;

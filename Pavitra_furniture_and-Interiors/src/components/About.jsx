import React from "react";
import img162 from "../assets/image 162.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full mt-0 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 font-sans">
      {/* Image Section */}
      <div className="flex justify-center items-center order-2 lg:order-1">
        <motion.img
          className="w-[450px]"
          src={img162}
          alt="About us"
          initial={{ opacity: 0, scale: 0.8 }} // Start with reduced opacity and size
          whileInView={{ opacity: 1, scale: 1 }} // Fade in and scale up to normal size
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the image is in view
        />
      </div>

      {/* Text Section */}
      <motion.div
      initial={{ opacity: 0, x: 50 }} // Start invisible and slightly below
      whileInView={{ opacity: 1, x: 0 }} // Fade in and move to original position
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the paragraph is in view
       className="px-6 sm:px-10 lg:px-20 py-4 lg:py-10 order-1 lg:order-2 text-left">
        <motion.h1 
        initial={{ opacity: 0, x: 50 }} // Start invisible and slightly below
        whileInView={{ opacity: 1, x: 0 }} // Fade in and move to original position
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the paragraph is in view
        className="text-center lg:text-left font-bold text-bg-primary text-[36px] lg:text-[48px] font-sans mb-6">
          About Us
        </motion.h1>{" "}
        
        <motion.p
      className="text-justify text-[12px] lg:text-[16px] font-sans"
      initial={{ opacity: 0, x: 50 }} // Start invisible and slightly below
      whileInView={{ opacity: 1, x: 0 }} // Fade in and move to original position
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the paragraph is in view
    >
      Pavitra furnitures and interiors has been a trusted name in wood carving
      since 2000. We started our journey with traditional hand-carving
      techniques in Bangalore and have grown over the years by adopting modern
      technology. <br /> <br />
      Today, we use CNC (Computer Numerical Control) machines to create
      detailed and flexible designs. This technology has helped us provide
      better precision and efficiency while still keeping the quality of our
      work at its best. <br /> <br />
      We take both bulk and individual orders for a wide variety of wooden
      products. Whether it's doors, window frames, decorative panels, wooden
      screens, bookstands, beds, or other furniture, we've got you covered. You
      can easily send us an inquiry for any product you're interested in, and
      we'll get back to you right away to ensure you receive a well-crafted
      product that meets your expectations.
    </motion.p>
        <div className="flex justify-center lg:justify-start mt-6">
          <motion.button
          initial={{ opacity: 0, x: 50 }} // Start invisible and slightly below
          whileInView={{ opacity: 1, x: 0 }} // Fade in and move to original position
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
          viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the paragraph is in view
           className="text-bg-primary border border-bg-primary font-bold font-sans  transition-colors  py-3 px-12 lg:px-20 lg:py-6">
            Enquire Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

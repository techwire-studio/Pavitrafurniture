import React from "react";
import img162 from "../assets/image 162.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  // Animation variants to reduce initial layout shift
  const fadeInVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8
      }
    }
  };

  return (
    <div className="w-full mt-10 md:mt-10 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-0 font-sans overflow-hidden px-0 lg:px-20">
      {/* Image Section */}
      <motion.div 
        className="flex justify-center items-center order-2 lg:order-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.img
          variants={imageVariants}
          className="w-full max-w-[450px] object-contain"
          src={img162}
          alt="About us"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-4 sm:px-10 lg:px-20 py-4 lg:py-10 order-1 lg:order-2 text-left"
      >
        <motion.h1
          variants={fadeInVariants}
          className="text-center lg:text-left font-bold text-bg-primary text-3xl lg:text-[48px] font-sans mb-4"
        >
          About Us
        </motion.h1>

        <motion.p
          variants={fadeInVariants}
          className="text-justify text-sm lg:text-base font-sans mb-6 mt-8"
        >
          Pavitra furnitures and interiors has been a trusted name in wood carving since 2000. We started our journey with traditional hand-carving techniques in Bangalore and have grown over the years by adopting modern technology. <br /> <br />
          
          Today, we use CNC (Computer Numerical Control) machines to create detailed and flexible designs. This technology has helped us provide better precision and efficiency while still keeping the quality of our work at its best. <br /> <br />
          
          We take both bulk and individual orders for a wide variety of wooden products. Whether it's doors, window frames, decorative panels, wooden screens, bookstands, beds, or other furniture, we've got you covered. You can easily send us an inquiry for any product you're interested in, and we'll get back to you right away to ensure you receive a well-crafted product that meets your expectations.
        </motion.p>

        <motion.div
          variants={fadeInVariants}
          className="flex justify-center lg:justify-start"
        >
          <Link 
            to="/about-page" 
            className="inline-block text-bg-primary border border-bg-primary font-bold font-sans transition-colors py-2 px-8 lg:px-20 lg:py-4 text-sm lg:text-base"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
import React from "react";
import choose1 from "../assets/handcraft 1.png";
import choose2 from "../assets/management 1.png";
import choose3 from "../assets/planet-earth 1.png";
import choose4 from "../assets/solutions 1.png";
import { motion } from "framer-motion";

const WhyChooseUs2 = () => {
  return (
    <div className="w-full h-fit mt-10 md:mt-20 lg:mt-20">
      <motion.h1
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      viewport={{once:true, amount:.3}}
       className="lg:text-left font-bold text-bg-primary text-[32px] lg:text-[48px] mb-6 flex justify-center items-center">
        Why Choose Us
      </motion.h1>
      <motion.div 
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1}}
      viewport={{once:true, amount:.3}}
      className="w-full h-fit flex-row lg:flex mt-10 lg:mt-20">
        <div className="w-full lg:w-1/4 bg-bg-choose py-14 px-10 flex flex-col justify-center items-center">
          <img className="w-12" src={choose1} alt="" />
          <p className="mt-6 text-bg-primary font-bold">
            Precision Craftsmanship
          </p>
          <p className="mt-2 text-sub-color text-center">
            Our advanced CNC machines ensure every cut and detail is executed
            with unmatched accuracy, delivering designs that are both flawless
            and visually stunning.
          </p>
        </div>
        <div className="w-full lg:w-1/4 bg-text-primary py-14 px-10 flex flex-col justify-center items-center">
          <img className="w-12" src={choose2} alt="" />
          <p className="mt-6 text-bg-primary font-bold">Experienced Team</p>
          <p className="mt-2 text-sub-color text-center">
            Our team of skilled designers and craftsmen brings years of
            expertise and a deep passion for creating furniture that exceeds
            expectations.
          </p>
        </div>
        <div className="w-full lg:w-1/4 bg-bg-choose py-14 px-10  flex flex-col justify-center items-center">
          <img className="w-12" src={choose3} alt="" />
          <p className="mt-6 text-bg-primary font-bold">Sustainability Focus</p>
          <p className="mt-2 text-sub-color text-center">
            We prioritize eco-friendly practices, using sustainable materials
            and reducing waste to create beautiful furniture while caring for
            the environment.
          </p>
        </div>
        <div className="w-full lg:w-1/4 bg-text-primary py-14 px-10  flex flex-col justify-center items-center">
          <img className="w-12" src={choose4} alt="" />
          <p className="mt-6 text-bg-primary font-bold">Custom Solutions</p>
          <p className="mt-2 text-sub-color text-center">
            We create furniture that is tailored to your specific needs,
            reflecting your style and fitting perfectly into your space, no
            matter the size or complexity.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs2;

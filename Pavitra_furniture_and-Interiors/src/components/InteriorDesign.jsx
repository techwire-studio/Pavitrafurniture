import React from "react";
import intbg from "../assets/int-bg.png";
import int from "../assets/int.webp";
import { motion } from "framer-motion";
import intgroup from "../assets/inte group.png"

const InteriorDesign = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 font-sans mt-10 md:mt-16 px-4 md:px-10 lg:px-20">
      {/* Image Section */}
      <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.5 }}
  className="relative justify-center items-center flex md:ml-0 order-last md:order-first mt-0 md:mt-0 lg:mt-20 gap-20 ml-0 md:pl-0 lg:ml-0"
>
  {/* <img
    src={intbg}
    className="object-cover w-[250px] md:w-[500px] lg:w-[600px]"
    alt="First Image"
  />
  <img
    src={int}
    className="absolute bottom-4 md:bottom-6 -left-2 md:left-4 lg:-left-8 lg:bottom-8 w-[250px] md:w-[500px] lg:w-[600px]"
    alt="Second Image"
  /> */}
  <img className="w-full lg:w-[600px] md:w-[500px]" src={intgroup} alt="" />
</motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-4 md:px-6 py-4 md:py-8 mt-0 "
      >
        <div>
          <p className="font-sans font-bold mb-6 text-[22px] md:text-[24px] text-sub-color mt-0 lg:mt-20">
            Interior Designs
          </p>
          <ul>
            <li className="text-[12px] md:text-[14px] lg:text-[14px] font-sans font-bold text-sub-color">
              Personalized Living Spaces
              <p className="font-sans font-normal text-sub-color mt-2 md:text-[14px]">
                Whether it's a modern apartment or a classic villa, we design interiors that reflect your personality and enhance your lifestyle.
              </p>
            </li>
            <li className="text-[12px] md:text-[14px] lg:text-[14px] font-sans font-bold text-sub-color mt-4">
              Smart and Functional Layouts
              <p className="font-sans font-normal text-sub-color mt-2 md:text-[14px]">
                We optimize your space with intelligent layouts, ensuring every corner is as practical as it is beautiful.
              </p>
            </li>
            <li className="text-[12px] md:text-[14px] lg:text-[14px]  font-sans font-bold text-sub-color mt-4">
              Aesthetic Excellence
              <p className="font-sans font-normal text-sub-color mt-2 md:text-[14px]">
                From elegant lighting to chic furniture, we curate every element to create harmonious and visually appealing designs.
              </p>
            </li>
            <li className="text-[12px] md:text-[14px] lg:text-[14px] font-sans font-bold text-sub-color mt-4">
              Sustainable Design Practices
              <p className="font-sans font-normal text-sub-color mt-2 md:text-[14px]">
                Incorporating eco-friendly materials and innovative techniques, we deliver interiors that are not just beautiful but also responsible.
              </p>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default InteriorDesign;
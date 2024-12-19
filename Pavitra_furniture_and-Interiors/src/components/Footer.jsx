import React from "react";
import line from "../assets/Line 118.png";
import phone from "../assets/phone-call 1.png";
import mail from "../assets/mail 1.png";
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.5 }}
      className="  border-b border-t border-customGray pt-10  lg:pt-20"
    >
      {/* --------------------DIV 1-------------------- */}
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:w-2/5 px-6 md:px-10 lg:px-16 mb-10 lg:mb-0">
          <div className="flex space-x-2">
            <img src={line} alt="" />
            <p className="font-sans text-[16px] lg:text-[22px] font-medium">
              {" "}
              Pavitra Furnitures and Interiors
            </p>
          </div>
          <div className="mt-4">
            <p className="font-sans text-foot1 pr-0 lg:pr-36 text-[14px] lg:text-[16px]">
              Pavitra Furnitures and Interiors has been making quality furniture
              and interiors since 2000. For over 20 years, we’ve focused on
              creating durable, stylish, and comfortable designs that fit your
              needs. We take pride in delivering work that makes your space look
              and feel just right.
            </p>
          </div>
        </div>

        {/* --------------------DIV 2-------------------- */}
        <div className="w-full lg:w-2/5 px-6 md:px-10 lg:px-0 pr-0 lg:pr-36 mb-10 lg:mb-0">
          <div className="flex space-x-2">
            <img src={line} alt="" />
            <p className="text-[16px] lg:text-[22px] font-sans font-medium">
              Address
            </p>
          </div>
          <div className="mt-4">
            <p className="font-sans font-light text-foot2 text-[14px] lg:text-[16px]">
              60/1, SHOP NO 4, SRIRAMPURA CROSS, OPP, CANARA BANK ATM, JNC,
              JAKKUR POST, YELAHANKA, BANGALORE 560064
            </p>
          </div>
          <div className="mt-4">
            <div className="flex space-x-4">
              <img src={line} alt="" />
              <p className="text-[16px] lg:text-[22px] font-medium">
                {" "}
                Contact Us
              </p>
            </div>
            <div className="flex space-x-2 mt-4">
              <img className="" src={phone} alt="" />
              <p className="text-foot2 font-light font-sans text-[12px] lg:text-[16px]">
                {" "}
                +91 99009 94700
              </p>
            </div>
            <div className="flex space-x-2 mt-4 ml-7">
              {/* <img className="" src={phone} alt="" /> */}
              <p className="text-foot2 font-light font-sans text-[12px] lg:text-[16px]">
                {" "}
                +91 87222 22125
              </p>
            </div>
            <div className="flex space-x-2 mt-4">
              <img src={mail} alt="" />
              <p className="text-foot2 font-sans font-light text-[12px] lg:text-[16px]">
                pavitrafurnitureandinteriors5@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* -------------------------DIV 3---------------------------- */}
        <div className="w-full lg:w-1/5 flex  justify-center lg:justify-end lg:mr-10">
          <button className="bg-dw-bg text-text-primary h-[80px] w-[280px] font-medium font-montserrat mb-6 lg:mb-0">
            Download Brochure
          </button>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end md:justify-end items-center py-5 mr-0 md:mr-10 lg:mr-20  h-full">
        <a className="text-[12px] md:text-[12px] lg:text-[16px] text-center font-montserrat font-thin text-foot3" href="https://techwire.studio/" target="_blank" 
  rel="noopener noreferrer">
        Designed by TechWire Studio
        </a>
      </div>
      {/* <TechWire/> */}
    </motion.div>
  );
}

export default Footer;

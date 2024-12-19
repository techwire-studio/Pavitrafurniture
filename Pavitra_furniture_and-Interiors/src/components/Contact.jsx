import React from "react";
import { easeInOut, motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-full font-sans h-fit bg-bg-contact grid lg:grid-cols-2 mt-20 grid-cols-1 overflow-hidden">
      {/* Left Section */}
      <motion.div 
        initial={{opacity:0, x:-50}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1, ease:easeInOut}}
        viewport={{once:true, amount:.3}}
        className="flex justify-center lg:justify-start lg:ml-20 lg:mt-8 items-center lg:items-start"
      >
        <h1 className="text-[32px] mt-4 sm:text-[48px] lg:text-[48px] font-bold text-bg-primary">
          Contact Us
        </h1>
      </motion.div>
      
      {/* Right Section (Form) */}
      <motion.div
        initial={{opacity:0, x:50}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1, ease:easeInOut}}
        viewport={{once:true, amount:.3}}
        className="p-6 sm:px-10 lg:px-20 "
      >
        <form className="space-y-4 font-montserrat sm:text-[24px] mt-10 placeholder:text-form-color ml-0 lg:ml-28">
          {/* Input Fields (First Name and Last Name) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="py-2 px-3 w-full font-montserrat text-form-color placeholder:text-[16px] lg:placeholder:text-[20px] placeholder:font-montserrat placeholder:font-light"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="py-2 px-3 w-full font-montserrat placeholder:text-[16px] lg:placeholder:text-[20px] placeholder:font-montserrat placeholder:font-light"
            />
          </div>
          
          {/* Email Address */}
          <input
            type="email"
            placeholder="Email Address"
            className="py-2 px-3 w-full text-[28px] font-montserrat placeholder:text-[16px] lg:placeholder:text-[20px] placeholder:font-montserrat placeholder:font-light"
          />
          
          {/* Phone Number */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="py-2 px-3 w-full text-[28px] font-montserrat placeholder:text-[16px] lg:placeholder:text-[20px] placeholder:font-montserrat placeholder:font-light"
          />
          
          {/* Description */}
          <textarea
            placeholder="Description (optional)"
            className="py-2 px-3 w-full text-[28px] font-montserrat placeholder:text-[16px] lg:placeholder:text-[20px] placeholder:font-montserrat placeholder:font-light h-[200px] resize-none"
          ></textarea>
          
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-bg-primary font-semibold font-montserrat text-text-primary py-6 px-16 text-sm mb-4"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
import { useState, useEffect } from "react";
import clock from "../assets/time 1.png";
import instagram from "../assets/instagram 1.png";
import facebook from "../assets/facebook-app-symbol 1.png";
import twitter from "../assets/twitter 1.png";
import pintrest from "../assets/pinterest 1.png";
import logo from "../assets/Pavitra 2 (Transparent Background).webp";
import building from "../assets/building 2.png";
import phone from "../assets/telephone 1.png";
import email from "../assets/email 2.png";

import { easeInOut, motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import { NavLink } from "react-router-dom";
import line from "../assets/Line 118.png";
import phone2 from "../assets/phone-call 1.png";
import mail from "../assets/mail 1.png";
import QuoteModal from "../components/QuoteModal";
import { Link } from "react-router-dom";


const ContactPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className="font-sans">
      {/* Top Section */}
      <div className="hidden lg:w-full py-2 bg-bg-primary lg:grid grid-cols-1 lg:grid-cols-2 place-items-center gap-2">
        <div className="w-auto lg:w-1/2 flex items-center justify-center gap-2 text-center text-text-primary z-50">
          <img src={clock} alt="Clock" />
          <p className="font-medium text-text-primary">
            Mon-Sun : 9:00AM - 7:00PM
          </p>
        </div>
        <div className="flex justify-center lg:justify-start gap-6 w-4 z-50">
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={twitter} alt="Twitter" />
          <img src={pintrest} alt="Pinterest" />
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex w-full items-center h-fit py-0 pb-0 lg:py-6 flex-col lg:flex-row">
        {/* Logo */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start items-center ml-0 lg:ml-6 mb-0 lg:mb-0 py-12 lg:py-0 h-12">
        <Link to="/"> <img className="w-48" src={logo} alt="Logo" /></Link> 
        </div>

        {/* Address, Phone, Email */}
        <div className="hidden lg:flex flex-col items-start  pl-0 lg:pl-4 justify-start lg:justify-end lg:items-end mr-16 lg:flex-row gap-4 lg:gap-8 w-full text-[10px]">
          <div className="flex gap-2 items-center">
            <div className="border border-bg-primary p-2">
              <img className="w-6" src={building} alt="Building" />
            </div>
            <div>
              <p className="font-semibold">60/1, SHOP NO 4</p>
              <p className="font-light">YELAHANKA - 560064</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="border border-bg-primary p-2">
              <img className="w-6" src={phone} alt="Phone" />
            </div>
            <div>
              <p className="font-semibold">Have Any Questions?</p>
              <p className="font-light">+91 99009 94700</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="border border-bg-primary p-2">
              <img className="w-6" src={email} alt="Email" />
            </div>
            <div>
              <p className="font-semibold">Send Your Mail</p>
              <p className="font-light">
                pavitrafurnitureandinteriors5@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="w-full mt-0 lg:mt-10 relative">
        <div className="w-11/12 lg:w-9/12 flex lg:h-[80px] absolute -translate-x-1/2 -translate-y-1/2 left-1/2 font-sans">
          {/* Desktop Navigation */}
          <div className="hidden lg:w-4/5 h-full bg-bg-primary lg:flex items-center justify-start gap-16 pl-16 text-text-primary font-normal">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-bg-secondary font-bold"
                  : "text-text-primary hover:text-hover-color"
              }
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-bg-secondary font-bold"
                  : "text-text-primary hover:text-hover-color"
              }
              to="/about-page"
            >
              About Us
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-bg-secondary font-bold"
                  : "text-text-primary hover:text-hover-color"
              }
              to="/product-page"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-bg-secondary font-bold"
                  : "text-text-primary hover:text-hover-color"
              }
              to="/faqs-page"
            >
              FAQs
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-bg-secondary font-bold"
                  : "text-text-primary hover:text-hover-color"
              }
              to="/contact-page"
            >
              Contact Us
            </NavLink>
          </div>
          <div className="hidden lg:w-1/5 h-full bg-bg-secondary lg:flex justify-center items-center font-bold text-text-primary">
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="hover:underline"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="bg-bg-primary w-3/5 md:w-4/5 f-fit lg:hidden  text-text-primary pl-4">
            <button className="mt-3" onClick={() => setIsMenuOpen(true)}>
              <Menu size={28} strokeWidth={1} />
            </button>
          </div>
          
          <div className="bg-bg-secondary w-2/5 md:w-1/5 text-[12px] f-fit lg:hidden py-4 justify-center items-center flex text-text-primary font-semibold font-sans">
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="hover:underline"
            >
              Get a Quote
            </button>
          </div>
        </div>
        <QuoteModal 
          isOpen={isQuoteModalOpen} 
          onClose={() => setIsQuoteModalOpen(false)} 
        />

        {/* Animated Full-Width Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: easeInOut }}
              className="fixed top-0 left-0 w-full h-full bg-bg-primary z-40 flex flex-col text-text-primary font-normal font-sans"
            >
              <div className="flex mt-32 justify-between items-center px-6 py-4">
                <h1 className="text-lg font-bold">
                  Pavitra Furniture And Interiors
                </h1>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X size={42} strokeWidth={1} />
                </button>
              </div>
              <ul className="space-y-6 px-6 mt-4">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-bg-secondary font-bold"
                        : "text-text-primary hover:text-hover-color"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-bg-secondary font-bold"
                        : "text-text-primary hover:text-hover-color"
                    }
                    to="/about-page"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-bg-secondary font-bold"
                        : "text-text-primary hover:text-hover-color"
                    }
                    to="/product-page"
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-bg-secondary font-bold"
                        : "text-text-primary hover:text-hover-color"
                    }
                    to="/faqs-page"
                  >
                    FAQs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-bg-secondary font-bold"
                        : "text-text-primary hover:text-hover-color"
                    }
                    to="/contact-page"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        
        <div className="flex flex-col items-center justify-center mt-10  text-left px-6 lg:px-20 mb-20 lg:mb-48">
          <h1 className="text-center lg:text-left font-bold text-bg-primary text-[36px] lg:text-[48px] font-sans mb-6 mt-20 ">
            Contact Us
          </h1>{" "}
          <br />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div 
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1}}
            viewport={{once:true, amount:.5
            }}
            className="w-full  px-0 lg:px-0 pr-0 lg:pr-36 mb-10 pl-0 md:pl-20 lg:mb-0">
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
                  <img className="" src={phone2} alt="" />
                  <p className="text-foot2 font-light font-sans text-[12px] lg:text-[16px]">
                    {" "}
                    +91 99009 94700
                  </p>
                </div>
                <div className="flex space-x-2 mt-4 ml-7">
                  {/* <img className="" src={phone2} alt="" /> */}
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
            </motion.div>
            <motion.div
      initial={{opacity:0, x:50}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:1, ease:easeInOut}}
      viewport={{once:true, amount:.3}}
       className=" sm:px-20 lg:px-10  ">
        <form className="space-y-4 font-montserrat   sm:text-[24px] placeholder:text-form-color ml-0 lg:ml-28">
          {/* Input Fields (First Name and Last Name) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="py-2 px-3 w-full bg-form-bg border border-form-bg-dark  font-montserrat text-form-color placeholder:text-[16px] lg:placeholder:text-[20px] placeholder:font-montserrat placeholder:font-light rounded-[5px]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="py-2 px-3 w-full border-form-bg-dark border  font-montserrat placeholder:text-[16px] lg:placeholder:text-[20px] placeholder:font-montserrat placeholder:font-light rounded-[5px]"
            />
          </div>

          {/* Email Address */}
          <input
            type="email"
            placeholder="Email Address"
            className="py-2 px-3 w-full border-form-bg-dark border text-[28px] font-montserrat placeholder:text-[16px] lg:placeholder:text-[20px] placeholder:font-montserrat placeholder:font-light rounded-[5px]"
          />

          {/* Phone Number */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="py-2 px-3 w-full border-form-bg-dark border text-[28px] font-montserrat placeholder:text-[16px] lg:placeholder:text-[20px] placeholder:font-montserrat placeholder:font-light rounded-[5px]"
          />

          {/* Description */}
          <textarea
            placeholder="Description (optional)"
            className="py-2 px-3 w-full border-form-bg-dark border text-[28px] font-montserrat placeholder:text-[16px] lg:placeholder:text-[20px] placeholder:font-montserrat placeholder:font-light h-[200px] resize-none rounded-[5px]"
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-bg-primary font-semibold font-montserrat text-text-primary py-6 px-16 text-sm"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      </motion.div>
          </div>
        </div>
      </div>

      <Footer />
      <Footer2 />
    </div>
  );
};

export default ContactPage;

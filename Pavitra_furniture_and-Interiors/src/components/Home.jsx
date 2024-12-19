import React, { useState } from "react";
import { Suspense } from "react";
import clock from "../assets/time 1.png";
import instagram from "../assets/instagram 1.png";
import facebook from "../assets/facebook-app-symbol 1.png";
import twitter from "../assets/twitter 1.png";
import pintrest from "../assets/pinterest 1.png";
import logo from "../assets/Pavitra 2 (Transparent Background).webp";
import building from "../assets/building 2.png";
import phone from "../assets/telephone 1.png";
import email from "../assets/email 2.png";
import rectangle from "../assets/Group 925111968 (1).webp";
import { easeInOut, motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

// Import all your components
const About = React.lazy(() => import('./About'));
const Expertise = React.lazy(() => import('./Expertise'));
const WhyChooseUs = React.lazy(() => import('./WhyChooseUs'));
const WhyChooseUs2 = React.lazy(() => import('./WhyChooseUs2'));
const Projects = React.lazy(() => import('./Projects'));
const Testimonials = React.lazy(() => import('./Testimonials'));
const Subscribe = React.lazy(() => import('./Subscribe'));
const Footer = React.lazy(() => import('./Footer'));
const Footer2 = React.lazy(() => import('./Footer2'));
const Contact = React.lazy(() => import('./Contact'));
const InteriorDesign = React.lazy(()=> import('./InteriorDesign'))

// Import QuoteModal
import QuoteModal from "./QuoteModal"; // Make sure to create this component

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

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
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start items-center ml-0 lg:ml-6 mb-10 lg:mb-0 py-12 lg:py-0 h-12">
          <img className="w-48" src={logo} alt="Logo" />
        </div>

        {/* Address, Phone, Email */}
        <div className="hidden lg:flex flex-col items-start pl-4 justify-start lg:justify-end lg:items-end mr-16 lg:flex-row gap-4 lg:gap-8 w-full text-[10px]">
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
        <div className="w-11/12  lg:w-9/12 flex lg:h-[80px] absolute -translate-x-1/2 -translate-y-1/2 left-1/2 font-sans">
          {/* Desktop Navigation */}
          <div className="hidden  lg:w-4/5 h-full bg-bg-primary lg:flex items-center justify-start gap-16 pl-16 text-text-primary font-normal">
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

          {/* Get a Quote Button - Desktop */}
          <div className="hidden lg:w-1/5 h-full bg-bg-secondary lg:flex justify-center items-center font-bold text-text-primary">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="hover:underline"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="bg-bg-primary w-3/5 md:w-4/5  f-fit lg:hidden text-text-primary pl-4">
            <button className="mt-3" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
              <Menu size={28} strokeWidth={1} />
            </button>
          </div>

          {/* Get a Quote Button - Mobile */}
          <div className="bg-bg-secondary text-[12px] w-2/5 md:w-1/5 f-fit lg:hidden py-4 justify-center items-center flex text-text-primary font-semibold font-sans">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="hover:underline"
            >
              Get a Quote
            </button>
          </div>
        </div>

        {/* Quote Modal */}
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
        />

        {/* Animated Mobile Menu */}
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

        {/* Hero Section */}
        <img
          src={rectangle}
          className="w-full h-[700px] md:h-screen lg:h-auto object-cover"
          alt="Furniture & Interior Design"
          loading="lazy"
        />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: easeInOut }}
          viewport={{ once: true, amount: 0.4 }}
          className="absolute top-24 md:top-36 lg:top-1/3 pl-5 mr-10 md:pl-10 lg:pl-10 mt-20 lg:mt-0"
        >
          <p className="text-text-primary text-[32px] font-medium lg:text-[64px] md:text-[64px] font-sans">
            Furniture & Interior <br /> Design{" "}
            <span className="relative inline-block">
              <span className="absolute bottom-3 md:bottom-6 lg:bottom-6 left-0 right-0 h-[10px] md:h-[20px] lg:h-[20px] bg-bg-secondary"></span>
              <span className="relative">with CNC</span>
            </span>
          </p>

          <p className="hidden lg:block md:block text-text-primary pt-4 font-sans text-[14px] md:text-[14px] lg:text-[18px]">
            At Pavitra furnitures and interiors, we bring your furniture ideas
            to life with <br /> unmatched precision and artistry. Using
            state-of-the-art CNC machines, we craft <br /> intricate designs
            that redefine luxury, functionality, and durability in furniture.
          </p>
          <p className="block lg:hidden md:hidden text-text-primary pt-4 font-sans text-[12px] lg:text-[18px]">
            At Pavitra furnitures and interiors, we bring your furniture ideas
            to life with unmatched precision and artistry. Using
            state-of-the-art CNC machines, we craft intricate designs that
            redefine luxury, functionality, and durability in furniture.
          </p>
            <Link to="/contact-page">
          <button className="bg-bg-secondary w-[150px] lg:w-[250px] text-text-primary font-bold font-sans h-[50px] lg:h-[70px] mt-10">
            Enquire Now
          </button>
            </Link>
        </motion.div>
      </div>

      {/* Other Page Sections */}
      <Suspense >
      <About />
      <Expertise />
      <InteriorDesign/>
      {/* <WhyChooseUs /> */}
      <WhyChooseUs2 />
      <Projects />
      <Testimonials />
      <Contact />
      <Subscribe />
      <Footer />
      <Footer2 />
    </Suspense>
    </div>
  );
};

export default Home;

import {useState} from "react";
import clock from "../assets/time 1.png";
import instagram from "../assets/instagram 1.png";
import facebook from "../assets/facebook-app-symbol 1.png";
import twitter from "../assets/twitter 1.png";
import pintrest from "../assets/pinterest 1.png";
import logo from "../assets/image 165.png";
import building from "../assets/building 2.png";
import phone from "../assets/telephone 1.png";
import email from "../assets/email 2.png";
import rectangle from "../assets/Group 925111968.png";
import { easeIn, easeInOut, motion,AnimatePresence } from "framer-motion";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="font-sans">
      <div className="w-full py-2  bg-bg-primary grid grid-cols-1 lg:grid-cols-2 place-items-center gap-2">
        <div className="w-auto lg:w-1/2 flex  items-center justify-center gap-2 text-center text-text-primary">
          <img src={clock} alt="Clock" />
          <p className="font-medium text-text-primary">Mon-Sun : 9:00AM - 5:00PM</p>
        </div>
        <div className="flex  justify-center lg:justify-start gap-6 w-4 ">
          <img className="" src={facebook} alt="Facebook" />
          <img className="" src={instagram} alt="Instagram" />
          <img className="" src={twitter} alt="Twitter" />
          <img className="" src={pintrest} alt="Pinterest" />
        </div>
        {/* Mobile Menu Button */}
      <div className="absolute top-0 right-0 lg:hidden">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-text-primary text-6xl"
        >
          ☰
        </button>
      </div>

      {/* Full-Width Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-full bg-bg-secondary z-50 flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-between items-center p-4 bg-bg-primary">
              <p className="text-text-primary font-bold text-lg font-sans">PAVITRA FURNITURE & INTERIOTS</p>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-text-primary text-4xl"
              >
                ✕
              </button>
            </div>

            {/* Menu Items */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex-grow flex flex-col justify-start mt-10 items-center space-y-6 text-text-primary font-medium text-lg"
            >
              <li>
                <a href="#home" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </a>
              </li>
              <hr className="w-4/5" />
              <button className="border px-10 py-4 ">
              Get a Quote
              </button>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      </div>
      {/* -----------------------SECTION 2-------------------- */}
      <div className="flex w-full items-center h-fit py-0 pb-0 lg:py-6  flex-col lg:flex-row">
        {/* Logo Section */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start items-center ml-0 lg:ml-6 mb-4 lg:mb-0 py-4 lg:py-0">
  <img className="w-36" src={logo} alt="Logo" />
</div>


        {/* Address, Phone, and Email Sections */}
        <div className="hidden lg:flex  flex-col items-start pl-4 justify-start lg:justify-end lg:items-end mr-16  lg:flex-row gap-4 lg:gap-8 w-full   text-[10px]">
          {/* Address */}
          <div className="flex gap-2 items-center">
            <div className="border border-bg-primary p-2">
              <img className="w-6" src={building} alt="Building" />
            </div>
            <div>
              <p className="font-semibold">60/1, SHOP NO 4</p>
              <p className="font-light"> YELAHANKA - 560064</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-2 items-center">
            <div className="border border-bg-primary p-2">
              <img className="w-6" src={phone} alt="Phone" />
            </div>
            <div>
              <p className="font-semibold">Have Any Questions?</p>
              <p className="font-light">+91 99009 94700</p>
            </div>
          </div>

          {/* Email */}
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
      {/* --------------------SECTION 3------------------- */}
      <div className="w-full mt-0 lg:mt-10 relative">
        <div className="hidden lg:w-9/12 lg:flex lg:h-[80px] absolute -translate-x-1/2 -translate-y-1/2 left-1/2 font-sans">
          <div className="w-4/5 h-full bg-bg-primary flex items-center justify-start gap-16 pl-16 text-text-primary font-normal">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Projects</a>
            <a href="">FAQs</a>
            <a href="">Contact Us</a>
          </div>
          <div className="w-1/5 h-full bg-bg-secondary flex justify-center items-center font-bold text-text-primary">
            <a href="">Get a Quote</a>
          </div>
        </div>

        <img
          src={rectangle}
          className="w-full h-[400px] lg:h-auto  object-cover"
          alt="Furniture & Interior Design"
        />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: easeInOut }}
          viewport={{ once: true, amount: 0.4 }}
          className="absolute top-0 lg:top-1/3 pl-5 lg:pl-10 mt-10 lg:mt-0"
        >
          <p className="text-text-primary text-[28px]  font-medium lg:text-[64px] font-sans">
            Furniture & Interior <br /> Design with CNC
          </p>{" "}
          <br />
          <p className="hidden lg:block text-text-primary pt-4 font-sans text-[12px] lg:text-[18px]">
            At Pavitra furnitures and interiors, we bring your furniture ideas
            to life with <br /> unmatched precision and artistry. Using
            state-of-the-art CNC machines, we craft <br /> intricate designs
            that redefine luxury, functionality, and durability in furniture.
          </p>
          <p className="block lg:hidden text-text-primary pt-4 font-sans text-[12px] lg:text-[18px]">
            At Pavitra furnitures and interiors, we bring your furniture ideas
            to life with unmatched precision and artistry. Using
            state-of-the-art CNC machines, we craft intricate designs that
            redefine luxury, functionality, and durability in furniture.
          </p>
          <br />
          <button className="bg-bg-secondary w-[150px] lg:w-[250px] text-text-primary font-bold font-sans h-[50px] lg:h-[70px] mt-10">
            Enquire Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

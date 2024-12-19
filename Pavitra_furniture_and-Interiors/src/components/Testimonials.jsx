import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import symbol from "../assets/“.png";
import profile1 from "../assets/image 166.png";
import profile2 from "../assets/image 167.png";
import profile3 from "../assets/image 168.png";
import profile4 from "../assets/image 169.png";
import company1 from "../assets/image 170.png";
import company2 from "../assets/image 171.png";
import company3 from "../assets/image 172.png";

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const testimonials = [
    {
      review:
        "The custom designs we ordered turned out even better than we imagined. The craftsmanship and attention to detail are truly impressive. Highly recommend their services!",
      name: "Lalith",
      company: "First Home Interiors",
      profile: profile1,
    },
    {
      review:
        "From consultation to delivery, the process was seamless. The CNC carving work on our doors and panels is top-notch, and they perfectly match our home's aesthetic.",
      name: "Girish",
      company: "Brick and glass India pvt lmt",
      profile: profile2,
    },
    {
      review:
        "Their team was incredibly professional and delivered exactly what we needed for our project. The furniture is durable, beautifully crafted, and arrived right on time.",
      name: "Kathik",
      company: "Veva designs",
      profile: profile3,
    },
    {
      review:
        "I couldn't be happier with my order! The wooden screens they designed are a perfect blend of style and functionality. Great quality and excellent service.",
      name: "Wasim",
      company: "The design company",
      profile: profile4,
    },
  ];

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setSwipeDirection('left');
      setCurrentPage((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    },
    onSwipedRight: () => {
      setSwipeDirection('right');
      setCurrentPage((prev) => 
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    },
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  const getSwipeVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? 300 : -300
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? -300 : 300,
      transition: { duration: 0.3 }
    })
  };

  // Pagination calculations for tablet view
  const tabletTestimonials = testimonials.reduce((acc, _, index, array) => {
    if (index % 2 === 0) {
      acc.push(array.slice(index, index + 2));
    }
    return acc;
  }, []);

  const [currentTabletPage, setCurrentTabletPage] = useState(0);

  const handleTabletPageChange = (pageIndex) => {
    setCurrentTabletPage(pageIndex);
  };

  return (
    <div className="mt-10 lg:mt-20 font-sans px-4 sm:px-10 lg:px-20">
      {/* Title Section */}
      <motion.h1
        className="text-[36px] sm:text-[48px] lg:text-[48px] font-sans font-bold text-bg-primary text-center mb-10"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:2}}
        viewport={{once: true, amount:.3}}
      >
        Client Testimonials
      </motion.h1>

      {/* Mobile View - Swipeable Testimonials */}
      <div 
        className="block md:hidden touch-pan-y select-none"
        {...swipeHandlers}
      >
        <AnimatePresence mode="wait" custom={swipeDirection}>
          <motion.div
            key={currentPage}
            custom={swipeDirection}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={getSwipeVariants}
            className="border-customGray border rounded-[10px] p-6 mb-6 touch-pan-y"
          >
            <div>
              <img className="p-4 w-16" src={symbol} alt="Symbol" />
            </div>
            <div className="text-left text-[14px] mb-4">
              <p className="italic">{testimonials[currentPage].review}</p>
            </div>
            <div className="mt-6 flex items-center">
              {/* <div className="w-1/5 flex justify-center items-center">
                <img
                  src={testimonials[currentPage].profile}
                  alt={`${testimonials[currentPage].name} Profile`}
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div> */}
              <div className="w-4/5 text-left ml-0">
                <p className="font-normal text-[12px] text-text-company">
                  {testimonials[currentPage].name}
                </p>
                <p className="text-[10px] font-thin text-text-company">
                  {testimonials[currentPage].company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center items-center space-x-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              aria-label={`Go to page ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentPage === index 
                  ? 'bg-bg-primary scale-125' 
                  : 'bg-bg-contact'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Tablet View - 2 Testimonials per Page */}
      <div className="hidden md:block lg:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTabletPage}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {tabletTestimonials[currentTabletPage].map((testimonial, index) => (
              <motion.div
                key={index}
                className="border-customGray border rounded-[10px] p-4 h-full flex flex-col justify-between"
              >
                <div>
                  <img className="p-4 w-16" src={symbol} alt="Symbol" />
                </div>
                <div className="text-left text-[14px] lg:text-[20px] ml-8">
                  <p className="italic">{testimonial.review}</p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="w-1/5 flex justify-center items-center">
                    <img
                      src={testimonial.profile}
                      alt={`${testimonial.name} Profile`}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>
                  <div className="w-4/5 text-left ml-4">
                    <p className="font-normal text-[12px] lg:text-[20px] text-text-company">
                      {testimonial.name}
                    </p>
                    <p className="text-[10px] lg:text-[14px] font-thin text-text-company">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Tablet Pagination Dots */}
        <div className="flex justify-center items-center space-x-2 mt-4">
          {tabletTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabletPageChange(index)}
              aria-label={`Go to page ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentTabletPage === index 
                  ? 'bg-bg-primary scale-125' 
                  : 'bg-bg-contact'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid View */}
      <motion.div
        className="hidden md:hidden  lg:grid lg:grid-cols-4 gap-6 sm:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="border-customGray border rounded-[10px] p-4 h-full flex flex-col justify-between"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div>
              <img className="p-4 w-16" src={symbol} alt="Symbol" />
            </div>
            <div className="text-left text-[14px] lg:text-[20px] ml-8">
              <p className="italic">{testimonial.review}</p>
            </div>
            <div className="mt-6 flex items-center ml-4">
              {/* <div className="w-1/5 flex justify-center items-center">
                <img
                  src={testimonial.profile}
                  alt={`${testimonial.name} Profile`}
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div> */}
              <div className="w-4/5 text-left ml-4">
                <p className="font-normal text-[12px] lg:text-[20px] text-text-company">
                  {testimonial.name}
                </p>
                <p className="text-[10px] lg:text-[14px] font-thin text-text-company">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Company Logos Section */}
      <motion.div
        className="w-full flex justify-center items-center gap-8 sm:gap-16 lg:gap-72 mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delay: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[company1, company2, company3].map((company, index) => (
          <motion.div
            key={index}
            className="flex justify-center"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <img 
              className="w-24 sm:w-32 lg:w-40" 
              src={company} 
              alt={`Company ${index + 1}`} 
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
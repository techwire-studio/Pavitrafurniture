
import expbg from "../assets/Rectangle 23107.webp";
import exp from "../assets/image 160.webp";
import { motion } from "framer-motion";
import intgroup from "../assets/inte group 2.png"

const Expertise = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 lg:gap-0 font-sans mt-0 lg:mt-0 px-4 md:px-10 lg:px-20">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-4 md:px-6 lg:px-20 py-6 md:py-8 lg:py-10 mt-0 lg:mt-8 md:mt-20"
      >
        <h1 className="text-center md:text-left font-bold text-bg-primary text-[28px] md:text-[38px] lg:text-[48px] mb-4">
          Our Expertise
        </h1>
        <div>
          <p className="font-sans font-bold mb-6 text-[16px] md:text-[22px] lg:text-[24px] text-sub-color mt-10">
            CNC and wood works
          </p>
          <ul>
            <li className="text-[12px] md:text-[14px] lg:text-[14px] font-sans font-bold text-sub-color">
              Custom Furniture Design
              <p className="font-sans font-normal text-sub-color mt-2 text-[12px] md:text-[14px] lg:text-[14px]">
                Tailored to your preferences, our CNC-crafted furniture ensures every piece is a reflection of your unique style.
              </p>
            </li>
            <li className="text-[12px] md:text-[14px] lg:text-[14px] font-sans font-bold text-sub-color mt-4">
              Interior Styling and Design
              <p className="font-sans font-normal text-sub-color mt-2 text-[12px] md:text-[14px] lg:text-[14px]">
                We provide complete interior styling that complements your space, blending aesthetics and functionality.
              </p>
            </li>
            <li className="text-[12px] md:text-[14px] lg:text-[14px] font-sans font-bold text-sub-color mt-4">
              Wood Carving and Craftsmanship
              <p className="font-sans font-normal text-sub-color mt-2 text-[12px] md:text-[14px] lg:text-[14px]">
                Our craftsmen excel at intricate wood carving, offering highly detailed and personalized pieces.
              </p>
            </li>
            <li className="text-[12px] md:text-[14px] lg:text-[14px] font-sans font-bold text-sub-color mt-4">
              CNC Precision Work
              <p className="font-sans font-normal text-sub-color mt-2 text-[12px] md:text-[14px] lg:text-[14px]">
                We use state-of-the-art CNC machinery to create precise, flexible, and custom designs.
              </p>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="relative mt-0 md:mt-20 lg:mt-20 flex justify-center items-center"
      >
        {/* <img 
          src={expbg} 
          className="object-cover w-[250px] md:w-[500px] lg:w-[700px]" 
          alt="First Image" 
        />
        <img 
          src={exp} 
          className="absolute top-4 md:top-8 left-4 md:left-8 w-[250px] md:w-[500px] lg:w-[700px]" 
          alt="Second Image"
        /> */}
        <img className="w-full lg:w-[600px] md:w-[500px]" src={intgroup} alt="" />
      </motion.div>
    </div>
  );
};

export default Expertise;

import line from "../assets/Line 115.png";
import circle from "../assets/Ellipse 649.png";
import handcraft1 from "../assets/handcraft 1.png";
import solution from "../assets/solutions 1.png";
import management from "../assets/management 1.png";
import earth from "../assets/planet-earth 1.png";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <div className="mt-10 md:mt-20 lg:mt-20 font-sans overflow-x-hidden">
      <h1 className="lg:text-left font-bold text-bg-primary text-[32px] lg:text-[48px] mb-6 flex justify-center items-center">
        Why Choose Us
      </h1>
      {/* ---------------------------For Desktop---------------------------- */}
      <div className="hidden lg:flex md:flex justify-center gap-8 mt-10 lg:mt-20 md:mt-20">
        <div className="h-full w-1/3">
          <motion.div className="h-[200px] w-full relative">
            <motion.img
              src={circle}
              alt="Circle"
              className="absolute top-[-2px] right-[-39px] w-3"
            />
            <motion.img
              initial={{ opacity: 1, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-12"
              src={handcraft1}
              alt=""
            />
            <motion.p
              initial={{ opacity: 1, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4 text-bg-primary font-bold text-[16px]"
            >
              Precision Craftsmanship
            </motion.p>
            <motion.p
              initial={{ opacity: 1, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4 text-[14px]"
            >
              Our advanced CNC machines ensure every cut and detail is executed
              with unmatched accuracy, delivering designs that are both flawless
              and visually stunning.
            </motion.p>
          </motion.div>
          <div className="h-[200px] w-full"></div>
          <div className="h-[200px] w-full relative">
            <img
              src={circle}
              alt="Circle"
              className="absolute top-[-2px] right-[-39px] w-3"
            />
            <motion.img
              initial={{ opacity: 1, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-12"
              src={management}
              alt=""
            />
            <motion.p
              initial={{ opacity: 1, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4 text-bg-primary font-bold text-[16px]"
            >
              Experienced Team
            </motion.p>
            <motion.p
              initial={{ opacity: 1, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4 text-[14px]"
            >
              Our team of skilled designers and craftsmen brings years of
              expertise and a deep passion for creating furniture that exceeds
              expectations.
            </motion.p>
          </div>
          <div className="h-[200px] w-full"></div>
        </div>
        <div className="flex items-end h-full">
          <img className="h-[600px]" src={line} alt="" />
        </div>
        <div className="h-full w-1/3">
          <div className="h-[200px] w-full"></div>
          <div className="h-[200px] w-full relative">
            <img
              src={circle}
              alt="Circle"
              className="absolute top-[-2px] left-[-39px] w-3"
            />
            <motion.img
              initial={{ opacity: 1, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-12 ml-20"
              src={solution}
              alt=""
            />
            <motion.p
              initial={{ opacity: 1, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4 ml-20  text-bg-primary font-bold text-[16px]"
            >
              Custom Solutions
            </motion.p>
            <motion.p
              initial={{ opacity: 1, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4 ml-20 text-[14px]"
            >
              We create furniture that is tailored to your specific needs,
              reflecting your style and fitting perfectly into your space, no
              matter the size or complexity.
            </motion.p>
          </div>
          <div className="h-[200px] w-full"></div>
          <div className="h-[200px] w-full relative">
            <img
              src={circle}
              alt="Circle"
              className="absolute top-[-2px] left-[-39px] w-3"
            />
            <motion.img
              initial={{ opacity: 1, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-12 ml-20"
              src={earth}
              alt=""
            />
            <motion.p
              initial={{ opacity: 1, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4 ml-20  text-bg-primary font-bold text-[16px]"
            >
              Sustainability Focus
            </motion.p>
            <motion.p
              initial={{ opacity: 1, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4 ml-20 text-[14px]"
            >
              We prioritize eco-friendly practices, using sustainable materials
              and reducing waste to create beautiful furniture while caring for
              the environment.
            </motion.p>
          </div>
        </div>
      </div>
      {/* ----------------------------For Mobile--------------------------------- */}
      <div className="flex lg:hidden md:hidden w-full relative font-sans mt-20">
        <div className="w-1/5">
          <img className="h-[600px] ml-8" src={line} alt="" />
        </div>
        <div className="w-4/5">
          <div className="w-full h-[200px] pr-4">
            <img
              className="absolute w-2 left-[28.5px] top-[-2px]"
              src={circle}
              alt=""
            />
            <motion.div
              initial={{ opacity: 1, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="absolute bottom-[670px] pr-2"
            >
              <img className="w-14" src={handcraft1} alt="" />
              <p className="mt-4 text-bg-primary font-bold text-[14px]">
                Precision Craftsmanship
              </p>
              <p className="mt-4 text-[10px]">
                Our advanced CNC machines ensure every cut and detail is
                executed with unmatched accuracy, delivering designs that are
                both flawless and visually stunning.
              </p>
            </motion.div>
          </div>
          <div className="w-full h-[200px] pr-4 ">
            <img className="absolute w-2 left-[28.5px]" src={circle} alt="" />
            <motion.div
              initial={{ opacity: 1, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="absolute bottom-[470px] pr-2"
            >
              <img className="w-14" src={solution} alt="" />
              <p className="mt-4 text-bg-primary font-bold text-[14px]">
                Custom Solutions
              </p>
              <p className="mt-4 text-[10px]">
                We create furniture that is tailored to your specific needs,
                reflecting your style and fitting perfectly into your space, no
                matter the size or complexity.
              </p>
            </motion.div>
          </div>
          <motion.div className="w-full h-[200px] pr-4">
            <img className="absolute w-2 left-[28.5px]" src={circle} alt="" />
            <motion.div
              initial={{ opacity: 1, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="absolute bottom-[270px] pr-2"
            >
              <img className="w-14" src={management} alt="" />
              <p className="mt-4 text-bg-primary font-bold text-[14px]">
                Experienced Team
              </p>
              <p className="mt-4 text-[10px]">
                Our team of skilled designers and craftsmen brings years of
                expertise and a deep passion for creating furniture that exceeds
                expectations.
              </p>
            </motion.div>
          </motion.div>
          <div className="w-full h-[200px] pr-4">
            <img className="absolute w-2 left-[28.5px]" src={circle} alt="" />
            <motion.div
              initial={{ opacity: 1, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="absolute bottom-[70px] pr-2"
            >
              <img className="w-14" src={earth} alt="" />
              <p className="mt-4 text-bg-primary font-bold text-[14px]">
                Sustainability Focus
              </p>
              <p className="mt-4 text-[10px]">
                We prioritize eco-friendly practices, using sustainable
                materials and reducing waste to create beautiful furniture while
                caring for the environment.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

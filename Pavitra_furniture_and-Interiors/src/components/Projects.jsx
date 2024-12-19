
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import project from "../assets/project.webp"

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      // viewport={{ once: true, amount: 0.4 }}
      className="mt-10 md:mt-20 lg:mt-20 flex justify-center px-6 md:px-10 lg:px-20"
    >
      <div className="w-full md:w-4/5 lg:w-full h-fit ">
        <h1 className="text-center font-sans font-bold text-bg-primary text-[36px] sm:text-[32px] lg:text-[48px] mb-10">
          Our Projects
        </h1>
        <div className="mt-0 lg:mt-20">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 0.4 }}
            src={project}
            alt="Project Image"
            className="w-full md:w-11/12 lg:w-11/12 h-full flex m-auto"
          />
        </div>
        <div className="flex justify-center mt-10 lg:mt-16">
          
            <Link to="./product-page"><button className="text-[18px] sm:text-[20px] lg:text-[24px] text-bg-primary border-bg-primary border px-12 lg:px-20 py-3 lg:py-6 font-sans font-bold ">View more</button></Link>
          
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

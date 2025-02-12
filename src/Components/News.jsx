import React from "react";
import { motion } from "framer-motion";  // Import motion from Framer Motion
import { useMode } from '../context/ModeContext';

const News = () => {
  const { darkMode } = useMode();

  return (
    <motion.section
      id="news"
      className="flex flex-col md:flex-row-reverse gap-8 md:gap-4 items-center justify-between w-full md:w-[90%] mx-auto py-8 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0"
        initial={{ opacity: 0, scale:0.5 }}
        whileInView={{ opacity: 1, scale:1 }}
        transition={{ duration: 1 }}
      >
        <iframe
          className="w-full max-w-[500px] h-64 md:h-80 rounded-xl shadow-xl"
          src="https://www.youtube.com/embed/fAVcj01Kp2U?autoplay=0&rel=0"
          title="WaysAhead Global"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </motion.div>

      <motion.div
        className="w-full md:pl-9 md:w-1/2 flex flex-col gap-4"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2
          className={`${darkMode === 'dark' ? 'text-blue-500' : 'text-orange-600'} text-3xl md:text-5xl font-bold text-center md:text-left`}
        >
          Who We Are
        </h2>

        <p className="w-[80%] mx-auto md:mx-0 text-center md:text-left text-sm md:text-lg leading-relaxed">
          WaysAhead Global is a Singapore-based digital transformation company
          leveraging the power of data analytics and artificial intelligence,
          helping startups and tech companies across the planet maximize
          investments from data assets.
        </p>

        <motion.button
          className={`${darkMode === 'dark' ? 'bg-blue-500' : 'bg-orange-600'} transition-all duration-300 px-6 py-4 rounded cursor-pointer w-[80%] button max-w-[200px] mx-auto md:mx-0 text-sm mt-4 shadow-lg`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Latest News
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default News;

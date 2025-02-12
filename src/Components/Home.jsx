import React from "react";
import ParticlesComponent from "./ParticlesComponent";
import News from "./News";
import About from "./About";
import Services from "./Services";
import UseCases from "./UseCases";
import Careers from "./Carrers";
import Contact from "./Contact";
import { useMode } from '../context/ModeContext';
import { motion } from "framer-motion";
const Home = () => {

  const { darkMode, toggleMode } = useMode();
  return (
    <>
      <motion.section
        id="home"
        className="min-h-[80vh] w-full flex flex-col md:flex-row-reverse items-center justify-center px-6 md:px-12 lg:px-20 py-10 md:gap-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://www.waysaheadglobal.com/assets/images/logo.png"
            alt="WaysAhead Global Logo"
            className="w-48 md:w-60 lg:w-72 transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </motion.div>

        <motion.div
          className="text-center md:text-left w-full md:w-1/2 space-y-5"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2
            className="text-2xl md:text-3xl font-serif  leading-10 md:leading-14"

          >
            Data is eternal, and we are building consciousness around it. We are{" "}
            <span className="font-semibold">WAYSAHEAD GLOBAL.</span>
          </h2>

          <p className="text-sm md:text-base w-[90%] mx-auto md:mx-0">
            We help companies transform their business vision into data-centric
            innovations.
          </p>

          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <button className={`px-6 border py-3  ${darkMode === 'dark' ? 'text-blue-400 ' : 'text-orange-600'} text-sm font-semibold rounded-md cursor-pointer transition-all duration-300 button`}>
              Explore AlaaS
            </button>
            <button className={`${darkMode === 'dark' ? 'bg-blue-500' : 'bg-orange-600'} px-6 py-3   text-sm font-semibold rounded-md transition-all duration-300 hover:bg-${darkMode === 'dark' ? 'blue-700' : 'orange-700'} cursor-pointer`}>
              Rapid Product Development
            </button>
          </div>
        </motion.div>
      </motion.section>
      <News />
      <About />
      <Services />
      <UseCases />
      <Careers />
      <Contact />
    </>
  );
};

export default Home;

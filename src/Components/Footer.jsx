import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import Wave from 'react-wavify';
import { useMode } from '../context/ModeContext';

const Footer = () => {
  const { darkMode } = useMode();
  const waveColor = darkMode === "dark" ? "#2b7fff" : "#f54900";  // Dynamic wave color based on darkMode

  return (
    <div className='relative'>
      <Wave 
        fill={waveColor} 
        paused={false}
        options={{
          height:6,
          amplitude: 20,
          speed: 0.15,
          points: 6,
        }}
        style={{margin:"0px", display:"flex"}} 
      />
      <footer className={` p-4 px-6 md:px-16 transition-all duration-500 ${darkMode === 'dark' ? 'bg-blue-500 text-black' : 'bg-orange-600 text-black'}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">

          <div className='col-span-2 md:col-span-1 w-full flex flex-col justify-center items-center'>
            <h2 className={`text-2xl md:text-3xl font-bold   my-6 `}>Contact with Us</h2>
            <div className="flex gap-9">
              <a href="#" className=" scale-110 transition-transform"><FaLinkedin size={30} /></a>
              <a href="#" className=" scale-110 transition-transform"><FaInstagram size={30} /></a>
              <a href="#" className=" scale-110 transition-transform"><FaFacebook size={30} /></a>
              <a href="#" className=" scale-110 transition-transform"><FaTwitter size={30} /></a>
            </div>
          </div>

          <div className='flex justify-center flex-col items-center'>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li className='text-sm md:text-lg text-center'><a href="#">About</a></li>
              <li className='text-sm md:text-lg text-center'><a href="#">FAQ</a></li>
              <li className='text-sm md:text-lg text-center'><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className='flex justify-center flex-col items-center'>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className='text-center text-sm md:text-lg'><a href="#">Rapid Product Development</a></li>
              <li className='text-center text-sm md:text-lg'><a href="#">Data Analytics</a></li>
              <li className='text-center text-sm md:text-lg'><a href="#">AI As A Service</a></li>
            </ul>
          </div>

          <div className='flex justify-center flex-col items-center'>
            <h3 className="text-lg font-semibold mb-4">Solution</h3>
            <ul className="space-y-2">
              <li className='text-sm md:text-lg text-center'><a href="#">BI Kiosk</a></li>
              <li className='text-sm md:text-lg text-center'><a href="#">News & Media</a></li>
              <li className='text-sm md:text-lg text-center'><a href="#">Blog/Vlog</a></li>
            </ul>
          </div>

          <div className='flex justify-center flex-col items-center'>
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              <li className='text-sm md:text-lg text-center'><a href="#">Terms</a></li>
              <li className='text-sm md:text-lg text-center'><a href="#">Privacy Policy</a></li>
              <li className='text-sm md:text-lg text-center'><a href="#">HustleX 1.0 Results</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm md:text-lg">
            © 2025 Copyright <span className=" font-semibold ">WaysAhead Global.</span>
          </p>
          <a href="#" className="font-semibold underline text-sm md:text-lg">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdDarkMode } from 'react-icons/md';
import { IoSunny, IoMoon } from "react-icons/io5";
import { useMode } from '../context/ModeContext';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { darkMode, toggleMode } = useMode();
    const [rotating, setRotating] = useState(false);

    const handleModeToggle = () => {
        setRotating(true);
        setTimeout(() => {
            toggleMode();
            setRotating(false);
        }, 300);
    };

    return (
        <div className=' sticky  w-full top-0 z-50'>
            <div className={`w-full p-1 px-7 lg:px-14 flex justify-between items-center z-40 ${darkMode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-300`}>
                <a href='/'>
                    <img src="https://www.waysaheadglobal.com/assets/images/logo.png" alt="WaysAhead Global" className='w-15 md:w-18' />
                </a>

                <div className='flex items-center gap-6 md:gap-8'>

                    <button onClick={toggleMode} className="text-xl sm:text-2xl md:text-3xl cursor-pointer">
                        {darkMode === 'dark' ? <IoSunny className='text-yellow-400' /> : <MdDarkMode className='text-gray-800' />}
                    </button>
                    {
                        localStorage.getItem('token') ?
                            <a onClick={() => { localStorage.clear() }} className={`${darkMode === 'dark' ? 'bg-blue-500' : 'bg-orange-600'} cursor-pointer px-4 py-2 rounded text-white  text-xs sm:text-sm font-semibold button`}>Logout</a>
                            :
                            <a href='/auth-login-signup' className={`${darkMode === 'dark' ? 'bg-blue-500' : 'bg-orange-600'} cursor-pointer px-4 py-2 rounded text-white text-xs sm:text-sm  font-semibold button `}>Login</a>
                    }
                    <div className={`${darkMode === 'dark' ? 'text-blue-500' : 'text-orange-600'}`} onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes className='text-2xl md:text-3xl cursor-pointer' /> : <FaBars className='text-2xl md:text-3xl cursor-pointer' />}
                    </div>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className={`hidden absolute w-full md:flex transform ${menuOpen ? 'translate-y-0' : 'translate-y-[-100%] -z-10'}   gap-6 items-center justify-center ${darkMode === 'dark' ? 'bg-blue-500 text-black' : 'bg-orange-600 text-white'} py-2 `} style={{ transition: '0.3s ease-in-out' }}>
                <nav className='flex gap-9   font-semibold text-sm'>
                    <a href='/#home' className=' hover:text-red-500  transition'>Home</a>
                    <a href='/#about' className=' hover:text-red-500  transition'>About Us</a>
                    <a href='/#service' className=' hover:text-red-500  transition'>Services</a>
                    <a href='/#usecase' className=' hover:text-red-500  transition'>Use Cases</a>
                    <a href='/#career' className=' hover:text-red-500  transition'>Careers</a>
                    <a href='/#contact' className=' hover:text-red-500  transition'>Contact</a>
                    <a href='/#news' className=' hover:text-red-500  transition'>News & Media</a>
                </nav>
            </div>

            <div className={`md:hidden absolute ${darkMode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}  w-full flex text-sm flex-col  p-1 items-center transition-colors duration-300  transform ${menuOpen ? 'translate-x-0' : 'translate-x-[-100%]'}`} style={{ transition: '0.3s ease-in-out gap-8' }}>
                <a href='/#home' className='  py-2 navitems  w-[90%] mx-auto flex justify-center rounded-md' onClick={()=>{
                    setMenuOpen(false)
                }}>Home</a>
                <a href='/#about' className='  py-2 navitems w-[90%] mx-auto flex justify-center rounded-md' onClick={()=>{
                    setMenuOpen(false)
                }}>About Us</a>
                <a href='/#service' className='  py-2 navitems w-[90%] mx-auto flex justify-center rounded-md' onClick={()=>{
                    setMenuOpen(false)
                }}>Services</a>
                <a href='/#usecase' className='  py-2 navitems w-[90%] mx-auto flex justify-center rounded-md' onClick={()=>{
                    setMenuOpen(false)
                }}>Use Cases</a>
                <a href='/#career' className='  py-2 navitems w-[90%] mx-auto flex justify-center rounded-md' onClick={()=>{
                    setMenuOpen(false)
                }}>Careers</a>
                <a href='/#contact' className='  py-2 navitems w-[90%] mx-auto flex justify-center rounded-md   ' onClick={()=>{
                    setMenuOpen(false)
                }}>Contact</a>
                <a href='/#news' className='  py-2 navitems w-[90%] mx-auto flex justify-center rounded-md   ' onClick={()=>{
                    setMenuOpen(false)
                }}>News & Media</a>
                <hr className='border w-[90%] my-5' />
            </div>

        </div>
    );
};

export default Header;

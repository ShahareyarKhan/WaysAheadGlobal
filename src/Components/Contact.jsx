import React, { useState } from 'react'
import { useMode } from '../context/ModeContext';
import { motion } from 'framer-motion';
const Contact = () => {
    const { darkMode, toggleMode } = useMode();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        interest: '',
        country: '',
        sector: '',
        description: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('https://ways-ahead-shahareyar-backend.vercel.app/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    interest: '',
                    country: '',
                    sector: '',
                    description: ''
                });
                setTimeout(() => {
                    setStatus('')
                }, 2000);
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <section id='contact' className="max-w-4xl w-[90%] mx-auto p-6 py-10  shadow-lg">
            <motion.h2 initial={{ y: -40 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
                className={`text-2xl text-center md:text-3xl py-6 font-bold ${darkMode === 'dark' ? 'text-blue-500' : 'text-orange-600'}  `}>Contact Form</motion.h2>
            <div className='flex flex-col md:flex-row md:space-x-6 items-center justify-center gap-9'>
                <motion.form initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8 }} onSubmit={handleSubmit} className='w-full md:w-3/5'>
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-1 text-sm ">Name*</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border  rounded-md focus:outline-none"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm">Email*</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border  rounded-md focus:outline-none"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm">Company Name*</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border  rounded-md focus:outline-none"
                                placeholder="Enter company name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm">Area of Interest*</label>
                            <input
                                type="text"
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border  rounded-md focus:outline-none"
                                placeholder="Enter your area of interest"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm">Country*</label>
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border  rounded-md focus:outline-none"
                                required
                            >
                                <option value="">Select your country</option>
                                <option value="Singapore">Singapore</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                <option value="India">India</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-1 text-sm">Retail Sector*</label>
                            <select
                                name="sector"
                                value={formData.sector}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border  rounded-md focus:outline-none"
                                required
                            >
                                <option value="">Select Retail Sector</option>
                                <option value="Retail">Retail</option>
                                <option value="Hospitality">Hospitality</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="F&B">F&B</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-1 text-sm">Description*</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border  rounded-md focus:outline-none"
                                placeholder="Enter a description"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        <div className="">
                            <button className={` transition-all duration-300 px-8 w-full text-sm py-3 mt-6 rounded text-white cursor-pointer shadow-md ${darkMode === 'dark' ? 'bg-blue-500 hover:bg-blue-600 hover:rounded-xl' : 'bg-orange-600 hover:bg-orange-700 hover:rounded-xl'} `}>Submit</button>
                        </div>
                    </div>
                </motion.form>

                <motion.div initial={{ opacity:0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }} className="mt-10 md:mt-0 md:w-2/5">
                    <motion.h2 initial={{ y: -40 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.8 }} className={`text-2xl md:text-3xl my-9 text-center font-bold ${darkMode === 'dark' ? 'text-blue-500' : 'text-orange-600'}  `}>Our Locations</motion.h2>
                    <motion.div initial={{ opacity:0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }} className="mb-6 flex items-center space-x-4">
                        <img src="https://th.bing.com/th/id/OIP.pCrVPsAfz81gOhOG-nnTBgHaE8?rs=1&pid=ImgDetMain" alt="Singapore" className="w-20" />
                        <div>
                            <h4 className="text-lg font-semibold">Singapore</h4>
                            <p className='text-sm'>68 Circular Road, #02-01</p>
                            <p className='text-sm'>Singapore, 049422</p>
                        </div>
                    </motion.div>

                    <div className="mb-6 flex items-center space-x-4">
                        <img src="https://www.iconarchive.com/download/i109052/wikipedia/flags/AE-United-Arab-Emirates-Flag.1024.png" alt="UAE" className="w-20" />
                        <div>
                            <h4 className="text-lg font-semibold">United Arab Emirates</h4>
                            <p className='text-sm'>A4/1032 Al Hamra RAKEZ</p>
                            <p className='text-sm'>Ras Al Khaimah, UAE</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <img src="https://cdn1.iconfinder.com/data/icons/flags-36/512/India_Country_flag-512.png" alt="India" className="w-20 " />
                        <div>
                            <h4 className=" font-semibold">India</h4>
                            <p className='text-sm'>2nd Floor, Regal Building,</p>
                            <p className='text-sm'>Connaught Place, Delhi </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

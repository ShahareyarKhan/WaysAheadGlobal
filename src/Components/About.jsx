import React from 'react';
import { motion } from 'framer-motion';
import { useMode } from '../context/ModeContext';

const About = () => {
    const { darkMode } = useMode();
    return (
        <motion.section
            id='about'
            className="py-20 w-[90%] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h2
                className={`${darkMode === 'dark' ? 'text-blue-500' : 'text-orange-600'} text-3xl md:text-4xl font-bold text-center`}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Our Mission
            </motion.h2>
            <motion.p
                className="text-center text-gray-600 mt-2 w-[70%] mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                At WaysAhead, we combine the latest techniques with deep industry, functional, and analytics expertise to help clients capture the most value from data.
            </motion.p>

            <motion.h2
                className={`${darkMode === 'dark' ? 'text-blue-500' : 'text-orange-600'} text-3xl md:text-4xl font-semibold text-center pt-18 pb-5`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Magic Happens Here -<b>The WaysAhead Global Team</b>
            </motion.h2>
            <motion.img
                src="https://www.waysaheadglobal.com/assets/images/team.png"
                className="contrast-50 hover:contrast-100"
                style={{ transition: '0.3s ease-in-out' }}
                alt=""
                initial={{ opacity: 0, scale:0.8 }}
                whileInView={{ opacity: 1, scale:1 }}
                transition={{ duration: 1 }}
            />

            <div className='mt-20 flex justify-center items-center md:w-[90%] mx-auto flex-col md:flex-row'>
                <div>
                    <motion.img
                        src="https://www.waysaheadglobal.com/assets/images/v-01.jpg"
                        alt=""
                        className='md:w-full'
                        initial={{ opacity: 0, scale:0.8 }}
                        whileInView={{ opacity: 1,  scale:1 }}
                        transition={{ duration: 1 }}
                    />
                </div>
                <div className='w-[80%] md:w-1/2 mx-auto mt-4'>
                    <motion.h1
                        className={`text-xl font-semibold my-2 ${darkMode === 'dark' ? 'text-blue-500' : 'text-orange-600'}`}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Thought Alignment
                    </motion.h1>
                    <motion.h1
                        className={`text-2xl font-bold my-2 ${darkMode === 'dark' ? 'text-blue-400' : 'text-orange-400'}`}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Our Philosophy of Data
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 ,scale:0.8}}
                        whileInView={{ opacity: 1, scale:1 }}
                        transition={{ duration: 1 }} className='w-[90%]'
                    >
                        If Newton had not been born, the law of gravitation would have remained all the same and would have worked all the same. It was Newton's genius which formulated it, discovered it, brought it into consciousness, made it a conscious thing to the human race." – Swami Vivekananda. <br /> <br />This is the same alignment we have around data and related technologies. We believe that we are helping organizations by formulating solutions around digital transformation. Each process within an organization demands sustainable growth and continuous improvement through innovation. At WaysAhead Global, we are practising the principles of progressive disruptive innovations, every single day.
                    </motion.p>
                </div>
            </div>

            <motion.h2
                className={`text-3xl md:text-4xl font-bold text-center mt-30 ${darkMode === 'dark' ? 'text-blue-500' : 'text-orange-600'}`}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Our Presence
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-6 w-[90%] mx-auto">
                {[
                    { img: "https://jooinn.com/images/india-gate-3.jpg", name: "India", link:"https://in.waysaheadglobal.com"},
                    { img: "https://media.gettyimages.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?b=1&s=170667a&w=0&k=20&c=dxNscVwCBbqBEs6FiG2RTfUx5Htl8gUpF65mMmZgZko=", name: "UAE", link:"/" },
                    { img: "https://th.bing.com/th/id/OIP.xCb8_qw1TfwdrwVv0V-neQHaEK?rs=1&pid=ImgDetMain", name: "Australia" , link:"https://au.waysaheadglobal.com"},
                    { img: "https://www.waysaheadglobal.com/assets/images/saudi.png", name: "KSA", link:"/" },
                    { img: "https://www.waysaheadglobal.com/assets/images/Singapore.jpg", name: "Singapore", link:"https://sg.waysaheadglobal.com" }
                ].map((place, index) => (
                    <motion.div
                        key={index}
                        className="text-center"
                        initial={{ opacity: 0, scale:0.8 }}
                        whileInView={{ opacity: 1, scale:1 }}
                        transition={{ duration: 1 }}
                    >
                        <a href={place.link}>
                            <img
                                src={place.img}
                                alt={place.name}
                                className="w-full sm:h-50 object-cover rounded-lg shadow-md contrast-40 hover:contrast-100"
                                style={{ transition: '0.3s ease-in-out' }}
                            />
                            <div className="mt-2 font-medium text-lg">{place.name}</div>
                        </a>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default About;

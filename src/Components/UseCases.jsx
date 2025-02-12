import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useMode } from '../context/ModeContext';
import { motion } from 'framer-motion';
const UseCases = () => {
    const useCase = [
        {
            id: 1,
            title: "Fintech",
            description: "Meet the Genie who is on a mission to bring an end to the stress of financial inefficiencies",
            img: "https://www.waysaheadglobal.com/assets/images/case-01.jpg",
            link: "https://finigenie.com/",
        },
        {
            id: 2,
            title: "Low Carbon Mobility",
            description: "See how WaysAhead Global’s data analytics for EV infrastructure, is making the future electric",
            img: "https://www.waysaheadglobal.com/assets/images/case-02.jpg",
            link: "https://www.waysaheadglobal.com/low-carbon-mobility2.html",
        },
        {
            id: 3,
            title: "Entertainment",
            description: "Learn how organizations are using our intelligent video analytics to digitally transform their business",
            img: "https://www.waysaheadglobal.com/assets/images/case-03.jpg",
            link: "https://www.waysaheadglobal.com/video-analytics.html",
        },
        {
            id: 4,
            title: "Retail",
            description: "Discover how retail giants use tactics to influence your decisions daily, often unknowingly.",
            img: "https://www.waysaheadglobal.com/assets/images/case-04.jpg",
            link: "https://www.waysaheadglobal.com/video.html",
        },
        {
            id: 5,
            title: "Mercs and Spends",
            description: "Boost your brand visibility and reach a wider audience with our exclusive, customized merchandising store.",
            img: "https://www.waysaheadglobal.com/assets/images/case-05%20(2).jpg",
            link: "https://www.waysaheadglobal.com/contact-us.html",
        },
        {
            id: 6,
            title: "F&B",
            description: "Get immersive; enjoy the 360 experience that is giving the F&B industry, the all new dimension",
            img: "https://www.waysaheadglobal.com/assets/images/case-06.jpg",
            link: "https://www.waysaheadglobal.com/f-b-page.html",
        },
    ];

    const { darkMode, toggleMode } = useMode();

    return (
        <section id="usecase" className="min-h-screen  py-24  p-4 w-full md:w-3/4  mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mt-30 ${darkMode === 'dark' ? 'text-blue-500' : 'text-orange-600'}`}>
                Use Cases
            </h2>


            <Slide
                autoplay={true}
                duration={2000}
                infinite={true}
                slidesToShow={2}
                indicators={true}
                slidesToScroll={0.9}
                className="mt-4"
            >
                {useCase.map((item) => (
                    <div key={item.id} className="flex flex-col items-center justify-center p-4 pb-7 hover:scale-105" style={{transition:"0.3s all ease-in-out"}}>
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full max-w-[500px] h-64 md:h-80 rounded-lg shadow-xl"
                        />
                        <h2 className="text-xl font-bold text-center mt-4">{item.title}</h2>

                        <p className="text-center text-xs mt-2">{item.description}</p>

                        <a href={item.link} className={`absolute bottom-0 ${darkMode === 'dark' ? 'text-blue-500' : 'text-orange-600'} font-semibold text-sm `}>Learn more &rarr;</a>
                    </div>
                ))}
            </Slide>
        </section>
    );
};

export default UseCases;

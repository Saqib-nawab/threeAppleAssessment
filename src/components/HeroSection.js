// src/components/HeroSection.js
import React from 'react';
import Navbar from "./Navbar";

const HeroSection = () => {
    return (
        <div className="relative bg-[#00244E] text-white min-h-screen flex flex-col justify-center items-center pb-0">
            {/* Navbar */}
            <Navbar />
            {/* Header Section */}
            <div className="text-center px-4 sm:px-8">
                <h2 className="text-lg sm:text-2xl font-medium uppercase mb-2">
                    Leading the Charge In EdTech Transformation
                </h2>
                <h1 className="text-3xl sm:text-5xl font-bold mb-4">
                    Empowering Educators, Inspiring Students
                </h1>
                <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 mb-6">
                    We build transformative EdTech solutions to simplify your education management needs, so
                    you can focus on what really matters. Whether it's enrollments, tuition, or daily
                    operations, Three Apples puts control at your fingertips!
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded shadow">
                        Book a Demo ✨
                    </button>
                    <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
                        Get a Quote
                    </button>
                </div>
            </div>

            {/* Image Section */}
            <div className="relative mt-12 w-full ">
                {/* Background Image */}
                <img
                    src={require('../assests/background-lines.png')}
                    alt="Background Lines"
                    className="w-full object-cover absolute bottom-0 left-0 z-0"
                />

                {/* Foreground Image */}
                <img
                    src={require('../assests/people.png')}
                    alt="People"
                    className="relative z-10 mx-auto max-w-screen-md"
                />
            </div>
        </div>
    );
};

export default HeroSection;

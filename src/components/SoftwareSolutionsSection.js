import React from "react";
import { FiYoutube, FiMail, FiSearch, FiUsers } from "react-icons/fi"; // Importing icons
import { FaArrowRight } from "react-icons/fa"; // Explore more arrow

const SoftwareSolutionsSection = () => {
    return (
        <div className="bg-white py-16 px-4">
            {/* Centered Content Container */}
            <div className="max-w-7xl mx-auto relative">
                {/* Images on Left and Right */}
                <div className="hidden lg:block absolute top-16 left-0">
                    <img
                        src={require('../assests/person-phone.png')}
                        alt="Person using phone"
                        className="rounded-lg shadow-lg max-w-xs"
                    />
                </div>
                <div className="hidden lg:block absolute top-16 right-0 py-12">
                    <img
                        src={require('../assests/person-mic.png')}
                        alt="Person at computer"
                        className="rounded-lg shadow-lg max-w-xs"
                    />
                </div>

                {/* Section Header */}
                <div className="text-center mb-12 relative z-10">
                    <h4 className="text-sm uppercase font-medium text-gray-500 mb-2">
                        Solve Complex Business Challenges With
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Bespoke Software and App Solutions
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                        As an EdTech specialty organization, we offer deep-domain expertise in education software
                        development. We understand the unique challenges educators face and tailor our software
                        development services based on their requirements and evolving needs.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 flex items-center gap-2 mx-auto">
                        Explore More <FaArrowRight />
                    </button>
                </div>

                {/* Profiles Section */}
                <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
                    <div className="flex flex-col items-center">
                        <img
                            src={require('../assests//Avatar.png')}
                            alt="Profile 1"
                            className="rounded-full mb-2"
                        />
                        <span className="font-medium text-gray-700">You</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src={require('../assests//Avatar.png')}
                            alt="Profile 2"
                            className="rounded-full mb-2"
                        />
                        <span className="font-medium text-gray-700">Adam</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src={require('../assests//Avatar.png')}
                            alt="Profile 3"
                            className="rounded-full mb-2"
                        />
                        <span className="font-medium text-gray-700">William</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src={require('../assests//Avatar.png')}
                            alt="Profile 4"
                            className="rounded-full mb-2"
                        />
                        <span className="font-medium text-gray-700">Peter</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src={require('../assests//Avatar.png')}
                            alt="Profile 5"
                            className="rounded-full mb-2"
                        />
                        <span className="font-medium text-gray-700">Julia</span>
                    </div>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-12 relative z-10">
                    <div>
                        <FiYoutube className="text-blue-500 text-4xl mx-auto mb-2" />
                        <h4 className="text-lg font-bold text-gray-800">PPC & Youtube Ads</h4>
                        <p className="text-gray-600">
                            Targeted, cost-efficient advertising for instant reach.
                        </p>
                    </div>
                    <div>
                        <FiUsers className="text-blue-500 text-4xl mx-auto mb-2" />
                        <h4 className="text-lg font-bold text-gray-800">Social Media</h4>
                        <p className="text-gray-600">
                            Strategic and highly engaging content for social audiences.
                        </p>
                    </div>
                    <div>
                        <FiSearch className="text-blue-500 text-4xl mx-auto mb-2" />
                        <h4 className="text-lg font-bold text-gray-800">Search Engine Optimization</h4>
                        <p className="text-gray-600">
                            Organically optimized, long-term visibility for business.
                        </p>
                    </div>
                    <div>
                        <FiMail className="text-blue-500 text-4xl mx-auto mb-2" />
                        <h4 className="text-lg font-bold text-gray-800">E-mail Marketing</h4>
                        <p className="text-gray-600">
                            Result-driven communication to nurture and drive opportunities.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-[#00244E] text-white py-12 px-6 rounded-lg relative flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-3xl font-bold mb-4">
                            Take A Bite Into Smarter <span className="text-yellow-400">EdTech Solutions</span>.
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Book a Demo Now! Learn more about how we can help transform your education systems.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <button className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500">
                                Book a Demo ✨
                            </button>
                            <a
                                href="/"
                                className="text-white underline hover:text-yellow-400"
                            >
                                Download E-Brochure
                            </a>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img
                            src={require('../assests/laptop.png')}
                            alt="Dashboard Example"
                            className="rounded-lg shadow-lg mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoftwareSolutionsSection;

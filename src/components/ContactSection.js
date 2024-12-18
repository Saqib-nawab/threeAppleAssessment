import React from "react";
import { FiPhone, FiMail, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const ContactSection = () => {
    return (
        <div className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Section */}
                <div>
                    <h4 className="text-sm uppercase font-medium text-gray-500 mb-2">
                        Interested In Our Products?
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get A Quote</h2>
                    <p className="text-gray-600 mb-6">
                        Get in touch with our sales team for a detailed breakdown of the product.
                    </p>

                    {/* Contact Details */}
                    <div className="flex items-center gap-4 mb-4">
                        <FiPhone className="text-blue-500 text-2xl" />
                        <span className="text-gray-800 font-medium">(817) 810-3785</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <FiMail className="text-blue-500 text-2xl" />
                        <span className="text-gray-800 font-medium">htaylor@hotmail.com</span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6">
                        <FiFacebook className="text-gray-500 hover:text-blue-500 text-xl cursor-pointer" />
                        <FiTwitter className="text-gray-500 hover:text-blue-400 text-xl cursor-pointer" />
                        <FiInstagram className="text-gray-500 hover:text-pink-500 text-xl cursor-pointer" />
                        <FiLinkedin className="text-gray-500 hover:text-blue-600 text-xl cursor-pointer" />
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className="bg-[#00244E] p-8 rounded-lg text-white shadow-lg">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="full-name" className="block text-sm font-medium mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="full-name"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-2 rounded text-gray-800"
                                />
                            </div>
                            <div>
                                <label htmlFor="business-name" className="block text-sm font-medium mb-1">
                                    Business Name
                                </label>
                                <input
                                    type="text"
                                    id="business-name"
                                    placeholder="Business Name"
                                    className="w-full px-4 py-2 rounded text-gray-800"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="yourmail@email.com"
                                    className="w-full px-4 py-2 rounded text-gray-800"
                                />
                            </div>
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium mb-1">
                                    Service
                                </label>
                                <select
                                    id="service"
                                    className="w-full px-4 py-2 rounded text-gray-800"
                                >
                                    <option>Choose a service</option>
                                    <option>Consultation</option>
                                    <option>Technical Support</option>
                                    <option>Sales Inquiry</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-1">
                                How can we help?
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Enter your message here"
                                className="w-full px-4 py-2 rounded text-gray-800"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white font-bold py-3 rounded hover:bg-orange-600"
                        >
                            Send my message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;

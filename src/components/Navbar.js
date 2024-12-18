// src/components/Navbar.js
import React from "react";

const Navbar = () => {
    return (
        <nav className="w-full bg-transparent absolute top-0 left-0 z-20">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                {/* Logo */}
                <div>
                    <img
                        src={require('../assests/logo.png')}
                        alt="logo"
                        className="h-12 w-auto"
                    />
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-8 text-white text-sm font-medium">
                    <li className="hover:text-gray-300 cursor-pointer">Home</li>
                    <li className="hover:text-gray-300 cursor-pointer">About Us</li>
                    <li className="hover:text-gray-300 cursor-pointer">SIS</li>
                    <li className="hover:text-gray-300 cursor-pointer">Digital Services</li>
                    <li className="hover:text-gray-300 cursor-pointer">Portfolio</li>
                    <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
                </ul>

                {/* Request a Demo Button */}
                <div>
                    <button className="hidden md:block bg-white text-blue-900 px-5 py-2 rounded-full font-medium hover:bg-gray-200">
                        Request a Demo
                    </button>
                </div>

                {/* Mobile Menu Placeholder */}
                <div className="md:hidden text-white text-2xl cursor-pointer">
                    ☰
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

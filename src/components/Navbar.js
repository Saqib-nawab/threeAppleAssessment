import React from "react";

const Navbar = () => {
    return (
        <nav className="max-w-6xl w-[90%] bg-white fixed top-4 left-0 right-0 mx-auto z-20 shadow-md rounded-full px-6 py-3">
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
                <ul className="hidden md:flex space-x-8 text-gray-700 text-sm font-medium">
                    <li className="hover:text-gray-500 cursor-pointer">Home</li>
                    <li className="hover:text-gray-500 cursor-pointer">About Us</li>
                    <li className="hover:text-gray-500 cursor-pointer">SIS</li>
                    <li className="hover:text-gray-500 cursor-pointer">Digital Services</li>
                    <li className="hover:text-gray-500 cursor-pointer">Portfolio</li>
                    <li className="hover:text-gray-500 cursor-pointer">Contact Us</li>
                </ul>

                {/* Request a Demo Button */}
                <div>
                    <button className="hidden md:block bg-blue-800 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700">
                        Request a Demo
                    </button>
                </div>

                {/* Mobile Menu Placeholder */}
                <div className="md:hidden text-gray-700 text-2xl cursor-pointer">
                    ☰
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

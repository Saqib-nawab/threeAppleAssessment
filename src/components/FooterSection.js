import React from "react";
import { FiTwitter, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

const FooterSection = () => {
    return (
        <div>
            {/* Top CTA Section with Gradient */}
            <div className="bg-gradient-to-b from-[#175ff1] to-[#00244E] text-white">
                <div className="text-center py-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Ready to transform your school management?
                    </h2>
                    <div className="flex justify-center items-center gap-4">
                        <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
                            Contact Sales
                        </button>
                        <a
                            href="/"
                            className="text-blue-300 underline hover:text-blue-500 font-medium"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-white text-gray-800 py-8">
                <div className="max-w-6xl mx-auto text-center px-4">
                    <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter</h3>
                    <div className="flex justify-center items-center gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="📧 Input your email"
                            className="flex-1 px-4 py-2 rounded border border-gray-300"
                        />
                        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-12 px-4">
                    {/* Column 1 */}
                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>About Us</li>
                            <li>Portfolio</li>
                            <li>Blogs</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div>
                        <h4 className="font-bold mb-4">Ed Tech</h4>
                        <ul className="space-y-2">
                            <li>Students Information System</li>
                            <li>K12 School App</li>
                            <li>Day Care Montessori Software</li>
                            <li>Students Online Portal</li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div>
                        <h4 className="font-bold mb-4">Website</h4>
                        <ul className="space-y-2">
                            <li>Website Development</li>
                            <li>Website Revamp</li>
                            <li>UI/UX Design</li>
                            <li>E-Commerce Solutions</li>
                            <li>Content Writing</li>
                        </ul>
                    </div>
                    {/* Column 4 */}
                    <div>
                        <h4 className="font-bold mb-4">Bespoke Solutions</h4>
                        <ul className="space-y-2">
                            <li>CRM</li>
                            <li>Inventory Software</li>
                            <li>Mobile Application</li>
                            <li>Web Application</li>
                            <li>Custom Solutions</li>
                        </ul>
                    </div>
                    {/* Column 5 */}
                    <div>
                        <h4 className="font-bold mb-4">Digital Services</h4>
                        <ul className="space-y-2">
                            <li>Students Enrollment Leads</li>
                            <li>Graphic Designing</li>
                            <li>Content Creation</li>
                            <li>Social Media Management</li>
                            <li>SEO</li>
                        </ul>
                    </div>
                    {/* Column 6 */}
                    <div>
                        <h4 className="font-bold mb-4">Marketing Services</h4>
                        <ul className="space-y-2">
                            <li>YouTube Ads</li>
                            <li>PPC Ads</li>
                            <li>Meta Ads</li>
                            <li>E-mail Marketing</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-200 py-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                    {/* Language Selector */}
                    <div className="mb-4 md:mb-0">
                        <select
                            className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none"
                            defaultValue="English"
                        >
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                        </select>
                    </div>

                    {/* Privacy Links */}
                    <div className="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2024 Brand, Inc. · <a href="/" className="hover:text-gray-600">Privacy</a> ·{" "}
                        <a href="/" className="hover:text-gray-600">Terms</a> ·{" "}
                        <a href="/" className="hover:text-gray-600">Sitemap</a>
                    </div>

                    {/* Social Media */}
                    <div className="flex gap-4">
                        <FiTwitter className="text-gray-400 hover:text-blue-400 text-xl cursor-pointer" />
                        <FiFacebook className="text-gray-400 hover:text-blue-500 text-xl cursor-pointer" />
                        <FiInstagram className="text-gray-400 hover:text-pink-500 text-xl cursor-pointer" />
                        <FiYoutube className="text-gray-400 hover:text-red-500 text-xl cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;

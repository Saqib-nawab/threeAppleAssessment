import React from "react";

const StayInformedSection = () => {
    return (
        <div className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                {/* Section Header */}
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Informed</h2>
                <p className="text-gray-600 mb-8">
                    Stay updated on the latest education industry news, trends, and evolving landscape.
                </p>

                {/* Article Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Article 1 */}
                    <div className="bg-gray-50 rounded-lg shadow overflow-hidden">
                        {/* Image Placeholder */}
                        <div className="w-full h-48 bg-gray-300">
                            <img
                                src={require('../assests/info1.png')}
                                alt="Article"
                                className="w-full h-48 object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <span className="text-sm text-yellow-500 font-medium">Do consectetur</span>
                            <h3 className="text-lg font-bold text-gray-800 mt-2 mb-3">
                                Aliqua Irure Tempor Lorem Occaecat Volup
                            </h3>
                            <div className="text-gray-500 text-sm flex justify-between">
                                <span>Dec 24, 2022</span>
                                <span className="bg-gray-200 rounded-full px-3 py-1">5 mins read</span>
                            </div>
                        </div>
                    </div>

                    {/* Article 2 */}
                    <div className="bg-gray-50 rounded-lg shadow overflow-hidden">
                        {/* Image Placeholder */}
                        <div className="w-full h-48 bg-gray-300">
                            <img
                                src={require('../assests/info2.png')}
                                alt="Article"
                                className="w-full h-48 object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <span className="text-sm text-yellow-500 font-medium">Consequat labore</span>
                            <h3 className="text-lg font-bold text-gray-800 mt-2 mb-3">
                                Commodo Deserunt Ipsum Occaecat Qui
                            </h3>
                            <div className="text-gray-500 text-sm flex justify-between">
                                <span>Dec 12, 2022</span>
                                <span className="bg-gray-200 rounded-full px-3 py-1">10 mins read</span>
                            </div>
                        </div>
                    </div>

                    {/* Article 3 */}
                    <div className="bg-gray-50 rounded-lg shadow overflow-hidden">
                        {/* Image Placeholder */}
                        <div className="w-full h-48 bg-gray-300">
                            <img
                                src={require('../assests/info2.png')}
                                alt="Article"
                                className="w-full h-48 object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <span className="text-sm text-yellow-500 font-medium">Laboris nulla</span>
                            <h3 className="text-lg font-bold text-gray-800 mt-2 mb-3">
                                Deserunt Cccaecat Qui Amet Tempor Dolore
                            </h3>
                            <div className="text-gray-500 text-sm flex justify-between">
                                <span>Nov 20, 2022</span>
                                <span className="bg-gray-200 rounded-full px-3 py-1">5 mins read</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="mt-8">
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 font-medium flex items-center gap-2 mx-auto">
                        Read More Articles →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StayInformedSection;

import React from "react";

const EducationSolutionsSection = () => {
    return (
        <div className="bg-white py-16 px-4">
            {/* Section Header */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h4 className="text-sm uppercase font-medium text-gray-500 mb-2">
                    Partners in Education Success
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Transforming Education Through <br />
                    <span className="text-black">Digital Transformation</span>
                </h2>
                <p className="text-gray-600">
                    Our solutions are designed to end your stress, so you focus on things that matter.
                </p>
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* K12 School App - Full Width */}
                <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row bg-gray-50 rounded-lg shadow p-6 items-center gap-6">
                    <div className="flex-1">
                        <h4 className="text-sm uppercase font-medium text-gray-500 mb-1">
                            Streamline and Enhance Management With
                        </h4>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">K12 School App</h3>
                        <p className="text-gray-600 mb-4">
                            Three Apples K12 Education Software is an all-in-one solution designed for school
                            administrators, students, teachers, and parents that transforms school operations
                            into a single-point access system.
                        </p>
                        <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">
                            Learn More →
                        </button>
                    </div>
                    <div>
                        <img
                            src={require('../assests/curly.png')}
                            alt="K12 School App"
                            className="rounded-lg"
                        />
                    </div>
                </div>

                {/* Student Information System */}
                <div className="bg-gray-50 rounded-lg shadow p-6">
                    <h4 className="text-sm uppercase font-medium text-gray-500 mb-1">
                        Boost Administrative Efficiency With
                    </h4>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Student Information System</h3>
                    <p className="text-gray-600 mb-4">
                        Three Apples Student Information System (SIS) software is a cloud-backed, US-integrated
                        platform equipped with a comprehensive toolkit of features.
                    </p>
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">
                        Learn More →
                    </button>
                    <img
                        src={require('../assests/glasses.png')}
                        alt="Student Information System"
                        className="rounded-lg mt-4"
                    />
                </div>

                {/* Students Online Portal */}
                <div className="bg-gray-50 rounded-lg shadow p-6">
                    <h4 className="text-sm uppercase font-medium text-gray-500 mb-1">
                        Advance Communication and Accessibility With
                    </h4>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Students Online Portal</h3>
                    <p className="text-gray-600 mb-4">
                        Three Apples Students Portal offers a centralized hub for students to effortlessly
                        access services and educational information needed to your institute.
                    </p>
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">
                        Learn More →
                    </button>
                    <img
                        src={require('../assests/glasses.png')}
                        alt="Students Online Portal"
                        className="rounded-lg mt-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default EducationSolutionsSection;

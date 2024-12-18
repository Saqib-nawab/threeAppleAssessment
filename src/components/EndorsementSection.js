import React from "react";

const EndorsementSection = () => {
    return (
        <div className="bg-white py-12 px-4">
            {/* Endorsed Across Canada */}
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                    Endorsed Across Canada
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto mb-6">
                    We’re a trusted partner for many of Canada’s top educational institutions,
                    delivering premium services across a range of domains.
                </p>

                {/* Logos Section */}
                <div className="flex flex-wrap justify-center gap-6 items-center">
                    <img src={require('../assests/logo-peerless.png')} alt="Logo 1" />
                    <img src={require('../assests/logo-royalcanadian.png')} alt="Logo 2" />
                    <img src={require('../assests/logo-sensco.png')} alt="Logo 3" />
                    <img src={require('../assests/logo-sensco.png')} alt="Logo 4" />
                    <img src={require('../assests/logo-abm.png')} alt="Logo 5" />
                    <img src={require('../assests/logo-aga.png')} alt="Logo 6" />
                </div>
            </div>

            {/* Text and Image Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Text Content */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        We Help You Succeed Through Personalized EdTech Solutions that Everyone Loves!
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Leading the forefront of EdTech innovation, Three Apples empowers educators
                        to navigate productivity challenges, dismantle data silos, and enhance
                        management efficiency. Our systems are all experience-engineered with a
                        special focus on user-friendliness, cross-compatibility, and scalability,
                        so you always stay on top of your business without compromising on time or budget.
                    </p>
                    <button className="bg-yellow-400 text-black px-6 py-2 rounded font-medium hover:bg-yellow-500">
                        Learn More →
                    </button>
                </div>

                {/* Image Placeholder */}
                <div className="flex justify-center">
                    <img
                        src={require('../assests/laptop-talk.png')}
                        alt="Dummy"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default EndorsementSection;

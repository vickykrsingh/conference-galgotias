import React from 'react';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 gap-8">
        {/* Card 1: Experienced Speakers */}
        <div className="p-4 bg-primary text-white hover:bg-secondary hover:text-white duration-300 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <img 
            src="/experienced-speaker.jpg" 
            alt="Experienced Speakers" 
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-2xl font-semibold mb-4">Experienced Speakers</h3>
            <p>Learn from industry experts with decades of experience.</p>
          </div>
        </div>

        {/* Card 2: Networking Opportunities */}
        <div className="p-4 bg-primary text-white hover:bg-secondary hover:text-white duration-300 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <img 
            src="/network-opportunity.jpg" 
            alt="Networking Opportunities" 
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-2xl font-semibold mb-4">Networking Opportunities</h3>
            <p>Meet with professionals and grow your network.</p>
          </div>
        </div>

        {/* Card 3: Innovative Workshops */}
        <div className="p-4 bg-primary text-white hover:bg-secondary hover:text-white duration-300 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <img 
            src="/innovative-workshops.jpg" 
            alt="Innovative Workshops" 
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-2xl font-semibold mb-4">Innovative Workshops</h3>
            <p>Engage in hands-on workshops and sessions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

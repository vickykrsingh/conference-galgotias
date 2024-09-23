import React from 'react';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
      <div className="flex justify-center space-x-8">
        <div className="w-1/4 p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Experienced Speakers</h3>
          <p>Learn from industry experts with decades of experience.</p>
        </div>
        <div className="w-1/4 p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Networking Opportunities</h3>
          <p>Meet with professionals and grow your network.</p>
        </div>
        <div className="w-1/4 p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Innovative Workshops</h3>
          <p>Engage in hands-on workshops and sessions.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

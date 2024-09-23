import React from 'react';

const Sponsors = () => {
  const sponsors = [
    { name: 'Sponsor 1', logo: 'sponsors1.jpg' },
    { name: 'Sponsor 2', logo: 'sponsors2.jpg' },
    { name: 'Sponsor 3', logo: 'sponsors3.jpeg' },
  ];

  return (
    <section id="sponsors" className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">Our Sponsors</h2>
      <div className="flex justify-center space-x-8">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="w-1/4 bg-secondary relative rounded-md shadow-lg">
            <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full rounded-md object-cover mx-auto mb-4" />
            <h3 className="text-xl text-secondary font-semibold absolute bottom-1 left-12">{sponsor.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;

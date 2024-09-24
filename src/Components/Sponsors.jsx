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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 relative">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="relative bg-secondary rounded-md shadow-lg overflow-hidden group">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-full h-full rounded-md object-cover mx-auto mb-4"
            />
            <h3 className="absolute top-full left-0 bg-white/80 w-full h-full flex items-center justify-center text-4xl text-secondary font-semibold transition-all duration-500 group-hover:top-0">
              {sponsor.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;

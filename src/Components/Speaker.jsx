import React from 'react';

const Speakers = () => {
  const speakers = [
    {
      name: 'John Doe',
      title: 'CEO, Tech Corp',
      img: 'speaker1.jpg',
    },
    {
      name: 'Jane Smith',
      title: 'CTO, InnovateX',
      img: 'speaker2.avif',
    },
    {
      name: 'Alice Johnson',
      title: 'Professor, AI Research Lab',
      img: 'speaker3.jpg',
    },
  ];

  return (
    <section id="speakers" className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8">Meet Our Speakers</h2>
      <div className="flex justify-center space-x-8">
        {speakers.map((speaker, index) => (
          <div key={index} className="w-1/4 text-center">
            <img src={speaker.img} alt={speaker.name} className="rounded-full w-40 h-40 mx-auto mb-4 object-cover" />
            <h3 className="text-2xl font-semibold">{speaker.name}</h3>
            <p className="text-lg">{speaker.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;

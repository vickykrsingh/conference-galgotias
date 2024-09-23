import React from 'react';

const Gallery = () => {
  const images = [
    'gallery1.jpg',
    'gallery2.jpg',
    'gallery3.jpg',
    'gallery4.jpeg',
    'gallery5.jpeg',
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="p-4">
            <img src={img} alt={`Gallery ${index}`} className="w-full h-52 object-cover rounded-lg shadow-lg" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

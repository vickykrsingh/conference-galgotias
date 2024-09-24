import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_f7vyt4v',
      'template_nd35idu', 
      e.target,
      'gaww4X9AYI0GwyyCg'
    )
    .then((result) => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      console.log(error.text);
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit} className="w-2/3 mx-auto animate-fade-in">
        <div className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 h-32 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button
          type="submit"
          className={`px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105 ${
            isSubmitting ? 'cursor-not-allowed' : ''
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {isSent && <p className="mt-4 text-green-500">Message sent successfully!</p>}
      </form>
    </section>
  );
};

export default Contact;

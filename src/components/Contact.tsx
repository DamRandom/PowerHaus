'use client'; // Directiva para marcar este archivo como un componente del cliente

import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="bg-gray-100 text-gray-900 py-20">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        
        <div className="flex justify-center items-center flex-col mb-8">
          <FaEnvelope className="text-orange-500 text-6xl mb-6" />
          <p className="text-lg max-w-3xl mx-auto">
            Have any questions or comments? Feel free to reach out, and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-left text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="email" className="text-left text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-left text-gray-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows={6}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

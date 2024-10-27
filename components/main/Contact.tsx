import React from 'react';

const ContactForm: React.FC = () => {
  return (

    <div className="relative z-[10]">
    <form className="max-w-lg mx-auto p-8 rounded-lg shadow-lg" action="https://formspree.io/f/xjkvklpr" method="POST">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Contact Us</h2>
      
      <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        required
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <label htmlFor="email" className="block text-sm font-medium text-white">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
      <textarea
        id="message"
        name="message"
        rows={4}
        required
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <button
        type="submit"
        className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit  
      </button>
      
    </form>
    </div>
      );
};

export default ContactForm;

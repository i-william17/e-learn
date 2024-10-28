import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Here you would typically send the email to your backend
    // For demonstration, we will just set success to true
    setSuccess(true);
    setEmail('');
  };

  return (
    <div className="mt-10 mb-10 max-w-full mx-auto py-10 px-6 bg-gray-900 shadow-lg rounded-lg border border-gray-300">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-5">Subscribe to Our Newsletter</h2>
      <p className="text-center text-white mb-5">Stay updated with our latest news and offers.</p>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex flex-col sm:flex-row w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`border rounded-lg py-3 px-4 flex-grow transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          <button
            type="submit"
            className="bg-red-600 text-white py-3 px-6 rounded-lg mt-2 sm:mt-0 sm:ml-2 hover:bg-red-500 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
          >
            Subscribe
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-2">Thank you for subscribing!</p>}
      </form>
      
      <p className="text-center text-gray-500 text-sm mt-5">
        We value your privacy. Your email will never be shared.
      </p>
    </div>
  );
};

export default Newsletter;

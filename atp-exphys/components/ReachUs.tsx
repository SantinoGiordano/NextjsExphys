import React from 'react';

const ReachUs = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Reach Us</h2>
      <div className="space-y-4">
        <a
          href="mailto:Info@ATP-EXphys.com"
          className="block px-4 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors duration-200 text-center"
        >
          Email: Info@ATP-EXphys.com
        </a>
        <a
          href="https://www.instagram.com/move_atp/"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-2 bg-pink-50 text-pink-600 rounded-md hover:bg-pink-100 transition-colors duration-200 text-center"
        >
          Instagram: @move_atp
        </a>
      </div>
    </div>
  );
};

export default ReachUs;
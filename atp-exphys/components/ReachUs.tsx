import React from 'react';

const ReachUs = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">Reach Us</h2>
      <div className="space-y-4">
        <a
          href="mailto:Info@ATP-EXphys.com"
          className="block px-4 py-3 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-md hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors duration-200 text-center"
        >
          Email: Info@ATP-EXphys.com
        </a>
        <a
          href="https://www.instagram.com/move_atp/"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-3 bg-pink-50 dark:bg-pink-900 text-pink-600 dark:text-pink-300 rounded-md hover:bg-pink-100 dark:hover:bg-pink-700 transition-colors duration-200 text-center"
        >
          Instagram: @move_atp
        </a>
      </div>
    </div>
  );
};

export default ReachUs;

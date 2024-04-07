'use client';
import { useState } from 'react';

const Paginator = ({ currentPage, onPageChange, totalPages }) => {

  const handleClick = (page) => {
    onPageChange(page);
  };


  return (
    <div className="flex justify-center items-center mt-8 space-x-4">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`w-8 h-8 flex justify-center items-center 
          ${page === currentPage
              ? 'bg-purple-600 text-white rounded-full px-10'
              : 'bg-gray-300 rounded-full'
            }`}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Paginator;

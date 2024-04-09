'use client';
import { useState } from 'react';

const Paginator = ({ currentPage, onPageChange, onSave, totalPages }) => {

  const handleClick = (page) => {
    if (page === 2 && currentPage === 2) {
      // Si currentPage es 2 y se hace clic en "guardar", ejecuta la función onSave
      onSave(); // Envía la información del formulario al componente Page
    } else {
      onPageChange(page); // De lo contrario, cambia de página como de costumbre
    }
  };


  return (
    <div className="flex justify-center items-center mt-8 space-x-4 mb-20">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`w-8 h-8 flex justify-center items-center 
          ${page === currentPage
              ? 'bg-purple-600 text-white rounded-full px-12'
              : 'bg-gray-300 rounded-full px-12'
            }`}
          onClick={() => handleClick(page)}
        >
          {page == 1 && currentPage == 1 && (
            'volver'
          )}
          {page == 1 && currentPage == 2 && (
            'atrás'
          )}
          {
            page == 2 && currentPage == 1 && (
              'siguiente'
            )
          }
          {
            page == 2 && currentPage == 2 && (
              'guardar'
            )
          }
        </button>
      ))}
    </div>
  );
};

export default Paginator;

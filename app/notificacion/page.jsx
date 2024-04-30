'use client';

import { useEffect, useState } from 'react';
import Footer from './../_components/footer';
import Navbar from './../_components/navbar';
import ModalExternal from './../_components/modal-external';

export default function Page() {
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="bg-gray-200">
      <section className="p-6 w-full h-screen"></section>
      <Footer />
      <ModalExternal isOpen={true} onClose={closeModal} />
    </main>
  );
}

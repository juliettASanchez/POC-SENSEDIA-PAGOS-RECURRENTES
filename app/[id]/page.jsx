'use client';

import Image from 'next/image';
import Footer from '../_components/footer';
import Navbar from '../_components/navbar';
import Paginator from '../_components/paginator';
import Information from '../_components/information';
import Tips from '../_components/tips';
import useSWR from 'swr';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const params = useParams();

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main className="bg-gray-200">
      <section className="p-8 h-screen">
        <Navbar />
        <div className="mt-10">
          <h3 className="text-center text-purple-700 text-lg font-bold">
            Gestor de Pagos Domiciliados
          </h3>
          <div className="my-5 gap-4 grid">
            <p className="font-medium text-base my-2">Servicios</p>
            <div className="flex justify-between">
              <p>Fisioterapia</p>
              <p>$2,500.00</p>
              <button className="text-white rounded-full bg-gray-400 hover:bg-gray-500 px-2">
                Cancelar
              </button>
            </div>

            <div className="flex justify-between">
              <p>Comercio 2</p>
              <p>$1,000.00</p>
              <button className="text-white rounded-full bg-gray-400 hover:bg-gray-500 px-2">
                Cancelar
              </button>
            </div>
            <div className="flex justify-between">
              <p>Comercio 3</p>
              <p>$1,500.000</p>
              <button className="text-white rounded-full bg-gray-400 hover:bg-gray-500 px-2">
                Cancelar
              </button>
            </div>
            <div className="flex justify-between">
              <p>Comercio 4</p>
              <p>$3,000.00</p>
              <button className="text-white rounded-full bg-gray-400 hover:bg-gray-500 px-2">
                Cancelar
              </button>
            </div>
          </div>

          <div className="my-5 gap-4 grid">
            <p className="font-medium text-base my-2">Créditos</p>
            <div className="flex justify-between">
              <p>Banco 1</p>
              <p>$5,000.00</p>
            </div>

            <div className="flex justify-between">
              <p>Fintech</p>
              <p>$$1.500.00</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-10">
          <Link
            className="bg-purple-600 hover:bg-purple-700 px-4 py-1 rounded-full text-white"
            href="/"
          >
            Agregar un pago domiciliado
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

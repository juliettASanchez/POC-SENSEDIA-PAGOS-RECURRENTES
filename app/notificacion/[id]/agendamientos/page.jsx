'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import NavbarTelcel from '../../../_components/navbar-telcel';
import Footer from '../../../_components/footer';

export default function Page() {
  const params = useParams();

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main className="bg-gray-200">
      <section className="p-8 h-screen">
        <NavbarTelcel />
        <div className="mt-10">
          <h3 className="text-center text-blue-700 text-lg font-bold">
            Gestor de Pagos Domiciliados
          </h3>
          <div className="my-5 gap-4 grid">
            <p className="font-medium text-base my-2">Servicios</p>
            <div className="flex justify-between">
              <p className="w-32">Plan amigo</p>
              <p className="w-32"> $2,500.00</p>
              <button className="text-white rounded-full bg-gray-400 hover:bg-gray-500 px-2">
                Cancelar
              </button>
            </div>

            <div className="flex justify-between">
              <p className="w-32">Netflix</p>
              <p className="w-32">$1,500.000</p>
              <button className="text-white rounded-full bg-gray-400 hover:bg-gray-500 px-2">
                Cancelar
              </button>
            </div>
            <div className="flex justify-between">
              <p className="w-32">Internet</p>
              <p className="w-32">$3,000.00</p>
              <button className="text-white rounded-full bg-gray-400 hover:bg-gray-500 px-2">
                Cancelar
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-10">
          <Link
            className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-full text-white"
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

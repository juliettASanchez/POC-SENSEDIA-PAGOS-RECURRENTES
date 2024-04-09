
'use client'

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
  const fetcher = (url) =>
    fetch(url, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }).then((r) => r.json());

  const { data = {}, error, isLoading } = useSWR(`/api/${params.id}`, fetcher);

  if (!data) {
    return <div>Usuario no existe</div>
  }
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main className="bg-gray-200">
      <section className="p-8 h-screen">
        <Navbar />
        <div className='mt-10'>
          <h3 className='text-center text-purple-700 text-lg font-bold'>Gestor de Pagos Domiciliados</h3>
          <div className='my-5 gap-4 grid'>
            <p className='font-medium text-base my-2'>Servicios</p>
            <div className='flex justify-between'>
              <p>Comercio 1</p>
              <p>$1234</p>
              <button className='rounded-full bg-gray-400 px-2'>Cancelar</button>
            </div>

            <div className='flex justify-between'>
              <p>Comercio 1</p>
              <p>$1234</p>
              <button className='rounded-full bg-gray-400 px-2'>Cancelar</button>
            </div>
            <div className='flex justify-between'>
              <p>Comercio 1</p>
              <p>$1234</p>
              <button className='rounded-full bg-gray-400 px-2'>Cancelar</button>
            </div>
            <div className='flex justify-between'>
              <p>Comercio 1</p>
              <p>$1234</p>
              <button className='rounded-full bg-gray-400 px-2'>Cancelar</button>
            </div>
            <div className='flex justify-between'>
              <p>Comercio 1</p>
              <p>$1234</p>
              <button className='rounded-full bg-gray-400 px-2'>Cancelar</button>
            </div>
          </div>

        </div>
        <div className='flex justify-center my-10'>
          <Link className='bg-purple-600 hover:bg-purple-700 px-4 py-1 rounded-full text-white' href="/" >
            Agregar un pago domiciliado
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}


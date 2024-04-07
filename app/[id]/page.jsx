
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
      <section className="p-14 h-screen">
        <Navbar />
        {
          currentPage == 1 && (

            <Information data={data} />
          )
        }
        {
          currentPage == 2 && (

            <Tips data={data} />
          )
        }

        <Paginator currentPage={currentPage} onPageChange={handlePageChange} totalPages={2} />
      </section>
      <Footer />
    </main>
  );
}


'use client';

import { useEffect, useState } from 'react';
import Footer from './_components/footer';
import NavbarTelcel from './_components/navbar-telcel';
import Paginator from './_components/paginator';
import { Calendar } from './_components/calendar';
import Modal from './_components/modal';
import Image from 'next/image';
import Link from 'next/link';

/* window.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
}); */

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [to, setTo] = useState('');
  const [payAmount, setPayAmount] = useState('1,000.00');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [clabe, setClabe] = useState('');
  const [payDay, setPayDay] = useState('01/6/2024');
  const [description, setDescription] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [recurrenceName, setRecurrenceName] = useState('');
  const [recurrenceStart, setRecurrenceStart] = useState('');
  const [recurrenceEnd, setRecurrenceEnd] = useState('');
  const [recurrence, setRecurrence] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pay, setPay] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  /* useEffect(() => {
    window.scrollTo(0, 0);
  }, []); */

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const monthIndex = currentDate.getMonth();
  const day = currentDate.getDate();

  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const formattedDate = `${day} de ${monthNames[monthIndex]} de ${year}`;

  const fetcher = (url) =>
    fetch(url, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }).then((r) => r.json());

  const data = {
    nombre: 'Alba Marina Alvarez Vazquez',
    banco: 'BBVA',
    tipoCuenta: 'Cuenta Ahorros',
    cuenta: '12904338950982',
    comercio: 'Telcel',
    razon: 'Radiomóvil Dipsa',
  };

  const numberOptions = Array.from({ length: 31 }, (_, index) => (
    <option key={index + 1} value={index + 1}>
      {index + 1}
    </option>
  ));

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    /* scrollToTop(); */
  };
  /* const { data = {}, error, isLoading } = useSWR(`/api/${params.id}`, fetcher); */

  if (!data) {
    return <div>Usuario no existe</div>;
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
    /* scrollToTop(); */
  };

  const handleRecurrenceChange = (e) => {
    setRecurrence(e.target.value);
  };

  const handleTentaclesChange = (e) => {
    setTentacles(e.target.value);
  };

  const handleDateSelect = (date) => {
    setPayDay(date);
  };

  const handleDateSelectRecurrenceStart = (date) => {
    setRecurrenceStart(date);
  };
  const handleDateSelectRecurrenceEnd = (date) => {
    setRecurrenceEnd(date);
  };

  const handleSubmit = async () => {
    openModal();
    setPay(true);
    const body = {
      payAmount,
      paymentMethod,
      clabe,
      payDay,
      description,
      recurrence,
      recurrenceName,
      recurrenceStart,
      recurrenceEnd,
    };

    const randomResult = Math.random() < 0.5; // 50% de probabilidad de éxito
    setIsSuccess(randomResult);
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    try {
      const res = await fetch('/api', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          payAmount: payAmount,
          paymentMethod: paymentMethod,
          clabe: clabe,
          description: description,
          recurrence: recurrence,
          recurrenceName: recurrenceName,
          recurrenceStart: recurrenceStart,
          recurrenceEnd: recurrenceEnd,
          receives: 'Laura',
        }),
      });
      if (res) {
        console.log(res);
      } else {
        console.error('error');
      }
    } catch (error) {
      console.error('Error register pay', error);
    }
  };

  const formatDate = (fecha) => {
    const meses = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ];

    const parts = fecha.split('/');
    const day = parseInt(parts[0], 10);
    const monthIndex = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);

    return `${day} de ${meses[monthIndex]} de ${year}`;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="bg-gray-200">
      <section className="p-6 w-full h-screen ">
        <div className="py-20 grid gap-20 items-center justify-center text-center justify-items-center">
          <Image
            src={'/assets/telcel.png'}
            alt="Logo Cecoban"
            width={150}
            height={24}
            className="filter grayscale saturate-0 mt-20"
          />
          <p>Agiliza tus pagos y domicilia tus servicios</p>
        </div>
        <div className="mt-20 flex gap-3 justify-center">
          <Link
            href={'/domiciliacion'}
            className="w-8 h-8 flex justify-center items-center 
          bg-blue-600  text-white rounded-full px-12"
          >
            Domiciliar{' '}
          </Link>
          <button
            className="w-8 h-8 flex justify-center items-center 
          bg-gray-400  text-white rounded-full px-12"
          >
            Cancelar
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Footer from './../_components/footer';
import Navbar from './../_components/navbar';
import ModalExternal from './../_components/modal-external';

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [to, setTo] = useState('');
  const [payAmount, setPayAmount] = useState('1,000.00');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [clabe, setClabe] = useState('');
  const [payDay, setPayDay] = useState('01/10/2022');
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

  const fetcher = (url) =>
    fetch(url, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }).then((r) => r.json());

  const data = {
    nombre: 'Alba Marina Alvarez Vazquez',
    banco: 'BBVA',
    tipoCuenta: 'Cuenta Ahorros',
    cuenta: '12904338950982',
    comercio: 'Servicios de Telefonía',
    razon: 'Telefonía Mexicana S.A. de C.V.',
  };

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

  /* const scrollToTop = () => {
    console.log("me activo")
    window.scrollTo({ top: 0, behavior: "smooth" });
  }; */

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
    console.log('payAmount:', payAmount);
    console.log('paymentMethod:', paymentMethod);
    console.log('clabe:', clabe);
    console.log('payDay:', payDay);
    console.log('description:', description);
    console.log('recurrence:', recurrence);
    console.log('recurrenceName:', recurrenceName);
    console.log('recurrenceStart:', recurrenceStart);
    console.log('recurrenceEnd:', recurrenceEnd);
    console.log(
      'Guardando información del formulario...',
      payAmount,
      paymentMethod,
      clabe,
      payDay,
      description,
      recurrence,
      recurrenceName,
      recurrenceStart,
      recurrenceEnd
    );
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

  console.log(isSuccess);
  /* const handleCreateUser = async (user) => {
    try {
      console.log(Creating ${user.username});
      const res = await fetch(/api, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: user.email,
          name: user.email,
          password: uuid().toString(),
        }),
      });
      if (res.ok) {
        mutate(/api?${filterURI});
        setResetForm(true);
        console.log(Successfully created);
      } else {
        console.error(Failed to block user ${user.id});
        setResetForm(false);
      }
    } catch (error) {
      console.error("Error blocking user", error);
    }
  };
 */
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="bg-gray-200">
      <section className="p-6 w-full h-screen">
        <Navbar />
      </section>
      <Footer />
      <ModalExternal isOpen={true} onClose={closeModal} />
    </main>
  );
}

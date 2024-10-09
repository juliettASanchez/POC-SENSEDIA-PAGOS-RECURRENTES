'use client';

import Footer from '../_components/footer';
import Navbar from '../_components/navbar';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Paginator from '../_components/paginator';
import Modal from '../_components/modal';

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [to, setTo] = useState('');
  const [payAmount, setPayAmount] = useState('1.000,00');
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
    nombre: 'ALBA MARINA ALVAREZ VAZQUEZ',
    banco: 'BBVA',
    tipoCuenta: 'Cuenta Ahorros',
    cuenta: '12904338950982',
    comercio: 'Cuidados de salud',
    razon: 'Cuidados de salud SA',
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
      <section className="p-6">
        <Navbar />
        <div className="mt-10 ">
          <h2 className="text-xl font-bold text-blue-950 mb-3">
            AUTORIZACIÓN DE AGENDAMIENTO
          </h2>
          <p>
            Usted está autorización un agendamineto domiciliado iniciado por
            Cecoban
          </p>
        </div>
        <br />
        {/* FORMULARIO */}

        <form onSubmit={handleSubmit}>
          {currentPage == 1 && (
            <div className="mt-2 mb-4 flex gap-6 flex-wrap">
              <div className="items-center grid gap-6 w-full p-4 bg-white rounded-md drop-shadow-md">
                <div>
                  <label htmlFor="payAmount">Valor máximo a pagar:</label>
                  <div className="relative">
                    <p className="w-full py-2 font-medium px-1 border-b text-blue-700 border-gray-300 focus:outline-none focus:border-indigo-500">
                      MXN {payAmount}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-xl mb-2">Datos del remitente:</p>
                  <p>Para:</p>
                  <p className="text-blue-700 font-medium">{data.nombre}</p>
                  <p className="text-blue-700 font-medium">
                    Banco: {data.banco}
                  </p>
                  <p className="text-blue-700 font-medium">
                    Tipo de cuenta : {data.tipoCuenta}
                  </p>
                </div>
                <div>
                  <label htmlFor="payTo">Para</label>
                  <div>
                    <p className="text-blue-700">Cuenta: {data.cuenta}</p>
                    <p className="text-blue-700">Comercio: {data.comercio}</p>
                    <p className="text-blue-700">Razón social: {data.razon}</p>
                  </div>
                </div>
                <div>
                  <label htmlFor="payTo">RFC:</label>
                  <div>
                    <p className="text-blue-700"> {data.cuenta}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xl mb-2">Datos del pago domiciliado:</p>
                  <label htmlFor="paymentMethod">Frecuencia:</label>
                  <p className="text-blue-700 font-medium">
                    personalizada, 2 veces por mes hasta el 25 de marzo de 2025
                  </p>
                </div>
                <div>
                  <label htmlFor="paymentDescription">
                    Fecha del primer pago:
                  </label>
                  <p className="text-blue-700 font-medium">
                    25 de marzo de 2025
                  </p>
                </div>
                <p>Número de pagos:</p>
                <p className="text-blue-700 font-medium">20</p>
                <p>Nombre de la recurrencia:</p>
                <p className="text-blue-700 font-medium">Pago amigo</p>
                <p>Fuente de pago:</p>
                <p className="text-blue-700 font-medium">
                  Cuenta corriente *****7412
                </p>
                <p>Forma de pago:</p>
                <p className="text-blue-700 font-medium">SPEI</p>
              </div>
            </div>
          )}

          {currentPage == 2 && (
            <div className="my-8 flex gap-8 flex-wrap">
              <p className="w-full font-bold text-lg text-blue-600">
                RECURRENCIA
              </p>
              <div className="items-center grid gap-6 w-full p-4 bg-white rounded-md drop-shadow-md">
                <div>
                  <input
                    type="checkbox"
                    id="paymentCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <label htmlFor="paymentCheckbox" className="text-sm">
                    Agendar pago recurrente
                  </label>
                  {!isChecked && (
                    <p className="text-xs text-center font-extralight my-2">
                      ¡Planifica tus pagos de forma conveniente y sin
                      preocupaciones! Selecciona la opción 'Agendar pago
                      recurrente' para acceder a nuestras herramientas de
                      programación de pagos automáticos. Simplifica tu vida
                      financiera y asegúrate de que tus pagos se realicen
                      puntualmente con esta práctica función.
                    </p>
                  )}
                </div>
              </div>
              {isChecked && (
                <div className="items-center grid gap-6 w-full p-4 bg-white rounded-md drop-shadow-md">
                  <div>
                    <label htmlFor="recurrenceName">
                      Nombre de la recurrencia:
                    </label>
                    <input
                      className="w-full py-2 pr-8 border-b text-blue-700 border-gray-300 focus:outline-none focus:border-indigo-500"
                      type="text"
                      id="recurrenceName"
                      value={recurrenceName}
                      onChange={(e) => setRecurrenceName(e.target.value)}
                      placeholder="Fisioterapia"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="recurrenceStart">Inicia el:</label>
                    <Calendar
                      mode="single"
                      selected={recurrenceStart}
                      onSelect={handleDateSelectRecurrenceStart}
                      initialFocus
                    />
                  </div>
                  <div>
                    <p>Se repite:</p>
                    <select
                      id="recurrenceSelect"
                      name="recurrence"
                      value={recurrence}
                      onChange={handleRecurrenceChange}
                      className="block w-full pl-3 pr-10 py-2 text-gray-400 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="dia">Diario</option>
                      <option value="semana">Semanal</option>
                      <option value="quincena">Quincenal</option>
                      <option value="mes">Mensual</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="recurrenceEnd">Termina el:</label>
                    <Calendar
                      mode="single"
                      selected={recurrenceEnd}
                      onSelect={handleDateSelectRecurrenceEnd}
                      initialFocus
                    />
                  </div>
                  <div>
                    <p className="font-medium text-blue-600 text-xl text-center">
                      IMPORTANTE:
                    </p>
                    <p className="text-xs text-center font-extralight my-2">
                      Las recurrencias programadas solo podrán cancelarse hasta
                      24 horas antes de la fecha seleccionada. Si la cancelación
                      se intenta después de este plazo, el pago se procesará
                      como programado.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </form>

        <Paginator
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onSave={handleSubmit}
          totalPages={2}
        />
      </section>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} isSuccess={isSuccess} />
    </main>
  );
}

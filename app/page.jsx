'use client';

import { useEffect, useState } from 'react';
import Footer from './_components/footer';
import NavbarTelcel from './_components/navbar-telcel';
import Paginator from './_components/paginator';
import { Calendar } from './_components/calendar';
import Modal from './_components/modal';

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
    comercio: 'Telcel Consultoría',
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
      <section className="p-6">
        <NavbarTelcel />
        <div className="mt-10 justify-center grid text-center">
          <h2 className="text-2xl font-bold text-blue-950">
            Plataforma Telcel
          </h2>
          <p className="text-sm font-bold text-blue-950">
            PANEL DE DOMICILACIÓN
          </p>
        </div>
        {/* STEPS */}
        <div className="flex w-full justify-between my-10 relative items-center">
          <div className="grid justify-items-center gap-1 z-10">
            <div
              className={`flex rounded-full justify-center items-center md:w-20 md:h-20 w-10 h-10 bg-blue-600 `}
            >
              <svg
                width="30"
                height="20"
                className="sm:w-40 sm:h-10"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 15.5455V2.45455C1 1.65122 1.65122 1 2.45455 1H15.5455C16.3488 1 17 1.65122 17 2.45455V15.5455C17 16.3488 16.3488 17 15.5455 17H2.45455C1.65122 17 1 16.3488 1 15.5455Z"
                  stroke="#F5F8FD"
                />
                <path
                  d="M11.1819 5.36365H12.6364H14.091"
                  stroke="#F5F8FD"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.1819 11.5455H12.6364H14.091"
                  stroke="#F5F8FD"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.1819 13.7272H12.6364H14.091"
                  stroke="#F5F8FD"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.90894 5.3636H5.36348M5.36348 5.3636H6.81803M5.36348 5.3636V3.90906M5.36348 5.3636V6.81815"
                  stroke="#F5F8FD"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.33545 13.6648L5.36397 12.6363M5.36397 12.6363L6.39249 11.6078M5.36397 12.6363L4.33545 11.6078M5.36397 12.6363L6.39249 13.6648"
                  stroke="#F5F8FD"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="text-blue-600 text-sm font-medium">Domiciliación</p>
          </div>
          <div className="grid justify-items-center gap-1 z-10">
            <div
              className={`flex rounded-full justify-center items-center md:w-20 md:h-20 w-10 h-10 ${
                currentPage === 2
                  ? 'bg-blue-600'
                  : currentPage === 1
                  ? 'bg-blue-400'
                  : ''
              }`}
            >
              <svg
                width="30"
                height="20"
                className="sm:w-40 sm:h-10"
                viewBox="0 0 19 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 17.1818C9.68789 17.1818 9.87157 17.1258 10.0278 17.0209C10.184 16.9161 10.3058 16.767 10.3777 16.5926C10.4496 16.4181 10.4684 16.2262 10.4317 16.041C10.3951 15.8559 10.3046 15.6858 10.1718 15.5523C10.0389 15.4188 9.86962 15.3279 9.68534 15.2911C9.50105 15.2542 9.31004 15.2731 9.13645 15.3454C8.96286 15.4176 8.81449 15.54 8.7101 15.697C8.60572 15.8539 8.55 16.0385 8.55 16.2273C8.55 16.4804 8.65009 16.7232 8.82825 16.9022C9.00641 17.0813 9.24804 17.1818 9.5 17.1818ZM14.25 17.1818C14.4379 17.1818 14.6216 17.1258 14.7778 17.0209C14.934 16.9161 15.0558 16.767 15.1277 16.5926C15.1996 16.4181 15.2184 16.2262 15.1817 16.041C15.1451 15.8559 15.0546 15.6858 14.9218 15.5523C14.7889 15.4188 14.6196 15.3279 14.4353 15.2911C14.2511 15.2542 14.06 15.2731 13.8865 15.3454C13.7129 15.4176 13.5645 15.54 13.4601 15.697C13.3557 15.8539 13.3 16.0385 13.3 16.2273C13.3 16.4804 13.4001 16.7232 13.5782 16.9022C13.7564 17.0813 13.998 17.1818 14.25 17.1818ZM14.25 13.3636C14.4379 13.3636 14.6216 13.3077 14.7778 13.2028C14.934 13.0979 15.0558 12.9488 15.1277 12.7744C15.1996 12.6 15.2184 12.408 15.1817 12.2229C15.1451 12.0377 15.0546 11.8676 14.9218 11.7341C14.7889 11.6006 14.6196 11.5097 14.4353 11.4729C14.2511 11.4361 14.06 11.455 13.8865 11.5272C13.7129 11.5995 13.5645 11.7218 13.4601 11.8788C13.3557 12.0357 13.3 12.2203 13.3 12.4091C13.3 12.6623 13.4001 12.905 13.5782 13.0841C13.7564 13.2631 13.998 13.3636 14.25 13.3636ZM9.5 13.3636C9.68789 13.3636 9.87157 13.3077 10.0278 13.2028C10.184 13.0979 10.3058 12.9488 10.3777 12.7744C10.4496 12.6 10.4684 12.408 10.4317 12.2229C10.3951 12.0377 10.3046 11.8676 10.1718 11.7341C10.0389 11.6006 9.86962 11.5097 9.68534 11.4729C9.50105 11.4361 9.31004 11.455 9.13645 11.5272C8.96286 11.5995 8.81449 11.7218 8.7101 11.8788C8.60572 12.0357 8.55 12.2203 8.55 12.4091C8.55 12.6623 8.65009 12.905 8.82825 13.0841C9.00641 13.2631 9.24804 13.3636 9.5 13.3636ZM16.15 1.90909H15.2V0.954545C15.2 0.701384 15.0999 0.458592 14.9218 0.27958C14.7436 0.100568 14.502 0 14.25 0C13.998 0 13.7564 0.100568 13.5782 0.27958C13.4001 0.458592 13.3 0.701384 13.3 0.954545V1.90909H5.7V0.954545C5.7 0.701384 5.59991 0.458592 5.42175 0.27958C5.24359 0.100568 5.00196 0 4.75 0C4.49804 0 4.25641 0.100568 4.07825 0.27958C3.90009 0.458592 3.8 0.701384 3.8 0.954545V1.90909H2.85C2.09413 1.90909 1.36922 2.21079 0.834746 2.74783C0.300267 3.28487 0 4.01324 0 4.77273V18.1364C0 18.8958 0.300267 19.6242 0.834746 20.1613C1.36922 20.6983 2.09413 21 2.85 21H16.15C16.9059 21 17.6308 20.6983 18.1653 20.1613C18.6997 19.6242 19 18.8958 19 18.1364V4.77273C19 4.01324 18.6997 3.28487 18.1653 2.74783C17.6308 2.21079 16.9059 1.90909 16.15 1.90909ZM17.1 18.1364C17.1 18.3895 16.9999 18.6323 16.8218 18.8113C16.6436 18.9903 16.402 19.0909 16.15 19.0909H2.85C2.59804 19.0909 2.35641 18.9903 2.17825 18.8113C2.00009 18.6323 1.9 18.3895 1.9 18.1364V9.54545H17.1V18.1364ZM17.1 7.63636H1.9V4.77273C1.9 4.51957 2.00009 4.27677 2.17825 4.09776C2.35641 3.91875 2.59804 3.81818 2.85 3.81818H3.8V4.77273C3.8 5.02589 3.90009 5.26868 4.07825 5.44769C4.25641 5.6267 4.49804 5.72727 4.75 5.72727C5.00196 5.72727 5.24359 5.6267 5.42175 5.44769C5.59991 5.26868 5.7 5.02589 5.7 4.77273V3.81818H13.3V4.77273C13.3 5.02589 13.4001 5.26868 13.5782 5.44769C13.7564 5.6267 13.998 5.72727 14.25 5.72727C14.502 5.72727 14.7436 5.6267 14.9218 5.44769C15.0999 5.26868 15.2 5.02589 15.2 4.77273V3.81818H16.15C16.402 3.81818 16.6436 3.91875 16.8218 4.09776C16.9999 4.27677 17.1 4.51957 17.1 4.77273V7.63636ZM4.75 13.3636C4.93789 13.3636 5.12156 13.3077 5.27779 13.2028C5.43402 13.0979 5.55578 12.9488 5.62769 12.7744C5.69959 12.6 5.7184 12.408 5.68175 12.2229C5.64509 12.0377 5.55461 11.8676 5.42175 11.7341C5.28889 11.6006 5.11962 11.5097 4.93534 11.4729C4.75105 11.4361 4.56004 11.455 4.38645 11.5272C4.21286 11.5995 4.06449 11.7218 3.9601 11.8788C3.85572 12.0357 3.8 12.2203 3.8 12.4091C3.8 12.6623 3.90009 12.905 4.07825 13.0841C4.25641 13.2631 4.49804 13.3636 4.75 13.3636ZM4.75 17.1818C4.93789 17.1818 5.12156 17.1258 5.27779 17.0209C5.43402 16.9161 5.55578 16.767 5.62769 16.5926C5.69959 16.4181 5.7184 16.2262 5.68175 16.041C5.64509 15.8559 5.55461 15.6858 5.42175 15.5523C5.28889 15.4188 5.11962 15.3279 4.93534 15.2911C4.75105 15.2542 4.56004 15.2731 4.38645 15.3454C4.21286 15.4176 4.06449 15.54 3.9601 15.697C3.85572 15.8539 3.8 16.0385 3.8 16.2273C3.8 16.4804 3.90009 16.7232 4.07825 16.9022C4.25641 17.0813 4.49804 17.1818 4.75 17.1818Z"
                  fill="white"
                />
              </svg>
            </div>
            <p
              className={`font-medium  text-sm  ${
                currentPage === 2
                  ? 'text-blue-600 '
                  : currentPage === 1
                  ? 'text-blue-400'
                  : ''
              }`}
            >
              Recurrencia
            </p>
          </div>
          <div className="grid justify-items-center gap-1 z-10">
            <div
              className={`flex rounded-full justify-center items-center md:w-20 md:h-20 w-10 h-10 ${
                pay ? 'bg-blue-600' : 'bg-blue-400'
              }`}
            >
              <svg
                width="30"
                height="20"
                className="sm:w-40 sm:h-10"
                viewBox="0 0 21 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8.8L6.2 14L19.2 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              className={`font-medium  text-sm  ${
                pay ? 'text-blue-600 ' : 'text-blue-400'
              }`}
            >
              Confirmación
            </p>
          </div>
          <div className="absolute left-10 right-10 h-1 bg-blue-400 sm:top-10 top-6"></div>
        </div>

        {/* FORMULARIO */}

        <form onSubmit={handleSubmit}>
          {currentPage == 1 && (
            <div className="my-4 flex gap-6 flex-wrap">
              <p className="w-full font-bold text-lg text-blue-600">
                DOMICILIACIÓN
              </p>
              <div className="items-center grid gap-6 w-full p-4 bg-white rounded-md drop-shadow-md">
                <div>
                  <label htmlFor="payAmount">Valor a máximo a pagar:</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center text-gray-400 pointer-events-none">
                      MXN
                    </span>
                    <input
                      className="w-full py-2 px-10 border-b text-blue-700 border-gray-300 focus:outline-none focus:border-indigo-500"
                      type="number"
                      id="payAmount"
                      value={payAmount}
                      onChange={(e) => setPayAmount(e.target.value)}
                      placeholder="$750,00 - $1.000,00"
                      required
                    />
                  </div>
                </div>
                <div>
                  <p>De:</p>
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
                  <label htmlFor="paymentMethod">Forma de pago:</label>
                  <p className="text-blue-700">Pago domiciliado</p>
                </div>
                <div>
                  <label htmlFor="paymentDescription">Descripción:</label>
                  <input
                    className="w-full py-2 pr-8 border-b text-blue-700 border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="text"
                    id="paymentDescription"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Plan amigo"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="payDay">Fecha de cargo:</label>
                  <p className="text-blue-700 font-medium">
                    {formatDate(payDay)}
                  </p>
                </div>
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
                      Concepto de Domiciliación:
                    </label>
                    <input
                      className="w-full py-2 pr-8 border-b text-blue-700 border-gray-300 focus:outline-none focus:border-indigo-500"
                      type="text"
                      id="recurrenceName"
                      value={recurrenceName}
                      onChange={(e) => setRecurrenceName(e.target.value)}
                      placeholder="Plan amigo"
                      required
                    />
                  </div>

                  <div>
                    <p>Frecuencia:</p>
                    <p className="block w-full pr-10 py-2 text-gray-400 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                      Mensual
                    </p>
                  </div>

                  <div>
                    <label htmlFor="recurrenceStart">Fecha de pago:</label>
                    <div className="flex mt-2">
                      <select>{numberOptions}</select>
                      <p className="ml-3 text-gray-700">de cada mes</p>
                    </div>
                  </div>

                  {/*  <div>
                    <label htmlFor="recurrenceEnd">Fecha de pago:</label>
                    <Calendar
                      mode="single"
                      selected={recurrenceEnd}
                      onSelect={handleDateSelectRecurrenceEnd}
                      initialFocus
                      disabled={(date) =>
                        date < new Date() || date > new Date('2025-04-20')
                      }
                    />
                  </div> */}
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

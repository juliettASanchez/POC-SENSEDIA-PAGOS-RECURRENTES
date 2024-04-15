'use client';

import Footer from '../../_components/footer';
import Navbar from '../../_components/navbar';
import { useState } from 'react';
import PaginatorExternal from '../../_components/paginator-external';
import ModalConfirm from '../../_components/modal-confirm';

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
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
    nombre: 'Alba Marina Alvarez Vazquez',
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
    setIsSuccess(true);
    // Aquí puedes agregar la lógica para manejar el envío del formulario
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
    <main className="bg-slate-50">
      <section className="p-6">
        <Navbar />
        <div className="mt-10 justify-center grid text-center">
          <p className="text-sm font-bold text-blue-950">
            NOTIFICACIÓN DE DOMICILIACIÓN
          </p>
          <p>
            Usted está autorizando un agendamiento domiciliado iniciado por
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
                  <label className="text-xl">Valor máximo a pagar:</label>
                  <div className="relative">
                    <p className="w-full py-2 font-medium px-1 border-b text-blue-700 focus:outline-none focus:border-indigo-500">
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
                <div className="border-b pb-1">
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
                <div>
                  <p>Número de pagos:</p>
                  <p className="text-blue-700 font-medium">20</p>
                </div>
                <div>
                  <p>Nombre de la recurrencia:</p>
                  <p className="text-blue-700 font-medium">Pago amigo</p>
                </div>
                <div>
                  <p>Fuente de pago:</p>
                  <p className="text-blue-700 font-medium">
                    Cuenta corriente *****7412
                  </p>
                </div>
                <div className="pb-4 border-b">
                  <p>Forma de pago:</p>
                  <p className="text-blue-700 font-medium">Pago domiciliado</p>
                </div>
                <p className=" text-xs font-extralight px-3 text-center  ">
                  La confirmación corresponde a la programación del pago y no a
                  su realización efectiva. Para que la transacción sea efectiva,
                  es necesario que disponga del saldo suficiente en su cuenta.
                  Recuerde que puede cancelar el pago hasta un día antes de su
                  fecha programada.
                </p>
              </div>
            </div>
          )}
        </form>

        <PaginatorExternal
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onSave={handleSubmit}
          totalPages={2}
        />
      </section>
      <Footer />
      <ModalConfirm
        isOpen={isModalOpen}
        onClose={closeModal}
        isSuccess={true}
      />
    </main>
  );
}

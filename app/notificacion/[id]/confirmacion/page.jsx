'use client';

import Footer from '../../../_components/footer';
import NavbarExternal from '../../../_components/navbar-external';
import { useState } from 'react';
import PaginatorExternal from '../../../_components/paginator-external';
import ModalConfirm from '../../../_components/modal-confirm';

export default function confirmDomicilation() {
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
        <NavbarExternal />
        <div className="mt-10 justify-center grid text-center">
          <p className="text-sm font-bold text-blue-950">
            NOTIFICACIÓN DE DOMICILIACIÓN
          </p>
        </div>

        <br />
        {/* FORMULARIO */}

        <form onSubmit={handleSubmit}>
          {currentPage == 1 && (
            <>
              <div className="items-center grid gap-6 w-full p-4 bg-white rounded-md drop-shadow-md">
                <p className="text-center font-medium ">
                  Información del Beneficiario
                </p>

                <div className="flex justify-between">
                  <p className="text-lg">Monto a Domiciliar:</p>
                  <p className=" text-blue-700 font-semibold text-lg">
                    $299.00
                  </p>
                </div>

                <div class="grid grid-cols-2 gap-4 ">
                  <p>Nombre:</p>
                  <p class="text-left text-blue-700 font-medium">Telcel</p>
                </div>

                <div class="grid grid-cols-2 gap-4 ">
                  <p>N° de cuenta:</p>
                  <p class="text-left text-blue-700 font-medium">7190946738</p>
                </div>

                <div class="grid grid-cols-2 gap-4 ">
                  <p>Referencia de pago:</p>
                  <p class="text-left text-blue-700 font-medium">
                    55 2759 5659
                  </p>
                </div>

                <div class="grid grid-cols-2 gap-4 ">
                  <p>Concepto de pago:</p>
                  <p class="text-left text-blue-700 font-medium">Plan 15 GB</p>
                </div>

                <div class="grid grid-cols-2 gap-4 ">
                  <p>Periodo de cobro:</p>
                  <p class="text-left text-blue-700 font-medium">Mensual</p>
                </div>

                <div class="grid grid-cols-2 gap-4 ">
                  <p>Día de cobro:</p>
                  <p class="text-left text-blue-700 font-medium">15</p>
                </div>

                <p className="text-center font-medium">Tus datos de pago</p>
                <div className="grid grid-cols-2 gap-4 ">
                  <p>Nombre del Beneficiario:</p>
                  <p className="text-left text-blue-700 font-medium">
                    Alba Marina Alvarez Vazquez
                  </p>
                </div>
                <div class="grid grid-cols-2 gap-4 ">
                  <p>Banco:</p>
                  <p className="text-left text-blue-700 font-medium">
                    Banco Azul
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 ">
                  <p>N° de cuenta:</p>
                  <p className="text-left text-blue-700 font-medium">
                    01234984221209
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 ">
                  <p>Tipo de Monto:</p>
                  <p className="text-left text-blue-700 font-medium">Fijo</p>
                </div>
              </div>
            </>
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

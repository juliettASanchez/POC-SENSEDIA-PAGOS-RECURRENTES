import Link from 'next/link';
import { useEffect, useState } from 'react';

const ModalConfirm = ({ isOpen, onClose, isSuccess }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const successTitle = 'Pago domiciliado exitosamente';
  const successDescription =
    'Tu pago ha sido programado con éxito y se procesará según lo programado.';

  const failTitle = 'Pago domiciliado fallido';
  const failDescription =
    'Lamentablemente, tu pago domiciliado no pudo ser programado en este momento. Por favor, revisa los datos ingresados e intenta nuevamente más tarde. ';

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);
  // Función para cerrar el modal
  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  const id = '2k13432';
  return (
    <>
      {/* Fondo oscuro que cubre la pantalla */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* Contenedor del modal */}
          <div className="bg-white p-8 rounded-lg max-w-md w-full m-10 text-center">
            {/* Encabezado del modal */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-blue-900">
                ¡Pago domiciliado exitosamente!
              </h2>

              {/* Botón para cerrar el modal */}
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Contenido del modal */}
            <p className="text-gray-600 font-light mb-6">
              Domiciliación exitosa, será redirigido con el proovedor del
              servicio
            </p>

            {/* Botón para realizar otro pago */}
            <div className="flex gap-2 flex-wrap items-center justify-center">
              <Link
                className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-2 rounded focus:outline-none"
                href={`/notificacion/${id}/agendamientos`}
              >
                Ver pagos programados
              </Link>
              <p className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-2 rounded focus:outline-none">
                Descargar comprobante
              </p>
              <Link
                className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-2 rounded focus:outline-none"
                href={`/`}
              >
                Ir a Telcel
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalConfirm;

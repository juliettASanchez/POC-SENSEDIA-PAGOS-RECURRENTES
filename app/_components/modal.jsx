import Link from 'next/link';
import { useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);

    useEffect(() => {
        setIsModalOpen(isOpen);
    }, [isOpen]);
    // Función para cerrar el modal
    const handleClose = () => {
        setIsModalOpen(false);
        onClose();
    };

    const id = "2k13432"
    return (
        <>
            {/* Fondo oscuro que cubre la pantalla */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    {/* Contenedor del modal */}
                    <div className="bg-white p-8 rounded-lg max-w-md w-full m-10 text-center">
                        {/* Encabezado del modal */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-purple-900">¡Pago agendado exitosamente!</h2>
                            {/* Botón para cerrar el modal */}
                            <button onClick={handleClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {/* Contenido del modal */}
                        <p className="text-gray-600 font-light mb-6">Tu pago ha sido programado con éxito y se procesará según lo programado.</p>
                        {/* Botón para realizar otro pago */}
                        <Link className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded focus:outline-none" href={`/${id}`}>
                            Ver pagos programados
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;

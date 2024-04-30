'use client';

import { EyeClosedIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/notificacion/112309SADSK12/confirmacion'); // redirigir a la página /23 al hacer clic en el botón de login
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="px-4">
        <h1 className="text-center text-2xl font-bold text-blue-600 ">
          Banco Azul
        </h1>
        <p className="text-center text-lg mt-2 mb-10">
          Autentícate para confirmar la domicilación
        </p>
        <div className="relative pt-8">
          <label htmlFor="email">Email:</label>

          <input
            className="w-full py-2 pr-8 border-b bg-gray-100 border-gray-300 focus:outline-none focus:border-indigo-500"
            type="email"
            id="email"
          />
          <div className="absolute bottom-0 mb-3 right-0 flex items-center pointer-events-none">
            <svg
              width="20"
              height="20"
              viewBox="0 0 39 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00914 1.67473H5.00457C2.7929 1.67473 1 3.38432 1 5.49321V9.3117"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.032 1.67473H33.0366C35.2483 1.67473 37.0411 3.38432 37.0411 5.49321V9.3117"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M27.0297 11.2209V15.0394"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.0114 11.2209V15.0394"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.0137 26.4949C13.0137 26.4949 15.016 28.4041 19.0206 28.4041C23.0252 28.4041 25.0274 26.4949 25.0274 26.4949"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.0206 11.2209V20.7672H17.0183"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.00914 36.0411H5.00457C2.7929 36.0411 1 34.3316 1 32.2226V28.4041"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.032 36.0411H33.0366C35.2483 36.0411 37.0411 34.3316 37.0411 32.2226V28.4041"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="relative pt-8">
          <label htmlFor="documentId">Contraseña:</label>
          <input
            className="w-full py-2 pr-8 border-b bg-gray-100 border-gray-300 focus:outline-none focus:border-indigo-500"
            type="text"
            id="nss"
            required
          />
          <div className="absolute bottom-0 mb-3 right-0 flex items-center pointer-events-none">
            <EyeClosedIcon />
          </div>
        </div>

        <p className="text-blue-500 text-sm mt-2 hover:underline py-10">
          Olvidé la contraseña
        </p>
        <button
          className="w-full bg-blue-600 text-white rounded p-2 mt-4 hover:bg-blue-700"
          onClick={handleLogin}
        >
          Login
        </button>
        <div className="flex flex-col items-center mt-6">
          <p className="text-gray-600 mt-2">Ingresa con huella</p>
        </div>
      </div>
    </div>
  );
}

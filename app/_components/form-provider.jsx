'use client';
import { redirect, useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [rfc, setrfc] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log('Datos del formulario:', { email, rfc, password });
    router.push(`/${rfc}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-5 my-10 mx-5">
          <div className="relative">
            <label htmlFor="email">Email:</label>
            <input
              className="w-full py-2 pr-8 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="absolute bottom-0 mb-3 right-0 flex items-center pointer-events-none">
              <svg
                width="20"
                height="15"
                viewBox="0 0 40 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2544 9.30353L19.5088 15.7816L28.7632 9.30353"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 24.1105V5.60178C1 3.55735 2.65733 1.90002 4.70175 1.90002H34.3158C36.3603 1.90002 38.0175 3.55735 38.0175 5.60178V24.1105C38.0175 26.155 36.3603 27.8123 34.3158 27.8123H4.70175C2.65733 27.8123 1 26.155 1 24.1105Z"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div className="relative">
            <label htmlFor="documentId">CURP:/NSS:</label>
            <input
              className="w-full py-2 pr-8 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              id="rfc"
              value={rfc}
              onChange={(e) => setrfc(e.target.value)}
              required
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
          <div className="relative">
            <label htmlFor="password">Contraseña:</label>
            <input
              className="w-full py-2 pr-8 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="absolute bottom-0 mb-3 right-0 flex items-center pointer-events-none">
              <svg
                width="20"
                height="10"
                viewBox="0 0 38 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2091 8.90456C15.2091 12.8282 12.0283 16.0091 8.10456 16.0091C4.18082 16.0091 1 12.8282 1 8.90456C1 4.98082 4.18082 1.8 8.10456 1.8C12.0283 1.8 15.2091 4.98082 15.2091 8.90456ZM15.2091 8.90456H36.5228V14.233"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.4183 8.90457V14.233"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <p className="text-xs text-right">¿Olvidaste la Contraseña?</p>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-2 rounded-full"
          >
            <span>Ingresar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L11.586 11H4a1 1 0 1 1 0-2h7.586l-3.293-3.293a1 1 0 0 1 0-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </form>
      <div className="flex mt-8 justify-center items-center">
        <span className="text-sm">¿Necesitas crear una cuenta?</span>
        <p className="text-xs text-blue-600">{''}Registrate</p>
      </div>
    </>
  );
};

export default LoginForm;

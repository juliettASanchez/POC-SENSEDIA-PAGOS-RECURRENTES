'use client';

import { Popover } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center">
      <Image
        src={'/assets/logo.png'}
        alt="Logo Cecoban"
        width={215}
        height={54}
        className="filter grayscale saturate-0 "
      />
      <div>
        <Popover className="relative">
          <Popover.Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </Popover.Button>

          <Popover.Panel className="absolute z-10 top-0 right-0 mt-12">
            <div className="bg-white shadow-md rounded-md">
              <div>
                {/* Cambiar router.push('/') a redirect('/') */}
                <button
                  onClick={() => router.push('/')}
                  className="block px-10 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          </Popover.Panel>
        </Popover>
      </div>
    </div>
  );
}

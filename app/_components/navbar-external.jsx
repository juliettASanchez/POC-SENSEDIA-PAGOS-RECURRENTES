'use client';

import { Popover } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function NavbarExternal() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src={'/assets/banco.png'}
          alt="Logo Cecoban"
          width={40}
          height={24}
          className="filter grayscale saturate-0 "
        />
        <p className="pl-2 font-semibold">BANCO AZUL</p>
      </div>

      <div>
        <Popover className="relative">
          <Popover.Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 cursor-pointer"
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
        </Popover>
      </div>
    </div>
  );
}

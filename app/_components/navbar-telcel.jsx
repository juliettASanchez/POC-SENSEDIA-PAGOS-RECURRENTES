'use client';

import { Popover } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function NavbarTelcel() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center">
      <Image
        src={'/assets/telcel.png'}
        alt="Logo Cecoban"
        width={150}
        height={24}
        className="filter grayscale saturate-0 "
      />
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

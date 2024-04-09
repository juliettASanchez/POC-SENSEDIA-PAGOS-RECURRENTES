import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-4 mt-auto fixed bottom-0 w-full bg-gray-500 p-4">
      <div className="container mx-auto flex items-center justify-between px-4 ">
        <div className="flex items-center">
          <Image
            src={'/assets/sensedia-logo.png'}
            alt="Logo Cecoban"
            width={90}
            height={25}
            className="filter grayscale saturate-0 "
          />
        </div>
      </div>
    </footer>
  );
}

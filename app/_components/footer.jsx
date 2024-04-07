import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-violet-950 py-4 mt-auto fixed bottom-0 w-full bg-gray-200 p-4">
      <div className="container mx-auto flex items-center justify-between px-4 ">
        <div className="flex items-center">
          <Image
            src={'/assets/sensedia-logo.png'}
            alt="Logo Cecoban"
            width={125}
            height={30}
            className="filter grayscale saturate-0 "
          />
        </div>
      </div>
    </footer>
  );
}

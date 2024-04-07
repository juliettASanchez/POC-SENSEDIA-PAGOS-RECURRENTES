import Image from 'next/image';
import LoginForm from './_components/form-provider';

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center h-screen grid grid-cols-2 gap-4 px-20 relative bg-primary clip-your-needful-style">
        <div className="grid grid-cols-1 gap-8 justify-items-center w-80 mx-auto">
          <Image
            src={'/assets/logo.png'}
            alt="Logo Cecoban"
            width={352}
            height={92}
            className="filter grayscale saturate-0 "
          />
          <h2 className="font-semibold text-xl text-center">
            Propuesta de Proof Of Concept (POC)
          </h2>
          <h3 className="font-semibold text-xl bg-white py-3 px-3">
            Información del empleado
          </h3>
        </div>
        <div className="bg-white py-10 px-5 place-self-center rounded-lg drop-shadow-lg">
          <div className="grid gap-5 items-center justify-items-center">
            <Image
              src={'/assets/isologo.png'}
              alt="Logo Cecoban"
              width={50}
              height={50}
              className="filter grayscale saturate-0 "
            />
            <h4 className="font-bold text-xl text-center">LOGIN ACCOUNT</h4>
          </div>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}

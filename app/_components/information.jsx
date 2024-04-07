import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function Information({ data }) {
    const info = {
        profile: {
            picture: '/assets/profile.png',
            name: 'Juliett Alexandra Sanchez Rodriguez',
            birth: '24 mayo 1998',
            docId: 'xxjsasslljk2245',
            email: 'martin@gmail.com',
            phone: '+52 3054392850',
            direction: 'Colima 2437, CDMX 00123',
        },
        information: {
            typeId: 'CURP',
            Entry: 'CDMX',
            days: '21',
            weeks: '1',
            status: 'activo',
        },
    };

    return (
        <>
            <div className=" my-8 flex gap-8">
                <div className="flex items-center w-2/5 p-4 bg-white rounded-md drop-shadow-md">
                    <svg
                        className="pl-1"
                        width="20"
                        height="20"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M33.9533 36.8987H7.04799C5.60074 36.8987 4.53066 35.4699 5.07799 34.1559C7.6117 28.0799 13.5647 24.5991 20.4996 24.5991C27.4366 24.5991 33.3896 28.0799 35.9233 34.1559C36.4706 35.4699 35.4006 36.8987 33.9533 36.8987ZM12.1298 12.2995C12.1298 7.7774 15.8852 4.09983 20.4996 4.09983C25.1161 4.09983 28.8695 7.7774 28.8695 12.2995C28.8695 16.8217 25.1161 20.4993 20.4996 20.4993C15.8852 20.4993 12.1298 16.8217 12.1298 12.2995ZM40.9087 36.1525C39.3877 29.2668 34.6277 24.185 28.3652 21.8788C31.684 19.261 33.6192 15.0279 32.9078 10.393C32.0838 5.01603 27.5165 0.713328 22.0063 0.0860496C14.397 -0.78107 7.9438 5.02024 7.9438 12.2995C7.9438 16.1739 9.77644 19.6259 12.6361 21.8788C6.36946 24.185 1.61362 29.2668 0.0905184 36.1525C-0.462962 38.6554 1.59722 40.9985 4.21088 40.9985H36.7883C39.4041 40.9985 41.4622 38.6554 40.9087 36.1525Z"
                            fill="#6A2CE1"
                        />
                    </svg>

                    <p className="text-purple-700 text-lg font-semibold pl-4">
                        Perfil del trabajador
                    </p>
                </div>
                <div className="flex items-center w-3/5 p-4 bg-white rounded-md drop-shadow-md">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18.45 30.75H22.55V18.45H18.45V30.75ZM20.5 0C9.17375 0 0 9.17375 0 20.5C0 31.8263 9.17375 41 20.5 41C31.8263 41 41 31.8263 41 20.5C41 9.17375 31.8263 0 20.5 0ZM20.5 36.9C11.4595 36.9 4.1 29.5405 4.1 20.5C4.1 11.4595 11.4595 4.1 20.5 4.1C29.5405 4.1 36.9 11.4595 36.9 20.5C36.9 29.5405 29.5405 36.9 20.5 36.9ZM18.45 14.35H22.55V10.25H18.45V14.35Z"
                            fill="#6A2CE1"
                        />
                    </svg>

                    <p className="text-purple-700 text-lg font-semibold pl-4">
                        Información de empleo
                    </p>
                </div>
            </div>
            <div className=" my-8 flex gap-8">
                <div className="flex flex-wrap w-2/5 p-4 bg-gray-100 rounded-md drop-shadow-md">
                    <div className="grid gap-4 w-full">
                        <div className="flex items-center">
                            <div className="w-16 h-16 rounded-full bg-white">
                                <Image
                                    src={info.profile.picture}
                                    width={100}
                                    height={100}
                                    className=""
                                    alt="Imagen perfil"
                                />
                            </div>

                            <p className="font-semibold ml-auto">{data.nombre}</p>
                        </div>

                        <div className="flex bg-white p-3 rounded-sm">
                            <p className="text-gray-400">Nacimiento</p>
                            <p className="font-semibold ml-auto">{info.profile.birth}</p>
                        </div>

                        <div className="flex bg-white p-3 rounded-sm">
                            <p className="text-gray-400">RFC</p>
                            <p className="font-semibold ml-auto">{data.rfc}</p>
                        </div>

                        <div className="flex bg-white p-3 rounded-sm">
                            <p className="text-gray-400">Email</p>
                            <p className="font-semibold ml-auto">{info.profile.email}</p>
                        </div>

                        <div className="flex bg-white p-3 rounded-sm">
                            <p className="text-gray-400">Teléfono</p>
                            <p className="font-semibold ml-auto">{info.profile.phone}</p>
                        </div>

                        <div className="flex bg-white p-3 rounded-sm">
                            <p className="text-gray-400">Dirección</p>
                            <p className="font-semibold ml-auto">{info.profile.direction}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap w-3/5 p-4 bg-gray-100 rounded-md drop-shadow-md">
                    <div className="grid gap-4 w-full">
                        <div className="flex bg-white p-3 rounded-sm items-center">
                            <p className="text-gray-400">Identificación</p>
                            <p className="font-semibold ml-auto">
                                {info.information.typeId}
                            </p>
                        </div>

                        <div className="flex bg-white p-3 rounded-sm items-center">
                            <p className="text-gray-400">Entidad</p>
                            <p className="font-semibold ml-auto">
                                {info.information.Entry}
                            </p>
                        </div>

                        <div className="flex bg-white p-3 rounded-sm items-center">
                            <p className="text-gray-400">Semanas cotizadas</p>
                            <p className="font-semibold ml-auto">
                                {data?.semanasCotizadas?.semanasCotizadas}
                            </p>
                        </div>

                        <div className="flex bg-white p-3 rounded-sm items-center">
                            <p className="text-gray-400">Semanas Reintegradas</p>
                            <p className="font-semibold ml-auto">{data?.semanasCotizadas?.semanasReintegradas}</p>
                        </div>


                        <div className="flex bg-white p-3 rounded-sm items-center">
                            <p className="text-gray-400">Estado</p>
                            <p className="inline-flex bg-purple-600 text-white px-8 py-2 rounded-full ml-auto">
                                {info.information.status}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


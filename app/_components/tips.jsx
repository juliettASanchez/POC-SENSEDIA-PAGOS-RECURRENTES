'use client';

import { useState } from 'react';

function Tips({ data }) {
  const [selectedDate, setSelectedDate] = useState(data.historialLaboral[0]);

  const handleDateClick = (index) => {
    setSelectedDate(data.historialLaboral[index]);
  };

  return (
    <>
      <div className=" my-8 flex gap-8">
        <div className="flex items-center w-full p-4 bg-white rounded-md drop-shadow-md">
          <svg
            width="48"
            height="47"
            viewBox="0 0 48 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.5319 3.00891C43.6701 3.07794 43.8202 3.12787 43.9465 3.21746C44.2006 3.39957 44.3893 3.65659 44.4859 3.95179C44.5335 4.09719 44.535 4.25434 44.5587 4.40561V13.2176C44.5023 13.5906 44.5275 13.7096 44.3076 14.0342C43.9881 14.5056 43.3581 14.7714 42.783 14.6583C42.3952 14.582 42.3283 14.4806 42.0222 14.2559L40.1009 12.357C37.8675 14.5658 35.6401 16.7791 33.3993 18.9806C31.4349 20.8884 28.0603 21.1117 25.8463 19.2993L20.8743 15.2047L6.96889 28.9411L6.92877 28.9866C6.69697 29.1599 6.69697 29.1599 6.43545 29.2862H6.43395C6.05207 29.364 5.94657 29.4301 5.55428 29.3317C4.96882 29.1834 4.51561 28.6606 4.44577 28.0804C4.422 27.8954 4.46212 27.5224 4.44726 27.75C4.49183 26.8835 4.45023 25.995 4.43982 25.1108L4.43834 24.9757C4.43834 24.5777 4.43983 24.1812 4.43834 23.7846C4.43834 23.2368 4.45023 22.6875 4.43091 22.1412C4.43091 22.1412 4.43388 22.197 4.43982 22.2366L4.43685 21.868C4.55573 21.3936 4.84251 21.0147 5.26452 20.6608C9.55146 17.0273 13.2515 12.7153 17.2635 8.74551C19.0912 6.94934 22.283 6.6982 24.3945 8.40479L29.6087 12.6992L35.0279 7.34294L33.1066 5.44396L32.8465 5.09734C32.7173 4.74193 32.64 4.6494 32.6786 4.26167C32.7351 3.69624 33.1645 3.169 33.7262 3.0001C33.8644 2.95898 34.013 2.95751 34.1571 2.93695H43.0728C43.2258 2.96045 43.3789 2.98541 43.5319 3.00891ZM4.54682 27.3446C4.28975 28.0893 4.60625 27.2242 4.60625 27.2242C4.58545 27.2639 4.56613 27.305 4.54682 27.3446ZM4.78605 26.9437L4.60625 27.2242L4.88709 26.8512C4.8544 26.882 4.82023 26.9128 4.78605 26.9437ZM41.1515 9.24192L41.5868 9.67223V5.87427H37.7442L38.1796 6.30459C38.2702 6.42796 38.3832 6.53959 38.453 6.67617C38.6685 7.09327 38.6625 7.60435 38.453 8.0097C38.3832 8.14629 38.2702 8.25791 38.1796 8.38128L30.9817 15.4955C30.3294 16.1255 29.2209 16.1902 28.4972 15.6071C26.4927 13.9563 24.5119 12.2762 22.4836 10.6548C21.598 9.95569 20.2116 10.0012 19.3735 10.8134C15.363 14.7553 11.718 18.9836 7.4548 22.6728L7.40873 22.7125C7.41022 23.1575 7.41022 23.6025 7.4117 24.0475L7.41022 24.3574L19.7331 12.1792C19.9694 12.0059 20.2131 11.8312 20.4984 11.7768C20.9263 11.6931 21.3498 11.8576 21.7347 12.0896C23.7466 13.7463 25.7452 15.4221 27.7721 17.0611C28.7766 17.8644 30.3606 17.813 31.3101 16.8922L39.0503 9.24192L39.4263 8.97167C39.5734 8.92468 39.716 8.85418 39.8691 8.82921C40.2852 8.76459 40.3892 8.84831 40.7755 8.97167C40.9003 9.06126 41.0266 9.15233 41.1515 9.24192ZM4.44577 22.2807C4.47698 22.4437 4.47252 22.4452 4.53641 22.5979C4.53641 22.5979 4.42497 22.1294 4.44577 22.2807Z"
              fill="#6A2CE1"
            />
            <path
              d="M31.1844 38.1859V23.4984C31.1963 23.1812 31.2914 22.8698 31.4816 22.6187C31.5381 22.5438 31.5559 22.5291 31.6198 22.4601L36.0779 18.0538C36.3216 17.8306 36.6232 17.6749 36.9472 17.6352C37.1567 17.6102 37.2073 17.6264 37.2741 17.6308C37.9369 17.7204 38.5016 18.2286 38.5982 18.8778C38.613 18.9718 38.6116 18.9967 38.6145 19.0922V35.2484C38.5714 36.4102 36.9561 37.2239 36.0392 36.2472C35.8386 36.0328 35.7034 35.7566 35.6603 35.4673C35.6454 35.3703 35.6469 35.3454 35.6425 35.2484V22.6378L34.1564 24.1065V38.1859H43.0726C43.2257 38.2094 43.3787 38.233 43.5318 38.2579C43.8944 38.44 44.0266 38.4533 44.2748 38.7911C44.7251 39.4035 44.5884 40.3803 43.9464 40.8429C43.6046 41.0867 43.4738 41.0603 43.0726 41.1234H4.43734C4.03611 41.0603 3.90533 41.0867 3.56503 40.8429C2.83242 40.3171 2.77595 39.0319 3.56503 38.4665C3.90533 38.2212 4.03611 38.2476 4.43734 38.1859V33.7797C4.44774 33.3905 4.60228 33.0233 4.87274 32.7413L9.33083 28.3351C9.63546 28.0501 10.0352 27.8959 10.4602 27.9062C10.7455 27.9297 10.8302 27.9634 10.9863 28.0325C11.4603 28.2396 11.8051 28.7081 11.8601 29.2192C11.8675 29.2883 11.866 29.3059 11.8675 29.3734V35.2484C11.8378 36.3823 10.3057 37.1564 9.3873 36.3397C9.07969 36.0651 8.90731 35.6612 8.89542 35.2484V32.919L7.40939 34.3878V38.1859H13.3535V24.9672C13.3565 24.8747 13.355 24.8512 13.3684 24.7586C13.4144 24.4473 13.5705 24.1609 13.7889 23.9288L18.247 19.5226C18.3154 19.4594 18.3317 19.4418 18.4075 19.386C18.6884 19.1774 19.0361 19.0834 19.4031 19.0966C20.0852 19.1686 20.6722 19.687 20.7688 20.3524C20.7822 20.4449 20.7807 20.4684 20.7837 20.5609V35.2484C20.7688 35.6362 20.7138 35.7508 20.6024 35.952C20.1655 36.7422 18.9231 36.9551 18.247 36.2868C17.9721 36.0151 17.825 35.6362 17.8116 35.2484V24.1065L16.3256 25.5753V38.1859H22.2697V20.5609C22.2816 20.2363 22.3113 20.1835 22.3648 20.044C22.5892 19.455 23.2089 19.0658 23.8805 19.0981C24.1287 19.1275 24.365 19.2082 24.579 19.339L29.0371 22.2765C29.4368 22.5599 29.682 23.0005 29.6998 23.4984V35.2484C29.6582 36.3808 28.1781 37.1608 27.2405 36.3573C26.973 36.1297 26.7932 35.8036 26.7426 35.457C26.7293 35.3645 26.7307 35.341 26.7278 35.2484V24.2842L25.2417 23.306V38.1859H31.1844Z"
              fill="#6A2CE1"
            />
          </svg>
          <p className="text-blue-700 text-lg font-semibold pl-4">
            Historial laboral
          </p>
        </div>
      </div>
      <div className=" my-8 flex gap-8">
        <div className="flex flex-wrap w-2/5 p-4 bg-gray-100 rounded-md drop-shadow-md">
          <div className="grid gap-4 w-full">
            <div className="flex justify-between gap-1">
              {data &&
                data?.historialLaboral.map((item, index) => {
                  return (
                    <p
                      key={index}
                      onClick={() => handleDateClick(index)}
                      className={`font-semibold inline-flex items-center px-4 py-2 rounded-full ${
                        selectedDate === item
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-400 text-white'
                      }`}
                    >
                      {item.fechaAlta}
                    </p>
                  );
                })}
            </div>

            <div className="flex bg-white p-3 rounded-sm">
              <p className="text-gray-400">Pago Bruto</p>
              <p className="font-semibold ml-auto">
                {selectedDate?.salarioBaseCotizacion}
              </p>
            </div>

            <div className="flex bg-white p-3 rounded-sm">
              <p className="text-gray-400">Impuestos</p>
              <p className="font-semibold ml-auto">-</p>
            </div>

            <div className="flex bg-white p-3 rounded-sm">
              <p className="text-gray-400">Deducciones</p>
              <p className="font-semibold ml-auto">-</p>
            </div>

            <div className="flex bg-white p-3 rounded-sm">
              <p className="text-gray-400">Pago neto</p>
              <p className="font-semibold ml-auto">
                {selectedDate?.salarioBaseCotizacion}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap w-3/5 p-4 bg-gray-100 rounded-md drop-shadow-md">
          <div className="grid gap-4 w-full">
            <div className="flex bg-white p-3 rounded-sm items-center">
              <p className="text-gray-400">Fecha alta</p>
              <p className="inline-flex bg-blue-600 text-white px-8 py-2 rounded-full ml-auto">
                {selectedDate?.fechaAlta}
              </p>
            </div>
            <div className="flex bg-white p-3 rounded-sm items-center">
              <p className="text-gray-400">Fecha baja</p>
              <p className="inline-flex bg-blue-600 text-white px-8 py-2 rounded-full ml-auto">
                {selectedDate?.fechaBaja}
              </p>
            </div>

            <div className="flex bg-white p-3 rounded-sm items-center">
              <p className="text-gray-400">Entidad Federativa</p>
              <p className="font-semibold ml-auto">
                {selectedDate?.entidadFederativa}
              </p>
            </div>

            <div className="flex bg-white p-3 rounded-sm items-center">
              <p className="text-gray-400">Nombre Patron</p>
              <p className="font-semibold ml-auto text-end">
                {selectedDate?.nombrePatron}
              </p>
            </div>

            <div className="flex bg-white p-3 rounded-sm items-center">
              <p className="text-gray-400">Registro Patronal</p>
              <p className="font-semibold ml-auto">
                {selectedDate?.registroPatronal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tips;

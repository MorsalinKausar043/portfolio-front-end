import React from 'react';
import { BsBoxArrowInLeft } from "react-icons/bs";
import { useRouter } from 'next/router';

const Error = () => {
    const router = useRouter();
  return (
    <>
      <main className="w-full min-h-screen flex justify-center items-center select-none">
        <section className="flex justify-center items-center flex-col md:flex-row">
          {/* left site  */}
          <div className="x border-b-2 md:border-r-2 md:border-b-0 border-gray-600 text-gray-600 mr-4">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-semibold font-mono">
              404
            </h1>
          </div>
          {/* right site  */}
          <div className="mt-3 md:mt-0 flex flex-col justify-center items-center md:items-start">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">
              Sorry, This Page {"Isn't"} Available!
            </h2>
            <button onClick={() => router.back()} className="flex justify-center items-center flex-row bg-blue-500 dark:bg-gray-500 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 dark:border-gray-300 hover:border-blue-800 rounded">
              <span className="text-xl font-semibold">
                <BsBoxArrowInLeft />
              </span>
              <span className="ml-2">Go Back</span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Error

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Buttons from '../fetures/button/Buttons';
import Title from "../title/Title";
import offerData from './api';

const Offer = () => {
  return (
    <>
      <main className="flex flex-col mt-20">
        {/* title  */}
        <section>
          <div>
            <h1 className="text-gray-500 text-2xl md:text-3xl font-bold mb-3">
              What I Can Do
            </h1>
          </div>
          {/* import Title  */}
          <div className="relative">
            <Title data="Service Offers" />
          </div>
        </section>
        {/* data  */}
        <section className="w-full h-auto bg-stone-100 dark:bg-transparent px-4 py-10 md:px-6 rounded-md dark:border-2 border-gray-100 shadow-md mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* left site  */}
          <div className="flex flex-col items-center justify-center">
            {/* all data division  */}
            {offerData.map(({ id, title, body }) => (
              <>
                <div key={id} className="text-center w-full md:w-96 mt-4">
                  <h2 className="text-lg font-bold mb-3 text-gray-600 dark:text-gray-500">
                    {title}
                  </h2>
                  <p className="text-md font-semibold text-gray-500">{body}</p>
                </div>
              </>
            ))}
            {/* button  */}
            <Link href="works">
              <a>
                <Buttons data="See my works" />
              </a>
            </Link>
          </div>
          {/* right site  */}
          <div className="hidden md:flex justify-center items-center relative cursor-pointer">
            {/* main image  */}
            <div className="relative">
              <Image
                src="https://i.ibb.co/hdSzCbv/illustration-01-003c594-1.png"
                alt="offer_image"
                width="300"
                height="300"
                className="z-30"
              />

              {/* second image  */}
              <div className="absolute left-0 top-0">
                <div className="relative">
                  <Image
                    src="https://i.ibb.co/8B2pCgF/illustration-02-7569b61.png"
                    alt="offer_image"
                    width="300"
                    height="300"
                    className="z-20"
                  />
                  {/* second image absolute pic  */}
                  <div className="absolute left-0 bottom-24">
                    <div className="relative">
                      <Image
                        src="https://i.ibb.co/2y3ncXK/illustration-03-9f50b6c.png"
                        alt="offer_image"
                        width="300"
                        height="300"
                        className="z-10"
                      />
                      {/* nasted computer site icon  */}
                      <div className="absolute -left-28 -top-5">
                        <Image
                          src="https://i.ibb.co/j8PcQCq/illustration-06-9b5625f-1.png"
                          alt="offer_image"
                          width="350"
                          height="350"
                          className="z-0"
                        />
                      </div>
                      {/* second nested comuter site icon  */}
                      <div className="absolute -right-28 -top-5">
                        <Image
                          src="https://i.ibb.co/5KT37qd/illustration-07-ecbfddb-1.png"
                          alt="offer_image"
                          width="350"
                          height="350"
                          className="z-0"
                        />
                      </div>
                      {/* third nested comuter site icon  */}
                      <div className="absolute -right-28 -top-24">
                        <Image
                          src="https://i.ibb.co/QvCPw5k/illustration-05-461c827.png"
                          alt="offer_image"
                          width="350"
                          height="350"
                          className="z-0"
                        />
                      </div>
                      {/* fourth nested comuter site icon  */}
                      <div className="absolute -left-28 -top-24">
                        <Image
                          src="https://i.ibb.co/SP92W2x/illustration-04-19646a2.png"
                          alt="offer_image"
                          width="350"
                          height="350"
                          className="z-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Offer

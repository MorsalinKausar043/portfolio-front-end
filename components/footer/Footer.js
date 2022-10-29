import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
      <>
        <main className="flex flex-col">
          <section className="flex flex-col md:flex-row justify-center md:justify-between item-center">
            {/* logo site  */}
            <Link href="/">
              <div className="cursor-pointer select-none text-center md:text-start">
                <h2 className="text-xl md:text-2xl hover:scale-105 transition-all dark:text-gray-500 text-sky-400 font-bold tracking-wider">{`<MK/>`}</h2>
              </div>
            </Link>
            {/* link site  */}
            <div className="flex flex-row justify-center items-center my-3 md:my-0">
              {/* works button  */}
              <Link href="/works">
                <div className="rounded-sm flex justify-center items-center cursor-pointer text-gray-600 px-3 py-1 hover:bg-orange-500 hover:text-slate-50 hover:scale-105 hover:-rotate-3 transition-transform ">
                  <span className=" font-semibold text-sm">Works</span>
                </div>
              </Link>
              {/* resume button  */}
              <Link href="/resume">
                <div className="flex rounded-sm justify-center items-center cursor-pointer text-gray-600 px-3 py-1 hover:bg-orange-500 hover:text-slate-50 hover:scale-105 hover:-rotate-3 transition-transform ">
                  <span className="font-semibold text-sm">Resume</span>
                </div>
              </Link>
              {/* blog button  */}
              <Link href="/blog">
                <div className="flex justify-center rounded-sm items-center cursor-pointer text-gray-600 px-3 py-1 hover:bg-orange-500 hover:text-slate-50 hover:scale-105 hover:-rotate-3 transition-transform ">
                  <span className=" font-semibold text-sm">Shelf</span>
                </div>
              </Link>
            </div>
            {/* creator story  */}
            <div className="flex justify-center items-center">
              <p className="text-sm font-semibold text-gray-500">
                © 2022 Morsalin. ALL RIGHTS RESERVED
              </p>
            </div>
          </section>
          {/* border  */}
          <section className="my-4 w-full grid grid-cols-4">
            <div className="w-auto h-3 bg-red-400 rounded-bl-md"></div>
            <div className="w-auto h-3 bg-yellow-500"></div>
            <div className="w-auto h-3 bg-sky-400"></div>
            <div className="w-auto h-3 bg-stone-400 rounded-br-md"></div>
          </section>
        </main>
      </>
    );
};

export default Footer;
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AiFillFile,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { MdEmail, MdLibraryBooks } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { Slide } from "react-reveal";

const MobMenu = () => {
  const linkData = [
    { id: "1", title: "EMAIL", to: "/", icon: MdEmail },
    { id: "2", title: "RESUME", to: "/resume", icon: FaUserTie },
    { id: "3", title: "WORKS", to: "/works", icon: AiFillFile },
    { id: "4", title: "SHELF", to: "/blog", icon: MdLibraryBooks },
  ];
  return (
    <>
      <Slide left>
        <section className="flex">
          <div className="w-full relative h-screen px-5 pt-5 pb-8 bg-white dark:bg-gray-800 shadow-lg border border-1 border-gray-200 dark:border-transparent">
            {/* login and signup button  */}
            <div className="flex flex-col justify-center items-start pb-3">
              {/* logo site  */}
              <Link href="/">
                <div className="cursor-pointer select-none mb-4">
                  <h2 className="text-xl md:text-2xl hover:scale-105 transition-all dark:text-gray-500 text-sky-400 font-bold tracking-wider">{`<MK/>`}</h2>
                </div>
              </Link>
              {/* email  */}
              {linkData.map((data, id) => (
                <>
                  <Link key={id} href={data.to}>
                    <div className=" rounded-sm mt-1 flex justify-center items-center cursor-pointer text-gray-600 px-3 py-1 hover:bg-orange-500 hover:text-slate-50 hover:scale-105 hover:-rotate-3 transition-transform ">
                      <span className="text-xl">
                        <data.icon />
                      </span>
                      <span className="ml-2 font-semibold text-md">
                        {data.title}
                      </span>
                    </div>
                  </Link>
                </>
              ))}
              {/* resume button  */}
            </div>
            {/* main navigation  */}

            {/* login and signup button  */}
            <section className="flex justify-start items-center flex-row mt-2 absolute left-4 bottom-4">
              <a
                className="text-2xl hover:scale-105 transition-transform text-gray-600 cursor-pointer"
                href="https://www.linkedin.com/in/morsalin-kausar/"
                target="blank"
              >
                <AiFillLinkedin />
              </a>
              <a
                className="mx-3 text-2xl hover:scale-105 transition-transform text-gray-600 cursor-pointer"
                href="https://github.com/MorsalinKausar043"
                target="blank"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://twitter.com/MorsalinKausar"
                target="blank"
                className="text-2xl hover:scale-105 transition-transform text-gray-600 cursor-pointer"
              >
                <AiFillTwitterCircle />
              </a>
            </section>
          </div>
        </section>
      </Slide>
    </>
  );
};

export default MobMenu;

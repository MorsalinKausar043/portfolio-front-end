import Link from "next/link";
import React from "react";
import Buttons from "../fetures/button/Buttons";
import Title from "../title/Title";
import frontEndApi, { backEndApi, otherToolsApi } from "./api";

const Resumes = () => {
  return (
    <>
      <main className="w-full flex flex-col justify-center items-start">
        <section className="relative">
          {/* title  */}
          <Title data="Tech I Use" />
        </section>
        {/* front end skill section  */}
        <section className="my-5 p-5 bg-gray-100 dark:bg-transparent dark:border-2 border-b-gray-400 w-full h-auto">
          {/* title  */}
          <div className="mb-4 md:mb-6">
            <h1 className="text-md font-semibold text-gray-600 italic">
              These are, but not limited to, the tech I use for building
              client-side applications
            </h1>
          </div>
          {/* icon  */}
          <div className="flex justify-start items-center flex-wrap">
            {/* html5 icon  */}
            {frontEndApi.map((val) => (
              <>
                <div key={val.id} className="cursor-pointer mr-5 mt-2 md:mt-0">
                  <val.icon
                    className={`text-5xl text-gray-600  hover:scale-110 transition-all ${val.cls}`}
                  />
                </div>
              </>
            ))}
          </div>
        </section>
        {/* backend end skill section  */}
        <section className="my-5 p-5 bg-gray-100 dark:bg-transparent dark:border-2 border-b-gray-400 w-full h-auto">
          {/* title  */}
          <div className="mb-4 md:mb-6">
            <h1 className="text-md font-semibold text-gray-600 italic">
              These are, but not limited to, the tech I use for building fast
              and scalable backend applications
            </h1>
          </div>
          {/* icon  */}
          <div className="flex justify-start items-center flex-wrap">
            {/* html5 icon  */}
            {backEndApi.map((val) => (
              <>
                <div key={val.id} className="cursor-pointer mr-5 mt-2 md:mt-0">
                  <val.icon
                    className={`text-5xl text-gray-600  hover:scale-110 transition-all ${val.cls}`}
                  />
                </div>
              </>
            ))}
          </div>
        </section>
        {/* other tools section  */}
        <section className="my-5 p-5 bg-gray-100 dark:bg-transparent dark:border-2 border-b-gray-400 w-full h-auto">
          {/* title  */}
          <div className="mb-4 md:mb-6">
            <h1 className="text-md font-semibold text-gray-600 italic">
              Others...and more!
            </h1>
          </div>
          {/* icon  */}
          <div className="flex justify-start items-center flex-wrap">
            {/* html5 icon  */}
            {otherToolsApi.map((val) => (
              <>
                <div key={val.id} className="cursor-pointer mr-5 mt-2 md:mt-0">
                  <val.icon
                    className={`text-5xl text-gray-600  hover:scale-110 transition-all ${val.cls}`}
                  />
                </div>
              </>
            ))}
          </div>
        </section>
        {/* experience section  */}
        <section>
          <Title data="Experience" />
        </section>
        {/* work data  */}
        <section className="w-full md:w-96 h-auto px-2 md:px-4 py-4 mt-4 md:shadow-md  rounded-md flex flex-col justify-center md:flex-row md:justify-between items-center">
          {/* left site  */}
          <div className="text-gray-600">
            <h1 className="text-md font-semibold">Worked remotely (A team)</h1>
            <p className="text-md font-semibold">Full Stack Developer</p>
          </div>
          {/* right site  */}
          <div className="px-3 py-2  bg-gray-500 text-white text-md font-bold rounded-sm mt-2 md:mt-0">
            <span>Since 2021</span>
          </div>
        </section>
        {/* add resume button and shelf page link  */}
        <section className="w-full h-auto px-2 md:px-4 py-2 mt-4 md:shadow-md  rounded-md flex flex-col md:flex-row justify-around items-center">
          {/* left site  */}
          <div className="px-3 py-2 bg-gray-500 text-white text-md font-bold rounded-sm">
            <a
              href="https://drive.google.com/uc?export=download&id=1N5IwqraUjxz6iGNZzp0Ys7ePjotPvOLn"
              target="blacnk"
              className="text-md font-semibold"
            >
              Download My Resume
            </a>
          </div>
          {/* right site  */}
          <div className="px-8 py-12 flex flex-col md:flex-row justify-center md:justify-between items-center shadow-lg rounded-md">
            <p className="w-72 text-lg font-bold text-gray-600">
              I ocationally write tech articles too! See them 👉
            </p>
            <Link href="/blog">
              <a>
                <Buttons data="MY SHELF" />
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Resumes;

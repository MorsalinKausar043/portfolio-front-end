import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";
import Bounce from "react-reveal/Bounce";
import style from "../../styles/Home.module.css";
const Header = () => {
  return (
    <>
      {/* <Fade right> */}
      <section className="w-full h-auto overflow-hidden flex flex-col justify-center items-center md:flex-row md:justify-between py-4 pl-6">
        {/* left part */}
        <div className="w-full h-auto md:w-2/5 flex flex-col justify-center md:justify-start items-center md:items-start md:pl-10 lg:24">
          {/* tooltip */}
          <Bounce collapse delay={1000}>
            <div className="mb-6 relative">
              <h2>
                <span className="p-3 bg-gray-800 text-gray-300 text-lg rounded-md shadow-lg">{`It's me`}</span>
              </h2>
            </div>
          </Bounce>
          {/* title  */}
          <div className="flex flex-col justify-center items-center md:items-start md:justify-start">
            <h1 className="flex flex-col">
              <span
                className={`inline-block text-4xl md:text-5xl font-bold text-gray-600 ${style.typing}`}
              >
                Morsalin
                {/* animation set  */}
                <div
                  className={`${style.animation} ${style.animate} bg-white dark:bg-zinc-800`}
                ></div>
              </span>
              <span
                className={`inline-block ml-6 md:ml-10 text-4xl md:text-5xl mt-2 font-bold text-gray-600 ${style.typing2}`}
              >
                Kausar
                <div
                  className={`${style.animation} ${style.animate2} bg-white dark:bg-zinc-800`}
                ></div>
              </span>
            </h1>
            <Fade bottom collapse delay={4000}>
              <p className="text-xl font-bold font-sans mt-2 text-gray-600 ml-3">
                Web Developer
              </p>
            </Fade>
            <Fade bottom collapse delay={5000}>
              <p className="w-full md:w-80 mt-6 font-mono font-semibold text-gray-600">
                Morsalin. Software Developer from Dhaka, Bangladesh with
                rock-solid experience in building complex applications with
                modern technologies.
              </p>
            </Fade>
          </div>
          {/* button  */}
          <Bounce delay={5500}>
            <div
              className={`flex justify-center items-center mt-8 md:mt-6 px-6 py-6 bg-red-300 rounded-full`}
            >
              <div className="px-5 py-5 bg-red-500 rounded-full  ">
                <button className=" text-gray-100 font-light text-md flex flex-col font-mono">
                  <span>{`let's`}</span>
                  <span className="inline-block ml-4">talk</span>
                </button>
              </div>
            </div>
          </Bounce>
        </div>
        {/* right part  */}
        <div className="w-full h-auto md:w-3/5 mt-12 md:mt-0 flex justify-center items-center cursor-pointer">
          <div className="w-full h-56 md:h-72 lg:h-96 relative dark:animate-pulse">
            <Image
              src="https://i.ibb.co/bXLsPMg/6840478.png"
              alt="hero_aria_image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>
      {/* </Fade> */}
    </>
  );
};

export default Header;

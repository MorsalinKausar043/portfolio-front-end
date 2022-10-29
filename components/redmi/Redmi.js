import Image from "next/image";
import React from "react";
import Title from "../title/Title";
import { IoCreateOutline } from "react-icons/io5";
import { FaUsers, FaLeaf, FaChessKnight } from "react-icons/fa";
import Link from "next/link";

const Redmi = () => {
  return (
    <>
      <main className="w-full auto my-20 md:my-32 flex justify-center items-center">
        <section className=" bg-gray-100 dark:bg-transparent w-full md:w-6/7 lg:w-4/6 shadow-lg rounded-md p-4">
          <article>
            {/* top site  */}
            <div className="w-full flex flex-col md:flex-row justify-center md:justify-start items-start">
              {/* left site  */}
              <div className="relative w-full h-96 md:w-96">
                <Image
                  src="https://i.ibb.co/1JZ7tFT/f4a3b6c0-f912-44f2-a605-cc25d734f54c.jpg"
                  alt="Redmi_Image"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              {/* right site  */}
              <div className="ml-0 md:ml-4 lg:ml-8 mt-4 md:mt-8 flex flex-col justify-start items-start w-full md:w-auto">
                {/* bulding part  ----------------------------------------------*/}
                <div className="flex flex-row justify-start items-center">
                  <span className="text-lg font-bold text-gray-600">
                    <IoCreateOutline />
                  </span>
                  <span className="ml-1 text-md font-semibold text-gray-600">
                    Building:
                  </span>
                  <Link href="https://social-app-b5baf.web.app/">
                    <a
                      target="blank"
                      className="ml-2 text-md font-semibold text-gray-600 underline"
                    >
                      Facebook-Clone
                    </a>
                  </Link>
                </div>
                {/* Scaling part  ----------------------------------------------*/}
                <div className="flex flex-row justify-start items-center my-2">
                  <span className="text-lg font-bold text-gray-600">
                    <FaUsers />
                  </span>
                  <span className="ml-1 text-md font-semibold text-gray-600">
                    Scaling:
                  </span>
                  <Link href="https://udemy-clone-phi.vercel.app/">
                    <a
                      target="blank"
                      className="ml-2 text-md font-semibold text-gray-600 underline"
                    >
                      Udemy-Clone
                    </a>
                  </Link>
                </div>
                {/* Learning part  ----------------------------------------------*/}
                <div className="flex flex-row justify-start items-center my-2">
                  <span className="text-lg font-bold text-gray-600">
                    <FaLeaf />
                  </span>
                  <span className="ml-1 text-md font-semibold text-gray-600">
                    Learning:
                  </span>
                  <span className="ml-2 text-md font-semibold text-gray-600">
                    Web3
                  </span>
                </div>
                {/* play chesskning part  ----------------------------------------------*/}
                <div className="flex flex-row justify-start items-center my-2">
                  <span className="text-lg font-bold text-gray-600">
                    <FaChessKnight />
                  </span>
                  <span className="ml-1 text-md font-semibold text-gray-600">
                    Play chess at leisure and play Cricket
                  </span>
                </div>
                {/* Fun Fact part  ----------------------------------------------*/}
                <div className="flex flex-row justify-start items-center my-2">
                  <span className="text-md font-bold text-gray-600">
                    Fun Fact:
                  </span>
                  <span className="ml-2 text-md text-gray-600">
                    {" "}
                    Sometimes I sing when I am alone 😁
                  </span>
                </div>
              </div>
            </div>
            {/* bottom site  */}
            <div className="mt-8 md:mt-12">
              {/* title  */}
              <div className="relative">
                <Title data="READMI" />
              </div>
              {/* write cover letter  */}
              <div>
                <p className="text-md font-sans font-semibold text-gray-600">
                  Full Stack Developer || ReactJS & NextJS & NodeJS
                  Developer
                </p>
                <p className="text-md font-sans font-semibold text-gray-600 my-2">
                  Hi there! <br /> I am Morsalin. Looking for the right
                  opportunity to work in an environment that will help me move
                  forward as a full-stack developer and constantly inspire me to
                  learn and do new things.
                </p>
                <p className="text-md font-sans font-semibold text-gray-600 pb-3">
                  I am very flexible with the ability to work different shifts
                  and weekends when necessary and I can adapt to different types
                  of work environments easily. I have a pleasant and friendly
                  personality with the ability to work as a team or independent.
                </p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Redmi;

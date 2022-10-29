import React from "react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import Works from "../components/works/Project";
import { BsTelegram, BsInstagram } from "react-icons/bs";
import Redmi from "../components/redmi/Redmi";
import Offer from "../components/offer/Offer";

const Home = () => {
  return (
    <>
      <Layout title={"Morsalin Kausar"}>
        {/* hero area  */}
        <main className="w-full h-auto overflow-x-hidden">
          {/* hero area  */}
          <Header />
          {/* Offer file  */}
          <Offer/>
          {/* redmi file  */}
          <Redmi/>
          {/* works  */}
          <section className="mt-10 flex flex-col">
            {/* home works title  */}
            <div className="mb-4">
              <h1 className="text-4xl font-bold text-gray-600">My Works</h1>
              <p className="mt-2 font-semibold text-lg text-gray-600">
                Some Of My Projects
              </p>
            </div>
            <Works />
          </section>
          {/* imain page contact footer  */}
          <section className="pt-20 flex flex-col justify-center items-center">
            <h1 className="text-lg mb-6 font-bold text-gray-500">
              Stay Connected
            </h1>
            <span className="text-md font-semibold mb-5 text-gray-500">
              Jamalpur, Dhaka, Bangladesh
            </span>
            <span className=" text-lg md:text-xl font-bold text-gray-500">
              morsalinkausar043@gmail.com
            </span>
            {/* icon  */}
            <div className="mt-6 flex justify-center items-center flex-row">
              <a
                className="text-2xl md:text-3xl text-gray-600 cursor-pointer"
                href="https://t.me/Morsalin2002"
                target="blank"
              >
                <BsTelegram />
              </a>
              <a
                href="https://www.instagram.com/morsalin_kausar043/"
                target="blank"
                className="text-2xl md:text-3xl ml-5 text-gray-600 cursor-pointer"
              >
                <BsInstagram />
              </a>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Home;

import React from "react";
import Link from "next/link";
import Buttons from "../fetures/button/Buttons";
import Title from "../title/Title";
import ProjectData from "./Projects";
import ProjectApi from "./api/Api";

const Project = () => {
  return (
    <>
      <main className="w-full h-auto flex flex-col justify-center items-start">
        <section className="relative">
          {/* title  */}
          <Title data="Web Applications" />
        </section>
        {/* works section  */}
        <section className="my-2 p-5 bg-stone-50 dark:bg-transparent w-full h-auto flex flex-wrap flex-col md:flex-row items-center gap-4">
          {/* data  */}
          {ProjectApi.map((data, id) => (
            <>
              <ProjectData key={id} {...data} />
            </>
          ))}
        </section>

        {/* add resume button and shelf page link  */}
        <section className="w-full h-auto px-2 md:px-4 py-2 mt-4 md:shadow-md  rounded-md flex flex-col md:flex-row justify-start items-center">
          {/* main site  */}
          <div className="px-8 py-12 flex flex-col md:flex-row justify-center md:justify-between items-center shadow-lg rounded-md">
            <p className="w-72 text-lg font-bold text-gray-600">
              I ocationally write tech articles too! See them 👉
            </p>
            <Link href="/resume">
              <a>
                <Buttons data="MY RESUME" />
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Project;

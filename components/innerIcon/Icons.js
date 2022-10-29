import React from 'react';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Icons = () => {
    return (
      <>
        <section className="flex justify-center items-center flex-col">
          <a
            className="text-2xl hover:scale-105 transition-transform text-gray-600 cursor-pointer"
            href="https://www.linkedin.com/in/morsalin-kausar/"
            target="blank"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="my-4 text-2xl hover:scale-105 transition-transform text-gray-600 cursor-pointer"
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
      </>
    );
};

export default Icons;
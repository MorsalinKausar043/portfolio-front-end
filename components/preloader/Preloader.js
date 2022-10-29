import Image from "next/image";
import React from "react";

const Preloader = () => {
  return (
    <>
      <main className="w-screen h-screen bg-slate-50 flex justify-center items-center">
        <div className="flex justify-center items-center">
          <Image
            src="https://i.ibb.co/9ZhR2QP/loading.gif"
            alt="preloader_Image"
            width={200}
            height={200}
          />
        </div>
      </main>
    </>
  );
};

export default Preloader;

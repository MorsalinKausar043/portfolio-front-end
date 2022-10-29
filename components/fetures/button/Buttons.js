import React, { useState } from 'react';

const Buttons = ({data}) => {
    const [fullWidth,setFullWidth] = useState(false);
    return (
      <>
        <div
          onMouseEnter={() => setFullWidth(true)}
          onMouseLeave={() => setFullWidth(false)}
          className="mt-8 text-white w-40 h-16 font-bold flex justify-center items-center rounded-full relative"
        >
          <button className="uppercase  text-gray-600 text-lg font-bold z-50 ">
            {data}
          </button>
          <span
            className={`absolute left-0 top-auto bg-red-300 ${
              fullWidth ? "w-full h-full " : "w-16 h-16"
            }   transition-all rounded-full  hover: z-10`}
          ></span>
        </div>
      </>
    );
};

export default Buttons;
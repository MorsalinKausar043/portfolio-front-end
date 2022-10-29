import React from 'react';

const Title = ({data}) => {
    return (
      <div>
        <h1 className="text-xl md:text-2xl font-bold mb-8 text-gray-500 relative">
          {data}
        </h1>
        {/* title underline  */}
        <div className="flex absolute left-0 top-12 justify-start flex-row items-center">
          <div className="w-1 p-1 h-1 bg-orange-600 rounded-full"></div>
          <div className="w-32 h-1 bg-orange-600 rounded-tr-md rounded-br-md grow"></div>
        </div>
      </div>
    );
};

export default Title;
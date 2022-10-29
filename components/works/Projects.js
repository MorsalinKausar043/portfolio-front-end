import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const Projects = ({title,image,tag,url}) => {
  // set hover state
  const [hoverData, setHoverData] = useState(false);
  // typhography data
  const typhographyData = [
    "NextJs",
    "TailwindCSS",
    "NodeJs",
    "MongoDB",
    "FirebaseAuth",
  ];
  return (
    <>
      <Link href={url}>
        <a
          target="blank"
          onMouseEnter={() => setHoverData(true)}
          onMouseLeave={() => setHoverData(false)}
        >
          <div className="w-96 h-56 rounded overflow-hidden shadow-lg relative">
            {/* image  */}
            <div className="w-full h-full relative">
              <Image
                layout="fill"
                width="100%"
                height="100%"
                src={image}
                alt="Sunset in the mountains"
              />
            </div>
            {/* data  */}
            <div
              className={`w-full h-auto px-6 py-4 bg-gray-500 absolute left-0 ${
                hoverData ? "bottom-0" : "-bottom-56"
              } transition-all opacity-90`}
            >
              {/* title  */}
              <div className="px-6 pt-2 pb-4">
                <h2 className="text-lg font-bold md:text-xl text-gray-200">
                  {title}
                </h2>
              </div>
              <div className="px-6 pb-2">
                {tag.map((val, id) => (
                  <>
                    <span
                      key={id}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {val}
                    </span>
                  </>
                ))}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}

export default Projects

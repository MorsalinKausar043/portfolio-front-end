import React, { useState } from "react";
import { MdLibraryBooks, MdEmail, MdCancel } from "react-icons/md";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { AiFillFile, AiOutlineMenuFold } from "react-icons/ai";
import { FaUserTie, FaMoon } from "react-icons/fa";
import Link from "next/link";
import { useTheme } from "next-themes";
import MobMenu from "./Mobile/MobNev";

const Navbar = () => {
  // darknes setup
  const {theme, setTheme} = useTheme();
  // responsive menu bar setup
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <aside className="flex justify-between items-center gap-4 relative">
        {/* mobile icon  */}
        {
          showMenu &&   <div
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
              className="block  md:hidden w-full h-auto overflow-hidden fixed left-0 top-0 z-30"
            > <MobMenu/></div>
        }
        {/* navbar left site  */}
        <div className="flex justify-between items-center w-1/2">
          {/* logo site  */}
          <Link href="/">
            <div className="cursor-pointer select-none">
              <h2 className="text-xl md:text-2xl hover:scale-105 transition-all dark:text-gray-500 text-sky-400 font-bold tracking-wider">{`<MK/>`}</h2>
            </div>
          </Link>
          {/* email site  */}
          <div className="hidden md:flex rounded-sm justify-center items-center cursor-pointer text-gray-600 px-3 py-1 hover:bg-orange-500 hover:text-slate-50 hover:scale-105 hover:-rotate-3 transition-transform ">
            <span className="text-xl">
              <MdEmail />
            </span>
            <span className="ml-2 text-md  font-semibold">
              morsalinkausar043@gmail.com
            </span>
          </div>
          {/* dark button site  */}
          <div className="text-xl md:text-2xl text-gray-600 cursor-pointer hover:scale-105  transition-all">
              {theme === "dark" ? (
                <span>
                  <FaMoon onClick={() => setTheme("light")} />
                </span>
              ) : (
                <span>
                  <BsFillSunFill onClick={() => setTheme("dark")} />
                </span>
              )}
          </div>
        </div>
        {/* nevbar right site  */}
        <div className="flex justify-end items-center w-1/2 select-none">
          {/* works button  */}
          <Link href="/works">
            <div className="hidden rounded-sm md:flex justify-center items-center cursor-pointer text-gray-600 px-3 py-1 hover:bg-orange-500 hover:text-slate-50 hover:scale-105 hover:-rotate-3 transition-transform ">
              <span className="text-xl">
                <AiFillFile />
              </span>
              <span className="ml-2 font-semibold text-md">Works</span>
            </div>
          </Link>
          {/* resume button  */}
          <Link href="/resume">
            <div className="hidden md:flex rounded-sm justify-center items-center cursor-pointer text-gray-600 px-3 py-1 hover:bg-orange-500 hover:text-slate-50 hover:scale-105 hover:-rotate-3 transition-transform ">
              <span className="text-xl">
                <FaUserTie />
              </span>
              <span className="ml-2 font-semibold text-md">Resume</span>
            </div>
          </Link>
          {/* blog button  */}
          <Link href="/blog">
            <div className="hidden md:flex justify-center rounded-sm items-center cursor-pointer text-gray-600 px-3 py-1 hover:bg-orange-500 hover:text-slate-50 hover:scale-105 hover:-rotate-3 transition-transform ">
              <span className="text-xl">
                <MdLibraryBooks />
              </span>
              <span className="ml-2 font-semibold text-md">Shelf</span>
            </div>
          </Link>
          {/* menu button  */}
          <div className="flex justify-center items-center md:hidden cursor-pointer z-50">
            {showMenu ? (
              <button onClick={() => setShowMenu(false)} className="text-2xl">
                <MdCancel />
              </button>
            ) : (
              <button onClick={() => setShowMenu(true)} className="text-2xl">
                <AiOutlineMenuFold />
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [currentTab, setCurrentTab] = useState("home");
  const [menu, setMenu] = useState(false);

  useEffect(() => {  
    setMenu(false)

    if (location.pathname === "/") {
      setCurrentTab("home");
    } else if (location.pathname === "/users") {
      setCurrentTab("users");
      } 

  }, [currentTab, location.pathname])
  

  return (
    <nav className='relative w-full md:h-24 h-24 bg-[#0E0F10] flex flex-row justify-between md:items-center items-center md:px-[2%] px-[2%] z-100'>
      <div aria-label="Logo" className="md:w-56 w-64 h-[95%] cursor-pointer select-none flex justify-center items-center">
       <span className="text-4xl text-white font-bold">Logo</span>
      </div>

      <ul
        className={`md:static absolute ${
          menu ? "flex" : "hidden"
        } top-full left-0 md:bg-transparent bg-[#0E0F10] md:w-max w-full md:p-0 p-3 md:flex md:flex-row flex-col md:gap-8 gap-3 items-center list-none`}
      >
        <li
          onClick={() => setCurrentTab("home")}
          className={`select-none md:text-[1.75rem] text-xl ${
            currentTab === "home"
              ? "text-[#F3777E] underline decoration-2 underline-offset-8 font-bold"
              : "text-white font-normal"
          } font-inria cursor-pointer transition-all duration-100 ease-linear hover:brightness-125`}
        >
          <Link to="/">Home</Link>
        </li>

        <li
          onClick={() => setCurrentTab("users")}
          className={`select-none md:text-[1.75rem] text-xl ${
            currentTab === "users"
              ? "text-[#F3777E] underline decoration-2 underline-offset-8 font-bold"
              : "text-white font-normal"
          } font-inria cursor-pointer transition-all duration-100 ease-linear hover:brightness-125`}
        >
          <Link to="/users">Users</Link>
        </li>
        
      </ul>

      <div
        onClick={() => setMenu(!menu)}
        className="absolute md:hidden block right-3 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer"
      >
        {menu ? (
          <IoClose className="h-8 w-8 text-white select-none" />
        ) : (
          <SlMenu className="h-7 w-7 text-white select-none" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

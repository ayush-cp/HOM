import React, { useContext } from "react";
import { IoCall } from "react-icons/io5";

const Hero = () => {
  return (
    <div className='w-full md:min-h-[75vh] h-max md:h-max flex items-center md:pl-[7%] md:py-0 py-[7%] px-[3%] bg-[url("/public/images/heroBg.jpg")] bg-black bg-no-repeat bg-cover bg-center'>
      <div className="md:w-[70%] w-full md:min-w-[700px] h-max flex flex-col gap-5 md:items-start items-center">
        <h1 className="font-inria font-bold md:text-5xl text-2xl md:text-left text-center leading-7 md:leading-14 text-[#F3777E]">
          Company Name
        </h1>
        <p className="font-inria font-light md:text-[1.37rem] text-sm md:text-left text-center text-white w-full md:w-[95%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quos
          aliquid nobis aspernatur, vero hic deleniti! Mollitia pariatur ab
          odio!
        </p>

        <a
          href="tel:+91 999999999"
          className="md:w-3xs w-40 md:h-14 h-10 bg-[#24252A] border-[3px] border-[#F3777E] rounded-2xl font-inria font-bold md:text-2xl text-sm text-white cursor-pointer select-none flex flex-row items-center justify-evenly"
        >
          <IoCall className="md:w-6 w-4 md:h-6 h-4 font-bold text-[#F3777E]" />
          Call for Service
        </a>
      </div>
    </div>
  );
};

export default Hero;

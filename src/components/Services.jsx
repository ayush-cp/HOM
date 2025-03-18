import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import services from "./ServiceList";

const Services = () => {
  const serviceList = services;

  const containerRef = useRef(null);
  const elementRefs = useRef([]);

  const slideServices = (direction) => {
    const scrollContainer = containerRef.current;
    if (scrollContainer) {
      const scrollElementWidth =
        elementRefs.current[0]?.getBoundingClientRect().width || 0; // width to scroll

      if (direction === "left") {
        scrollContainer.scrollLeft -= scrollElementWidth; // scroll left
      } else if (direction === "right") {
        scrollContainer.scrollLeft += scrollElementWidth; // scroll right
      }
    }
  };

  return (
    <div className="w-full h-max bg-gray-700 flex flex-col md:gap-8 gap-4 items-center justify-center md:py-6 py-4">
      <h2 className="md:text-5xl text-3xl font-bold text-[#F3777E]">
        Our Services
      </h2>
      <div className="flex flex-row gap-6 items-center h-max w-max">
        <div
          onClick={() => slideServices("left")}
          aria-label="Scroll Left"
          className="w-12 h-14 bg-gray-400 rounded-lg flex justify-center items-center cursor-pointer hover:bg-gray-500 transition-all duration-100"
        >
          <FaChevronLeft className="md:text-5xl text-4xl text-gray-100" />
        </div>
        <div
          onClick={() => slideServices("right")}
          aria-label="Scroll Right"
          className="w-12 h-14 bg-gray-400 rounded-lg flex justify-center items-center cursor-pointer hover:bg-gray-500 transition-all duration-100"
        >
          <FaChevronRight className="md:text-5xl text-4xl text-gray-100" />
        </div>
      </div>

      <div
        ref={containerRef}
        aria-live="polite"
        className="relative w-full md:h-70 h-max overflow-x-scroll overflow-y-hidden no-scrollbar scroll-smooth flex items-center"
      >
        <div className="relative w-max h-max flex flex-row md:gap-10 gap-4 md:px-4">
          {serviceList.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (elementRefs.current[index] = el)}
              className="md:w-[25vw] w-[70vw] md:h-50 h-40 flex flex-col items-center gap-4 transition-all bg-slate-200 duration-200 ease-linear cursor-pointer hover:scale-105 p-2 rounded-lg border-2"
            >
              <h3 className="font-bold md:text-3xl text-xl text-gray-800">
                {service.name}
              </h3>
              <p className="font-normal md:text-2xl text-lg text-gray-800 text-center">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

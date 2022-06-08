import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* contact */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-sky-500">Hi, my name is</p>
        <h1 className="text-3xl sm:text-7xl font-bold text-[#ccd6f6]">
          Thanaporn Sae-peung
        </h1>
        <p className="font-bold text-[#8892b0] py-4 max-w-[700px]">
          I'm a Frontend Developer (Intern) at 20scoops CNX.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-sky-500 hover:border-sky-500">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <BsArrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

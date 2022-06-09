import React from "react";
import HTML from "../asset/html.png";
import CSS from "../asset/css.png";
import JavaScript from "../asset/js.png";
import TypeScript from "../asset/ts.png";
import ReactImg from "../asset/react.png";
import Angular from "../asset/angular.png";
import Php from "../asset/php.png";
import MySql from "../asset/mySql.png";
import Bootstrap from "../asset/bootstrap.png";
import Tailwind from "../asset/tailwind.png";
import Laravel from "../asset/laravel.png";
import Node from "../asset/node.png";

const Skill = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-sky-500">
            Skills
          </p>
          <p className="py-4">These are technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 text-center">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="html logo" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="css logo" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="js logo" />
            <p>JAVASRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TypeScript} alt="ts logo" />
            <p>TYPESCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Php} alt="php logo" />
            <p>PHP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Angular} alt="angular logo" />
            <p>ANGULAR</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="react logo" />
            <p>REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Laravel} alt="laravel logo" />
            <p>LARAVEL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="node logo" />
            <p>NODE.JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto before mt-3 mb-3"
              src={MySql}
              alt="mtSql logo"
            />
            <p>MYSQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Bootstrap} alt="github logo" />
            <p>BOOTSTRAP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="tailwind logo" />
            <p>TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

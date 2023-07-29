import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-scroll";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col items-center text-center group overflow-hidden"
    >
      <div className="mb-8 relative">
        <img className="rounded-2xl h-64 w-full" src={item.image} alt="" />
        <div className="h-64 w-full absolute left-0 top-0 group-hover:bg-black duration-300 opacity-60"></div>
        <div className="absolute group-hover:left-1/2 left-[-100px] top-[-100px] duration-300 group-hover:top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-center items-center">
            <div className="px-2 py-3 mx-3 rounded-full bg-white hover:bg-tertiary hover:text-white duration-300">
              <a
                href={`${item.liveLink}`}
                target="_blank"
                className="font-bold"
              >
                Live
              </a>
            </div>
            <a
              href={`${item.git}`}
              target="_blank"
              className="p-3 mx-3 rounded-full bg-white hover:bg-tertiary hover:text-white duration-300"
            >
              <Icon icon="openmoji:github" width={28} />
            </a>
          </div>
        </div>
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
    </div>
  );
};

export default Project;

import React from "react";

// import woman image
import myImg from "../assets/img/IMG-5891.JPG";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent text-md mb-[22px]">
              Hey, I'm Sadid! 👋
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              Web <br /> Developer.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-base text-center lg:text-left">
              Highly skilled and motivated MERN Stack Developer seeking a
              challenging role at a reputable company. Committed to utilizing my
              expertise in Web Design, Web Development, and MERN stack
              technologies to deliver innovative solutions and contribute to the
              success of the organization.
            </p>
            <button className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all">
              Work with me
            </button>
          </div>
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <img src={myImg} alt="" className="w-96 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";

// import img
import Image from "../assets/img/IMG-5891.JPG";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full md:mx-auto lg:mx-0 rounded-2xl w-96"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                MD Sadid
              </h2>
              <p className="mb-4 text-accent">Frontend Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                To Purse a challenging career in a dynamic pharmaceutical
                company where the environment will support me to utilize my
                knowledge and expertise for professional career development. I
                do solemnly affirm that the information contained herein is
                correct to the best of my knowledge and belief. <br /> <br /> If
                any false or incorrect information is quoted from this
                curriculum vitae, the undersigned, will be liable and take full
                responsibility.
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

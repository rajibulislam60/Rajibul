import React from "react";
import Container from "./../container/Container";
import Skills from "../Components/resumeArea/Skills";
import Experience from "../Components/resumeArea/Experience";
import Education from "../Components/resumeArea/Education";

const Resume = () => {
  return (
    <div id="expertises">
      <Container>
        <div>
          <div className=" flex flex-col lg:flex-row">
            <h3 className="w-full lg:w-[30%] tracking-widest uppercase text-sm sm:text-base lg:text-lg font-semibold">
              [ Resume ]
            </h3>
            <div className="w-full lg:w-[70%]">
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                My digital
                <br />
                <span className="text-gray-500">journey</span>
              </h2>
              <p className="text-xl lg:text-3xl font-tit font-semibold lg:leading-[56px] mt-10">
                Web design is evolving rapidly, and I strive to stay ahead.
                <span className="text-gray-500">
                  Emerging tools and technologies enable me to create visually
                  stunning and seamlessly functional websites.
                </span>
              </p>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </div>
      </Container>
    </div>
  );
};

export default Resume;

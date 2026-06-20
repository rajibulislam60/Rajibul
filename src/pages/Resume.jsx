import React, { useState } from "react";
import Container from "./../container/Container";
import Skills from "../Components/resumeArea/Skills";
import Experience from "../Components/resumeArea/Experience";
import Education from "../Components/resumeArea/Education";
import CV from "../Components/CV";

const Resume = () => {
  const [cvshow, setCvshow] = useState(false);

  const toggleShow = () => {
    setCvshow(!cvshow);
  };
  return (
    <div id="expertises">
      <Container>
        <div>
          <div>
            <div
              onClick={toggleShow}
              className=" flex flex-col lg:flex-row cursor-pointer"
            >
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
            {cvshow && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <CV />

                  <div className="mt-4 flex gap-3 justify-end">
                    {/* Download CV */}
                    <a
                      href="/src/images/Mern-Rajibul-CV.pdf" // Put your CV in the public folder
                      download="Rajibul_Islam_CV.pdf"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Download CV
                    </a>

                    {/* Close Modal */}
                    <button
                      onClick={toggleShow}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
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

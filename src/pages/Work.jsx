import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import ProjectArea from "../Components/ProjectArea";
import ProjectImage from "../images/pr03-02.webp";
import { FaArrowRight } from "react-icons/fa";
import AllWorks from "./../Components/AllWorks";

const Work = () => {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // limit movement (important)
  const moveX = Math.min(scrollX * 0.2, 300);

  return (
    <section id="work" className="py-16">
      <Container>
        <div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-14 mb-12">
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4">
                Innovative design and <br />
                <span className="text-gray-500">cutting-edge development.</span>
              </h4>

              <h3 className="tracking-widest uppercase text-sm sm:text-lg font-semibold">
                [ A Few Words ]
              </h3>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold">
              Featured case studies
            </h2>
          </div>

          <div>
            <ProjectArea />
          </div>

          <div className="flex justify-between items-center mt-6 lg:mt-16 overflow-hidden">
            <FaArrowRight
              className="text-[0px] lg:text-[300px] text-gray-300 lg:px-6 transition-transform duration-200"
              style={{
                transform: `translateX(${moveX}px)`,
              }}
            />

            <div>
              <h3 className="tracking-widest uppercase text-sm lg:text-lg font-semibold">
                [ All Works ]
              </h3>

              <div className="w-[250px] sm:w-[350px] h-[150px] sm:h-[200px] mt-3">
                <img
                  className="w-full h-full object-cover"
                  src={ProjectImage}
                  alt="Project Image"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Work;

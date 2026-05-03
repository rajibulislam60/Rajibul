import React from "react";
import Container from "../container/Container";
import ProjectArea from "../Components/ProjectArea";

const Work = () => {
  return (
    <div className="py-16">
      <Container>
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

          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold">
            Featured case studies
          </h2>
        </div>

        <div>
          <ProjectArea />
        </div>
      </Container>
    </div>
  );
};

export default Work;

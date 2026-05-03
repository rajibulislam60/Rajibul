import React from "react";
import Container from "../container/Container";

const projectsData = [
  {
    id: 1,
    image: Image1,
    name: "TeaPoz",
    title: "Brand Marketing Website",
    description: "A modern marketing website for a tea brand.",
    tech: ["React", "Tailwind"],
    liveLink: "#",
    github: "#",
  },
];

const Work = () => {
  return (
    <div>
      <Container>
        <div>
          <div className="flex  items-center gap-14">
            <div>
              <h4 className="text-xl font-tit font-semibold mb-8">
                Innovative design and <br />
                <span className="text-gray-500">cutting-edge development.</span>
              </h4>
              <h3 className=" tracking-widest uppercase text-lg font-tit font-semibold text-bottom">
                [ A Few Words ]
              </h3>
            </div>
            <h2 className="text-8xl font-tit font-bold">
              Featured case studies
            </h2>
          </div>

          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default Work;

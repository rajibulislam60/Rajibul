import React from "react";
import Container from "../container/Container";
import PersonalImage from "../images/my_pic 2.png";

const About = () => {
  return (
    <section className="py-12 lg:py-20">
      <Container>
        <div className=" mx-auto">
          <h3 className=" tracking-widest uppercase text-lg font-tit font-semibold mb-4">
            [ A Few Words ]
          </h3>

          <p className="text-2xl lg:text-5xl font-tit font-semibold lg:leading-[56px]">
            Web design is evolving rapidly, and I strive to stay ahead.{" "}
            <span className="text-gray-500">
              {" "}
              Emerging tools and technologies enable me to create visually
              stunning and seamlessly functional websites.
            </span>
          </p>
          <div className="w-full h-[250px] lg:h-[320px] mt-8 lg:mt-12">
            <img
              className="w-full h-full object-cover"
              src={PersonalImage}
              alt="Personal Image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

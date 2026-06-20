import React from "react";
import Container from "./../container/Container";

const data = [
  {
    id: 1,
    image: "/images/career-ai.png", // Put your image inside public/images
    title: "Career Assistant AI (Developing)",
    description: "An AI-powered career guidance platform.",
    deployLink: "https://careerassist-ai.vercel.app",
    githubLink: "https://github.com/rajibulislam60/careerassist-ai",
  },
  {
    id: 2,
    image: "/images/gle.png",
    title: "GLE",
    description: "A modern web platform built with React and Next.js.",
    deployLink: "https://your-live-site.com",
    githubLink: "https://github.com/your-username/gle",
  },
];

const AllWorks = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl overflow-hidden shadow-lg p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover rounded-lg"
              />

              <div className="mt-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>

              <div className="flex gap-3 mt-4">
                <a
                  href={item.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Live
                </a>

                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AllWorks;

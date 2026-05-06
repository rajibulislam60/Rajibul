import React from "react";

const experienceData = [
  {
    title: "AI Chatbot Project",
    company: "Devpost",
    role: "Frontend Developer (AI Integration)",
    year: "2024",
    description:
      "Built an AI-powered chatbot using OpenAI API with real-time responses and modern chat UI design.",
    image:
      "https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "GLE Education Platform",
    company: "RSCF",
    role: "Full Stack Developer",
    year: "2023",
    description:
      "Developed a complete education platform with competitions and dashboard functionality.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "E-commerce Website",
    company: "Codveda Technologies",
    role: "Full Stack Developer Intern",
    year: "2023",
    description:
      "Built a full-stack e-commerce app with cart management and REST API integration.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Travel Website UI",
    company: "FlyFar",
    role: "Frontend Developer",
    year: "2022",
    description:
      "Designed responsive travel website UI with high-conversion UX patterns.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop",
  },
];

const Experience = () => {
  return (
    <section className="relative py-24 bg-[#0a0a0a] rounded-2xl font-tit rounded-tr-[8rem] text-white overflow-hidden">
      {/* Top Right Triangle Design */}
      <div
        className="absolute top-0 right-0 w-full h-full bg-[#161616] z-0"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 60% 0)" }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <h3 className="tracking-[0.4em] text-[10px] sm:text-xs font-bold text-gray-500 mb-4">
            [ ( 02 ) Experience ]
          </h3>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Work History
          </h2>
        </div>

        {/* Experience List Container */}
        <div className="relative border-t border-white/10">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="group relative border-b border-white/10 py-12 flex flex-col md:flex-row md:items-center transition-all duration-500 hover:bg-white/[0.02] px-4 sm:px-8"
            >
              {/* Column 1: Year & Company */}
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <span className="text-xs font-medium text-gray-500 block mb-2 tracking-widest uppercase">
                  {item.year}
                </span>
                <h4 className="text-lg font-light text-gray-300 group-hover:text-white transition-colors">
                  {item.company}
                </h4>
              </div>

              {/* Column 2: Title & Description */}
              <div className="w-full md:w-2/3 md:pl-12 relative z-10">
                <h4 className="text-2xl md:text-3xl font-semibold mb-3 group-hover:translate-x-2 transition-transform duration-500">
                  {item.title}
                </h4>
                <p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed">
                  <span className="text-gray-200 font-medium">{item.role}</span>{" "}
                  — {item.description}
                </p>
              </div>

              {/* Hover Image Reveal */}
              <div className="hidden lg:block pointer-events-none absolute left-1/2 top-1/2 -translate-y-1/2 w-80 h-48 overflow-hidden rounded-xl opacity-0 scale-75 -rotate-3 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:translate-x-12 transition-all duration-500 ease-out z-20 shadow-2xl shadow-black/50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
              </div>

              {/* Arrow Icon */}
              <div className="ml-auto hidden md:block opacity-20 group-hover:opacity-100 group-hover:text-blue-400 transition-all duration-300">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from "react";

const experienceData = [
  {
    title: "AI Chatbot Project",
    company: "Devpost",
    role: "Frontend Developer (AI Integration)",
    description:
      "Built an AI-powered chatbot using OpenAI API with real-time responses and modern chat UI design.",
  },
  {
    title: "GLE Education Platform",
    company: "RSCF (Rise Students Career Forum)",
    role: "Full Stack Developer",
    description:
      "Developed a complete education platform with competitions, student dashboard, and dynamic data handling.",
  },
  {
    title: "E-commerce Website",
    company: "Codveda Technologies",
    role: "Full Stack Developer Intern",
    description:
      "Built a full-stack e-commerce application with product management, cart system, and API integration.",
  },
  {
    title: "Travel Website UI",
    company: "FlyFar",
    role: "Frontend Developer",
    description:
      "Designed and developed a responsive travel website UI with modern layout and user-friendly experience.",
  },
];

const Experience = () => {
  return (
    <div className="py-16">
      <h3 className="text-center font-tit tracking-widest text-sm sm:text-base lg:text-lg font-semibold mb-10">
        [ (02) Experience ]
      </h3>

      <div className="max-w-5xl mx-auto px-4 space-y-6">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="border border-white/10 bg-white/5 backdrop-blur-md rounded-xl p-6 hover:scale-[1.02] transition duration-300"
          >
            <h4 className="text-lg font-semibold">{item.title}</h4>

            <p className="text-sm text-gray-400 mt-1">
              {item.company} • {item.role}
            </p>

            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

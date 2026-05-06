import React from "react";

const skillsData = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST API"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    title: "AI & Tech",
    skills: [
      "OpenAI API",
      "Prompt Engineering",
      "AI Chatbot",
      "AI Integration",
    ],
  },
  {
    title: "Special UI",
    skills: ["AI Chat UI", "Streaming UI", "Smart Forms", "Autocomplete"],
  },
  {
    title: "Tools",
    skills: [
      "VS Code",
      "Postman",
      "Git / GitHub",
      "DevTools",
      "Vercel / Netlify",
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-24 bg-white font-tit text-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <h3 className=" tracking-[0.4em] text-[10px] sm:text-xs font-bold text-gray-500">
              [ ( 01 ) Skills ]
            </h3>
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black">
            Technical Stack
          </h2>
        </div>

        {/* Minimalist Grid - Light Mode */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/[0.08]">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="group p-8 md:p-12 border-r border-b border-black/[0.08] hover:bg-gray-50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4 block group-hover:text-black transition-colors">
                  Expertise {index + 1}
                </span>

                <h4 className="text-2xl font-light mb-6 tracking-wide group-hover:translate-x-1 transition-transform duration-500">
                  {category.title}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-black/5 border border-transparent rounded-full text-gray-600 group-hover:bg-white group-hover:border-black/10 group-hover:text-black transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

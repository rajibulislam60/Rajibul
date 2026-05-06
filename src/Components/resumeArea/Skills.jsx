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
      "Bootstarp",
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
    title: "AI & Modern Tech",
    skills: [
      "OpenAI API",
      "Prompt Engineering",
      "AI Chatbot",
      "AI Integration",
    ],
  },
  {
    title: "Special Frontend + AI",
    skills: [
      "AI Chat UI",
      "Streaming Responses UI",
      "Smart Forms (AI)",
      "Autocomplete (AI forms)",
    ],
  },
  {
    title: "Tools",
    skills: [
      "VS Code",
      "Postman",
      "Git",
      "GitHub",
      "Chrome DevTools",
      "Vercel",
      "Netlify",
    ],
  },
];

const Skills = () => {
  return (
    <div className="py-16">
      <h3 className="text-center font-tit tracking-widest text-sm sm:text-base lg:text-lg font-semibold mb-10">
        [ (01) Skills ]
      </h3>

      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 px-4 font-tit">
        {skillsData.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:scale-105 transition duration-300"
          >
            <h4 className="text-xl font-semibold mb-3 text-center">
              {item.title}
            </h4>

            <ul className="space-y-2 text-md text-gray-600 text-center">
              {item.skills.map((skill, i) => (
                <li key={i}>• {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

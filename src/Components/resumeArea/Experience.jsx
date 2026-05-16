import React from "react";

const experienceData = [
  {
    title: "AI Chatbot Project",
    company: "Devpost",
    role: "Frontend Developer (AI Integration)",
    year: "2025",
    description:
      "Built an AI-powered chatbot using OpenAI API with real-time responses and modern chat UI design.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop",
    link: "https://ai-chat-ecru-iota.vercel.app/",
  },
  {
    title: "GLE Education Platform",
    company: "RSCF",
    role: "Full Stack Developer",
    year: "2026",
    description:
      "Developed a complete education platform with competitions, user dashboard, and management system.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
    link: "https://gle-z.netlify.app/",
  },
  {
    title: "Zavisoft",
    company: "E-Commerce",
    role: "Full Stack Developer",
    year: "2026",
    description:
      "Built a scalable e-commerce system with modern UI, authentication, and API integration.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
    link: "https://zavisoft-ecom.netlify.app/",
  },
  {
    title: "E-commerce Website",
    company: "Codveda Technologies",
    role: "Full Stack Developer Intern",
    year: "2025",
    description:
      "Built a full-stack e-commerce application with cart management and REST API integration.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
    link: "https://github.com/rajibulislam60/fullstack_ecommerce",
  },
  {
    title: "Travel Website UI",
    company: "FlyFar",
    role: "Frontend Developer",
    year: "2025",
    description:
      "Designed a responsive travel website UI with modern UX patterns and mobile-first layout.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop",
    link: "https://flyfartech.netlify.app/",
  },
  {
    title: "E-commerce Dashboard",
    company: "Simple Shop",
    role: "Frontend Developer (API Integration)",
    year: "2025",
    description:
      "Built a responsive admin dashboard with API integration for managing products and orders.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    link: "https://simpleshop-dashboard.netlify.app/",
  },
];
const Experience = () => {
  return (
    <section className="relative py-24 bg-[#0a0a0a] rounded-2xl font-tit rounded-tr-[8rem] text-white overflow-hidden">
      <div
        className="absolute top-0 right-0 w-full h-full bg-[#161616] z-0"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 60% 0)" }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <h3 className="tracking-[0.4em] text-[10px] sm:text-xs font-bold text-gray-500 mb-4">
            [ ( 02 ) Experience ]
          </h3>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Work History
          </h2>
        </div>

        <div className="relative border-t border-white/10">
          {experienceData.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group relative border-b border-white/10 py-12 flex flex-col md:flex-row md:items-center transition-all duration-500 hover:bg-white/[0.02] px-4 sm:px-8"
            >
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <span className="text-xs font-medium text-gray-500 block mb-2 tracking-widest uppercase">
                  {item.year}
                </span>
                <h4 className="text-lg font-light text-gray-300 group-hover:text-white transition-colors">
                  {item.company}
                </h4>
              </div>

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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

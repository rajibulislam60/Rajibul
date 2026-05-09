import React from "react";

const EducationDatas = [
  {
    id: 1,
    title: "MERN Stack Development",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    institute: "Creative IT Institute",
    year: "2023 - 2025",
  },
  {
    id: 2,
    title: "Frontend Development",
    image:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=250&fit=crop",
    institute: "Simplilearn Alumni",
    year: "2024",
  },
  {
    id: 3,
    title: "BSc",
    image:
      "https://images.unsplash.com/photo-152305085306e-8c333bf48972?w=400&h=250&fit=crop",
    institute: "Mohammadpur Kendriya College",
    year: "Final Year",
  },
];

const Education = () => {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto font-tit">
      <div className="mb-12">
        <h3 className="tracking-[0.4em] text-[10px] sm:text-xs font-bold text-gray-500 uppercase">
          [ ( 03 ) Education ]
        </h3>
      </div>

      <div className="flex flex-col border-t border-gray-200">
        {EducationDatas.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-gray-200 cursor-pointer "
          >
            <div className=" flex-1  transition-transform duration-500 ">
              <h2 className="text-2xl lg:text-4xl font-medium text-gray-900">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-gray-500 uppercase tracking-[0.2em]">
                {item.institute}
              </p>
            </div>

            <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 w-0 h-28 overflow-hidden opacity-0 group-hover:w-64 group-hover:opacity-100 group-hover:left-[50%] duration-500 ease-out">
              <img
                src={item.image}
                alt={item.title}
                className="w-64 h-full object-cover transition-transform duration-700"
              />
            </div>

            <div className="mt-4 md:mt-0 text-right z-10">
              <span className="text-xl font-light text-gray-400 group-hover:text-gray-900 transition-colors duration-300">
                {item.year}
              </span>
            </div>

            <div className="absolute inset-0 bg-gray-50/0 group-hover:bg-gray-50/80 transition-colors duration-300 -z-10" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

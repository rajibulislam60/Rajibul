import React, { useEffect, useState } from "react";
import Image1 from "../images/mar_09.webp";
import Image2 from "../images/pr03-02.webp";
import Image3 from "../images/pr03-06.webp";

const projectsData = [
  { id: 1, image: Image1, name: "TeaPoz", title: "Marketing Website" },
  { id: 2, image: Image2, name: "Food App", title: "Dashboard" },
  { id: 3, image: Image3, name: "Portfolio", title: "Personal Site" },
  { id: 4, image: Image1, name: "Ecommerce", title: "Shop UI" },
  { id: 5, image: Image2, name: "Admin Panel", title: "CMS System" },
  { id: 6, image: Image3, name: "Booking App", title: "Travel UI" },
];

const ProjectArea = () => {
  const [layout, setLayout] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-4">
      <div
        className={`
          grid gap-6
          ${
            layout === 0
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px]"
              : layout === 1
                ? "grid-cols-2 auto-rows-[250px]"
                : "grid-cols-1 sm:grid-cols-3 auto-rows-[180px]"
          }
        `}
      >
        {projectsData.map((item, index) => (
          <div
            key={item.id}
            className={`
              relative overflow-hidden group
              transition-all duration-700 ease-in-out
              
              ${
                layout === 0 && index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }
              ${layout === 1 && index === 2 ? "col-span-2 row-span-2" : ""}
              ${layout === 2 && index === 1 ? "row-span-2" : ""}
            `}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
              <div className="p-4 text-white">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectArea;

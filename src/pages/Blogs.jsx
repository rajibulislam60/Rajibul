import React, { useState, useEffect } from "react";
import Container from "../container/Container";

const BlogsData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
    title: "Building Scalable Web Applications",
    date: "Oct 12, 2025",
    category: "Development",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80",
    title: "Mastering the MERN Stack",
    date: "Sep 28, 2025",
    category: "Tutorial",
  },
];

const Blogs = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeId, setActiveId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    setMousePos({
      x: e.clientX - 120,
      y: e.clientY - 100,
    });
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="mb-10 sm:mb-12 flex flex-col lg:flex-row gap-6 lg:gap-20 lg:items-center">
          <h3 className="tracking-widest uppercase text-sm sm:text-base lg:text-lg font-semibold">
            [ Blogs ]
          </h3>

          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            My newest <br />
            <span className="text-gray-500">insights</span>
          </h2>
        </div>

        {/* Blog List */}
        <div className="flex flex-col">
          {BlogsData.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => !isMobile && setActiveId(item.id)}
              onMouseLeave={() => setActiveId(null)}
              onMouseMove={!isMobile ? handleMouseMove : null}
              className={`group border-t border-gray-300 py-6 sm:py-8 lg:py-10 
              flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4
              ${!isMobile && "cursor-none"} relative z-10 hover:border-black transition-colors`}
            >
              {/* Left */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 lg:gap-8">
                <span className="text-xs sm:text-sm uppercase text-gray-400 font-medium">
                  {item.category}
                </span>

                <h2 className="text-xl sm:text-3xl lg:text-5xl font-tit font-bold uppercase transition-all group-hover:translate-x-2 lg:group-hover:translate-x-4">
                  {item.title}
                </h2>
              </div>

              {/* Right */}
              <p className="text-sm sm:text-base text-gray-500 font-medium">
                {item.date}
              </p>

              {/* Desktop Hover Image */}
              {!isMobile && activeId === item.id && (
                <div
                  className="fixed pointer-events-none z-50 w-48 sm:w-64 h-32 sm:h-40 overflow-hidden rounded-lg shadow-2xl"
                  style={{
                    left: `${mousePos.x}px`,
                    top: `${mousePos.y}px`,
                    transition: "transform 0.1s ease-out",
                  }}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Mobile Image (fallback) */}
              {isMobile && (
                <div className="w-full h-40 rounded-lg overflow-hidden mt-3">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blogs;

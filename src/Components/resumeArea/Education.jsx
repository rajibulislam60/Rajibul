import React from "react";
import { motion } from "framer-motion";

const EducationDatas = [
  {
    id: 1,
    title: "MERN Stack Development",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
    institute: "Creative IT Institute",
    year: "2023 - 2025",
  },
  {
    id: 2,
    title: "Frontend Development",
    image:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=300&h=200&fit=crop",
    institute: "Simplilearn Alumni",
    year: "2024",
  },
  {
    id: 3,
    title: "BSc",
    image:
      "https://images.unsplash.com/photo-152305085306e-8c333bf48972?w=300&h=200&fit=crop",
    institute: "Mohammadpur Kendriya College",
    year: "Final Year",
  },
];

const Education = () => {
  // Animation Variants for the Container (Left to Right slide)
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1], // Custom cubic-bezier for a premium feel
      },
    }),
  };

  // Animation Variants for the Hover Image
  const imageVariants = {
    initial: { opacity: 0, scale: 0.8, x: 20 },
    hover: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 px-6 bg-[#0f0f0f] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-light mb-20 tracking-tight"
        >
          Education<span className="text-blue-500">.</span>
        </motion.h2>

        <div className="flex flex-col">
          {EducationDatas.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-white/10 cursor-pointer"
            >
              {/* Year & Institute */}
              <div className="z-10">
                <span className="text-sm uppercase tracking-widest text-gray-500 mb-2 block">
                  {item.year}
                </span>
                <h3 className="text-3xl md:text-4xl font-medium group-hover:pl-4 transition-all duration-500">
                  {item.title}
                </h3>
                <p className="text-gray-400 mt-2 group-hover:pl-4 transition-all duration-500">
                  {item.institute}
                </p>
              </div>

              {/* Reveal Image on Hover */}
              <motion.div
                variants={imageVariants}
                className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none hidden md:block"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-64 h-40 object-cover rounded-sm shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              {/* Background Highlight Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

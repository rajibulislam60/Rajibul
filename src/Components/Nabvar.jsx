import React, { useState } from "react";
import Container from "./../container/Container";
import ImageLogo from "../images/logo.png";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Install react-icons

const Nabvar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Works", href: "#" },
    { name: "Expertise", href: "#" },
    { name: "Blogs", href: "#" },
  ];

  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
              src={ImageLogo}
              alt="Logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hire Me Button (Desktop) */}
          <div className="hidden md:block">
            <button className="font-tit font-semibold px-6 py-2.5 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-3xl"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 px-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white block text-lg"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <button className="w-full mt-4 font-semibold px-5 py-3 rounded-xl border border-white text-white hover:bg-white hover:text-black duration-300">
              Hire Me
            </button>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Nabvar;

import React, { useState } from "react";
import LogoImage from "../images/logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import Container from "./../container/Container";

// 1. Updated menuItems with href IDs
const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Expertises", href: "#expertises" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

const NavItem = ({ label, href }) => {
  return (
    <li className="relative group overflow-hidden cursor-pointer text-[13px] font-bold rounded-[10px] transition-all list-none">
      <a href={href} className="block px-5 py-2.5">
        <div className="absolute inset-0 bg-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
        <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-75 ease-out"></div>

        <span className="relative z-10 block transition-transform duration-500 group-hover:-translate-y-[160%]">
          {label}
        </span>

        <span className="absolute inset-0 z-20 flex items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
          {label}
        </span>
      </a>
    </li>
  );
};

const Navbar = ({ className }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full font-tit z-50 py-4 transition-all ${className}`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#home">
              <img
                src={LogoImage}
                alt="Logo"
                className="w-18 md:w-22 object-contain"
              />
            </a>
          </div>

          <div className="hidden md:block bg-white/80 backdrop-blur-md border border-gray-200 p-1.5 rounded-[14px] shadow-sm">
            <ul className="flex gap-1">
              {menuItems.map((item, i) => (
                <NavItem key={i} label={item.label} href={item.href} />
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block border-2 border-gray-400 rounded-[8px] hover:bg-gray-400 hover:text-black text-gray-400 transition-all duration-300 active:scale-95 font-bold text-sm px-6 py-2.5">
              Hire Me
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-3xl text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {open ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        <div
          className={`
            md:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${open ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 pointer-events-none"}
          `}
        >
          <ul className="flex flex-col gap-2 bg-white p-4 rounded-[20px] shadow-2xl border border-gray-100">
            {menuItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-bold text-gray-800 p-3 rounded-xl hover:bg-gray-50 hover:text-red-500 transition-all"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button className="w-full border-2 border-black rounded-[12px] bg-black text-white py-4 font-bold active:scale-[0.98] transition-transform">
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Project", path: "/project" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white shadow-xl">

      <div className="flex items-center justify-between px-10 py-4">

        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-extrabold tracking-wide flex items-center gap-2 hover:scale-105 transition duration-300"
        >
          👩‍💻 SHANKARESHWARI
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative group text-lg font-medium transition duration-300"
            >
              {item.name}

              {/* Animated Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Icon */}
        <div 
          className="md:hidden text-3xl cursor-pointer transition duration-300 hover:scale-110"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-r from-purple-700 to-pink-700 px-6 pb-6 animate-slideDown">
          <div className="flex flex-col gap-6 text-center mt-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setOpen(false)}
                className="text-lg font-medium hover:text-yellow-300 transition duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

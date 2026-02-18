import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Skills", path: "/skills" },
    { name: "Project", path: "/project" },
    { name: "Experience", path: "/experience" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="relative sticky top-0 z-50 bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg">

      {/* 🔥 Logo 10px from left */}
      <Link
        to="/"
        className="absolute left-0 ml-[100px] top-1/2 -translate-y-1/2
                   text-xl sm:text-2xl xl:text-3xl font-bold tracking-wide 
                   cursor-pointer hover:scale-105 transition p-5"
      >
        👩‍💻 SHANKARESHWARI 
      </Link>

      <div className="flex items-center justify-between w-full px-6 py-5">

        {/* Space to prevent overlap */}
        <div className="w-[200px]"></div>

        {/* Menu justify-between */}
        <nav className="hidden md:flex justify-between flex-1 max-w-4xl text-base xl:text-lg font-medium">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative cursor-pointer hover:text-yellow-300 transition
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-yellow-300
                after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-r from-pink-600 to-purple-600 px-6 pb-6">
          <div className="flex flex-col gap-4 text-base font-medium text-center">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setOpen(false)}
                className="cursor-pointer hover:text-yellow-300 transition"
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

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
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-5">

        {/* LOGO */}
        <Link
          to="/"
          className="text-xl sm:text-2xl xl:text-3xl font-bold tracking-wide cursor-pointer hover:scale-105 transition"
        >
          👩‍💻 SHANKARESHWARI
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 xl:gap-12 text-base xl:text-lg font-medium">
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

        {/* MOBILE MENU ICON */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* MOBILE MENU */}
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

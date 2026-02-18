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
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg">

      <div className="flex items-center justify-between px-6 py-4">

        <Link to="/" className="text-xl font-bold">
          SHANKARESHWARI
        </Link>

        <nav className="hidden md:flex gap-6">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className="hover:text-yellow-300">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-4 text-center">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setOpen(false)}
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

import { Contact } from "lucide-react";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "About", "Education", "Skills", "Project", "Resume","Contact"];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg animate-fadeDown">
      <div
        className="flex items-center justify-between max-w-7xl mx-auto
                   px-4 sm:px-6 xl:px-10 py-5"
      >
        {/* LOGO */}
        <div
          className="text-xl sm:text-2xl xl:text-3xl
                     font-bold tracking-wide cursor-pointer
                     transition-transform duration-300 ease-in-out
                     hover:scale-105"
        >
          👩‍💻 SHANKARESHWARI
        </div>

        {/* DESKTOP MENU (md and above) */}
        <nav className="hidden md:flex gap-8 xl:gap-12 text-base xl:text-lg font-medium">
          {menuItems.map((item, index) => (
            <span
              key={index}
              className="relative cursor-pointer transition-colors duration-300
                         hover:text-yellow-300
                         after:content-[''] after:absolute after:left-0
                         after:-bottom-1 after:h-[2px] after:w-0
                         after:bg-yellow-300 after:transition-all
                         after:duration-300 hover:after:w-full"
            >
              {item}
            </span>
          ))}
        </nav>

        {/* MOBILE MENU ICON (sm only) */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="md:hidden bg-gradient-to-r from-pink-600 to-purple-600
                     px-6 pb-6 animate-slideDown"
        >
          <div className="flex flex-col gap-4 text-base font-medium text-center">
            {menuItems.map((item, index) => (
              <span
                key={index}
                className="cursor-pointer hover:text-yellow-300 transition"
                onClick={() => setOpen(false)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

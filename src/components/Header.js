import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg animate-fadeDown">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-5">

        
        <div className="text-2xl font-bold tracking-wide cursor-pointer 
                        transition-transform duration-300 ease-in-out 
                        hover:scale-105">
          👩‍💻 SHANKARESHWARI
        </div>

        
        <nav className="flex gap-10 text-lg font-medium">
          {["Home","About","Education","Skills","Project","Resume"].map(
            (item, index) => (
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
            )
          )}
        </nav>

      </div>
    </header>
  );
};

export default Header;

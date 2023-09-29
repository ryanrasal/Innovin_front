import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "ACCUEIL", link: "/" },
    { name: "NOS VINS", link: "ourWines" },
    { name: "CONTACT", link: "contact" },
  ];
  return (
    <div className="shadow-md w-full md:h-[10vh] md:fixed md:top-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          INNO'VIN
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <Menu />
        </button>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-30 left-0  w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink
                to={link.link}
                onClick={() => setOpen(!open)}
                className="text-gray-800 hover:text-gray-600 duration-300 hover:border-b hover:border-black"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

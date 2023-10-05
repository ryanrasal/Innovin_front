import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { useUserContext } from "../../services/Context/UserContext";
import ModaleLogout from "./ModalLogout";

export default function Navbar() {
  const [showModalConfirm, setShowModalConfirme] = useState(false);
  const [open, setOpen] = useState(false);
  const { user } = useUserContext();
  const navigate = useNavigate();

  const Links = [
    { name: "Accueil", link: "/" },
    { name: "Nos vins", link: "ourWines" },
    { name: "Contact", link: "contact" },
  ];

  const handleDeconnected = () => {
    setShowModalConfirme(false);
    setOpen(!open);
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="shadow-md w-full h-[10vh]">
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
                className="text-gray-800 hover:text-gray-600 hover:border-b hover:border-red-500 duration-300"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          {!user ? (
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink
                onClick={() => setOpen(!open)}
                to="login"
                className="text-gray-800 hover:border-b hover:border-red-500  duration-300"
              >
                Connexion
              </NavLink>
            </li>
          ) : user.role === "admin" ? (
            <>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <NavLink
                  onClick={() => setOpen(!open)}
                  to="/admin"
                  className="text-gray-800 hover:border-b hover:border-red-500  duration-300"
                >
                  Admin
                </NavLink>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <button
                  onClick={handleDeconnected}
                  type="button"
                  className="text-gray-800 hover:border-b hover:border-red-500  duration-300"
                >
                  Deconnexion
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <NavLink
                  onClick={() => setOpen(!open)}
                  to="/cart"
                  className="text-gray-800 hover:border-b hover:border-red-500  duration-300"
                >
                  Panier
                </NavLink>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <button
                  onClick={() => setShowModalConfirme(true)}
                  type="button"
                  className="text-gray-800 hover:border-b hover:border-red-500  duration-300"
                >
                  Deconnexion
                </button>
              </li>
            </>
          )}
        </ul>
        {showModalConfirm && (
          <ModaleLogout
            setShowModalConfirme={setShowModalConfirme}
            handleDeconnected={handleDeconnected}
          />
        )}
      </div>
    </div>
  );
}

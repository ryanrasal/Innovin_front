import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { useUserContext } from "../../services/Context/UserContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

export default function Navbar() {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "Accueil", link: "/" },
    { name: "Nos vins", link: "/ourWines" },
  ];

  const handleDeconnected = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 500);
  };

  return (
    <div className="shadow-md w-full h-[8vh]">
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
            <li
              onClick={() => setOpen(!open)}
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7"
            >
              <NavLink
                to={link.link}
                className="text-gray-800 hover:text-gray-600 hover:border-b hover:border-red-500 duration-300"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          {!user ? (
            <div className="md:flex">
              <li
                onClick={() => setOpen(!open)}
                className="md:ml-8 text-xl md:my-0 my-7"
              >
                <NavLink
                  to="contact"
                  className="text-gray-800 hover:border-b hover:border-red-500  duration-300"
                >
                  Contact
                </NavLink>
              </li>
              <li
                onClick={() => setOpen(!open)}
                className="md:ml-8 text-xl md:my-0 my-7"
              >
                <NavLink to="login">Connexion</NavLink>
              </li>
            </div>
          ) : user.role === "admin" ? (
            <>
              <li
                onClick={() => setOpen(!open)}
                className="md:ml-8 text-xl md:my-0 my-7"
              >
                <NavLink
                  to="/admin"
                  className="text-gray-800 hover:border-b hover:border-red-500  duration-300"
                >
                  Admin
                </NavLink>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <Dialog>
                  <DialogTrigger>Deconnexion</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                    <DialogTitle className="text-center font-medium mb-3 mx-10 md:mx-0">
                        Voulez-vous vraiment vous deconnecter ?
                      </DialogTitle>
                      <DialogFooter className="flex">
                        <Button
                          variant="secondary"
                          onClick={() => handleDeconnected()}
                        >
                          Oui
                        </Button>
                        <DialogClose asChild>
                          <Button type="button" variant="destructive">
                            Fermer
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
            </>
          ) : (
            <>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <NavLink
                  to="/cart"
                  className="text-gray-800 hover:border-b hover:border-red-500  duration-300"
                >
                  Panier
                </NavLink>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <NavLink
                  to="profil"
                  className="text-gray-800 hover:border-b hover:border-red-500  duration-300"
                >
                  Profil
                </NavLink>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <NavLink
                  to="contact"
                  className="text-gray-800 hover:border-b hover:border-red-500  duration-300"
                >
                  Contact
                </NavLink>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <Dialog>
                  <DialogTrigger>Deconnexion</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                    <DialogTitle className="text-center font-medium mb-3 mx-10 md:mx-0">
                        Voulez-vous vraiment vous deconnecter ?
                      </DialogTitle>
                      <DialogFooter className="flex">
                        <Button
                          variant="secondary"
                          onClick={() => handleDeconnected()}
                        >
                          Oui
                        </Button>
                        <DialogClose asChild>
                          <Button type="button" variant="destructive">
                            Fermer
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

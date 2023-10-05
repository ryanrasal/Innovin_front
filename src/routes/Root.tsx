import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "../services/Context/UserContext";

export default function Root() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Outlet />
        <ToastContainer />
      </UserProvider>
    </>
  );
}

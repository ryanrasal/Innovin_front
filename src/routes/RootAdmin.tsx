import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { UserProvider } from "../services/Context/UserContext";
import SideBar from "../components/Admin/SideBar";

export default function RootAdmin() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <div className="flex">
          <SideBar />
          <Outlet />
        </div>
        <Toaster/>
      </UserProvider>
    </>
  );
}

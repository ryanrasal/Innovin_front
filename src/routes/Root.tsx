import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "../services/Context/UserContext";
import { Toaster } from "@/components/ui/toaster";
import { useEffect, useState } from "react";
import AgeVerificationModal from "@/pages/AgeVerificationModal";

export default function Root() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const ageVerified = localStorage.getItem("ageVerified");
    if (!ageVerified) {
      setShowModal(true);
    }
  }, [showModal]);

  const handleConfirm = () => {
    localStorage.setItem("ageVerified", "true");
    setShowModal(true);
    window.location.reload();
  };

  return (
    <>
      <UserProvider>
        {showModal ? (
          <AgeVerificationModal
            setShowModal={setShowModal}
            handleConfirm={handleConfirm}
          />
        ) : (
          <div>
            <Navbar />
            <Outlet />
            <ToastContainer />
            <Toaster />
          </div>
        )}
      </UserProvider>
    </>
  );
}

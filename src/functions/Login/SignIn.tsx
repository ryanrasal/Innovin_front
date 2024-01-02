import { useState } from "react";
import ApiHelper from "@/services/apiHelper";
import { User } from "@/interfaces/User";
import { useUserContext } from "@/services/Context/UserContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

export function useSigninFunctions() {
  const { toast } = useToast();
  const { handleReloadUser } = useUserContext();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [dataSignIn, setDataSignIn] = useState({
    email: "",
    password: "",
  });

  // remplit le state dataSignIn
  const handleChangeSignIn = (e: {
    target: { name: string; value: string };
  }) => {
    setDataSignIn({ ...dataSignIn, [e.target.name]: e.target.value });
  };

  const connexion = () => {
    ApiHelper("authentification", "post", dataSignIn)
      .then((res: { status: number; token: string; userConnect: User }) => {
        if (res.token) {
          toast({
            title: "Connexion",
            description: `Bienvenue ${res.userConnect.firstname.toUpperCase()} ${res.userConnect.lastname.toUpperCase()}`,
          });

          localStorage.setItem("userConnect", JSON.stringify(res.userConnect));
          localStorage.setItem("token", res.token);
          handleReloadUser();
          if (res.userConnect.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/");
          }
        } else {
          console.warn("erreur");
        }
      })
      .then((error) => console.error(error));
  };

  return {
    connexion,
    handleChangeSignIn,
    setShowPassword,
    showPassword,
  };
}

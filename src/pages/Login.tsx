import React, { useState } from "react";
import Onepi from "../assets/SignUp/Onepi.jpg";
import SignUp from "../components/Login/SignUp";
import ApiHelper from "../services/apiHelper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "../components/Login/SignIn";
import { useUserContext } from "../services/Context/UserContext";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  role: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

export default function Login() {
  const { handleReloadUser } = useUserContext();
  const [toggleForm, setToggleForm] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [dataSignUp, setDataSignUp] = useState({
    firstname: "",
    lastname: "",
    username: "",
    role: "user",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const [dataSignIn, setDataSignIn] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // toggle formulaire inscription et connexion
  const handleShowForm = () => {
    setToggleForm(!toggleForm);
  };

  // récupere inputConfirmPassword
  const handleConfirmPassWord = (e: { target: { value: string } }) => {
    setConfirmPassword(e.target.value);
  };

  // remplit le state dataSignIn
  const handleChangeSignIn = (e: {
    target: { name: string; value: string };
  }) => {
    setDataSignIn({ ...dataSignIn, [e.target.name]: e.target.value });
  };

  // remplit le state dataSignUp
  const handleChangeSignUp = (e: {
    target: { name: string; value: string };
  }) => {
    setDataSignUp({ ...dataSignUp, [e.target.name]: e.target.value });
  };

  // connexion du user
  const connexion = () => {
    ApiHelper("authentification", "post", dataSignIn)
      .then((res: { status: number; token: string; userConnect: User }) => {
        if (res.token) {
          toast(
            `✅ Bienvenue ${res.userConnect.firstname} ${res.userConnect.lastname} `,
            {
              autoClose: 3000,
            },
          );
          localStorage.setItem("userConnect", JSON.stringify(res.userConnect));
          localStorage.setItem("token", res.token);
          handleReloadUser();
          navigate("/");
        } else {
          console.warn("erreur");
        }
      })
      .then((error) => console.error(error));
  };

  // inscription du user
  const submitSignUp = () => {
    if (confirmPassword !== dataSignUp.password) {
      toast(" ❌ Mot de passe et sa confirmation sont différents, Réessayer", {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        theme: "light",
      });
    }
    if (
      dataSignUp.email &&
      dataSignUp.firstname &&
      dataSignUp.lastname &&
      dataSignUp.address &&
      dataSignUp.password &&
      dataSignUp.phone &&
      dataSignUp.username
    ) {
      ApiHelper("users", "post", dataSignUp).then(
        (res: { status: number }) => {
          if (res.status === 201) {
            toast(" ✅ Votre compte a bien été créé", {
              autoClose: 3000,
            });
          } else {
            console.warn("erreur");
          }
        },
        (error: Error) => {
          console.warn("erreur", error);
        },
      );
    } else {
      toast(" ✅ Informations Manquantes ", {
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex">
      {toggleForm ? (
        <SignIn
          connexion={connexion}
          handleChangeSignIn={handleChangeSignIn}
          handleShowForm={handleShowForm}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
        />
      ) : (
        <SignUp
          handleChangeSignUp={handleChangeSignUp}
          submitSignUp={submitSignUp}
          handleConfirmPassWord={handleConfirmPassWord}
          handleShowForm={handleShowForm}
        />
      )}

      <div
        className="bg-contain bg-center  w-1/2 h-[90vh] hidden md:block"
        style={{ backgroundImage: `url(${Onepi})` }}
      />
    </div>
  );
}

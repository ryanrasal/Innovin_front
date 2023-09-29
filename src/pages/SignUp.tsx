import React from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import bgLogin from "../assets/Login/bgLogin.jpg";
import ApiHelper from "../services/apiHelper";
import inputFields from "../components/SignUp/InputFields";

export default function SignUp() {
  const [dataForm, setDataForm] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    role: "user",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const SubmitSignUp = () => {
    ApiHelper("users", "post", dataForm).then((res, error) => {
      if (res.status === 201) {
        toast.success(
          `Bienvenue ${dataForm.firstname}, votre compte a bien été créé !`
        );
        navigate("/connect");
      } else {
        console.warn("erreur", error);
      }
    });
  };

  return (
    <div className="flex">
      <div
        className="bg-cover bg-center w-1/2 h-[90vh] hidden md:block"
        style={{ backgroundImage: `url(${bgLogin})` }}
      />
      <div className="w-full flex flex-col mx-20">
        <h4 className="text-white text-center py-10px px-10vw">
          Bienvenue dans l'équipe !
        </h4>
        <div className="flex flex-wrap justify-center">
          {inputFields.map((field) => (
            <div className="flex justify-center items-center" key={field.name}>
              <img src={field.icon} alt="" />
              <input
                onChange={handleChange}
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                className="m-5 rounded-md shadow border py-2 px-1"
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          onClick={SubmitSignUp}
          className="bg-red-500 mx-auto py-3 rounded-md px-2"
        >
          S'inscrire
        </button>
      </div>
    </div>
  );
}

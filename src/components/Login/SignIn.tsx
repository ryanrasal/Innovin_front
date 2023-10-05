import { Eye, EyeOff } from "lucide-react";
import React from "react";

interface Props {
  connexion: () => void;
  handleChangeSignIn: (e: { target: { name: string; value: string } }) => void;
  handleShowForm: () => void;
  setShowPassword: (showPassword: boolean) => void;
  showPassword: boolean;
}

export default function SignIn({
  connexion,
  handleChangeSignIn,
  handleShowForm,
  showPassword,
  setShowPassword,
}: Props) {
  return (
    <div className=" flex justify-center  w-full flex-col md:mx-20  md:w-1/2">
      <h4 className="text-center text-3xl font-bold py-5 px-10">
        Content de te revoir !
      </h4>
      <div className="flex flex-col justify-center">
        <input
          placeholder="Email"
          name="email"
          onChange={handleChangeSignIn}
          className="border md:w-2/5 w-2/3 mx-auto my-5 py-3 rounded-md px-2 "
          type="text"
        />
        <div className="flex relative">
          <input
            placeholder="Mot de passe"
            name="password"
            onChange={handleChangeSignIn}
            className="border md:w-2/5 w-2/3 mx-auto my-5 py-3 rounded-md px-2 "
            type={showPassword ? "text" : "password"}
          />
          <button
            type="button"
            className="absolute md:right-44 right-20 top-8 z-10"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <Eye /> : <EyeOff />}
          </button>
        </div>
        <button
          type="submit"
          onClick={connexion}
          className="mx-auto border md:w-2/5  w-2/3 my-5 py-3 rounded-md px-2 hover:bg-gray-100"
        >
          Se connecter
        </button>
      </div>
      <div className="flex justify-center">
        <p className=" text-center mr-2">Pas enore inscrit ?</p>
        <button
          type="button"
          onClick={handleShowForm}
          className="underline  text-red-400 font-bold hover:text-red-500"
        >
          Clique ici
        </button>
      </div>
    </div>
  );
}

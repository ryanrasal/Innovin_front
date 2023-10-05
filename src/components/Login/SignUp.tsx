import "react-toastify/dist/ReactToastify.css";
import inputSignUp from "./InputSignUp";
import React from "react";

interface Props {
  handleChangeSignUp: (e: { target: { name: string; value: string } }) => void;
  submitSignUp: () => void;
  handleConfirmPassWord: (e: {
    target: { name: string; value: string };
  }) => void;
  handleShowForm: () => void;
}

export default function SignUp({
  handleChangeSignUp,
  submitSignUp,
  handleConfirmPassWord,
  handleShowForm,
}: Props) {
  return (
    <div className=" flex justify-center  flex-col mx-20 w-1/2">
      <h4 className="text-center text-3xl font-bold py-5 px-10">
        Bienvenue dans l'équipe !
      </h4>
      <div className="flex flex-wrap mx-auto md:w-full">
        {inputSignUp.map((field) => (
          <div
            className="flex justify-center mx-auto items-center"
            key={field.name}
          >
            {field.icon}
            <input
              onChange={
                field.name === "passwordConfirm"
                  ? handleConfirmPassWord
                  : handleChangeSignUp
              }
              name={field.name}
              placeholder={field.placeholder}
              className="m-5 rounded-md shadow border py-2 px-1"
            />
          </div>
        ))}
      </div>
      <div className="flex">
        <button
          type="submit"
          onClick={submitSignUp}
          className="mx-auto border w-1/3  py-3 rounded-md px-2 hover:bg-gray-100"
        >
          S'inscrire
        </button>
        <button
          type="button"
          onClick={handleShowForm}
          className="mx-auto border w-1/3 py-3 rounded-md px-2 hover:bg-gray-100"
        >
          Retour
        </button>
      </div>
    </div>
  );
}

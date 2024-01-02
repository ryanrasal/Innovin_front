import { User } from "@/interfaces/User";
import React from "react";


interface UserFormInputsProps {
  dataUser: User;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const tableInputs = [
  { label: "Prénom", name: "firstname", placeholder: "Prénom" },
  { label: "Nom de famille", name: "lastname", placeholder: "Nom" },
  { label: "Email", name: "email", placeholder: "Email" },
  { label: " Adresse", name: "address", placeholder: " Adresse" },
  { label: "Téléphone", name: "phone", placeholder: "Téléphone" },
  { label: "Pseudo", name: "username", placeholder: "Pseudo" },
  { label: "Mot de passe", name: "password", placeholder: "Mot de passe" },
];

export const UserFormInputs: React.FC<UserFormInputsProps> = ({
  dataUser,
  handleChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center">
      {tableInputs.map((input, index) => (
        <div className="flex flex-col m-3" key={index}>
          <label className="pb-1" htmlFor="firstname">
            {input.label}
          </label>
          <input
            className="border py-1 pl-2 rounded "
            type={input.label === "Mot de passe" ? "password" : "text"}
            name={input.name}
            value={dataUser[input.name]}
            onChange={handleChange}
            placeholder={input.placeholder}
          />
        </div>
      ))}
    </div>
  );
};

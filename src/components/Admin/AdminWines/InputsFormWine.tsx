import { Wine } from "@/interfaces/Wine";
import React from "react";

interface WineFormInputsProps {
  dataWine: Wine;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: string;
}

const tableInputs = [
  { label: "Nom", name: "name", placeholder: "Nom" },
  { label: "Année", name: "year", placeholder: "Année" },
  { label: "Type de Vin", name: "wine_type", placeholder: "Type de Vin" },
  {
    label: "Pays d'origine",
    name: "origin_country",
    placeholder: "Pays d'origine",
  },
  { label: "Région", name: "region", placeholder: "Région" },
  { label: "Description", name: "description", placeholder: "Description" },
  { label: "Prix", name: "price", placeholder: "Prix" },
  { label: "Quantité", name: "quantity", placeholder: "Quantité" },
  { label: "Image", name: "image", placeholder: "Image", type: "file" },
];

const WineFormInputs: React.FC<WineFormInputsProps> = ({
  dataWine,
  handleChange,
  handleFileChange,
  inputRef,
}) => {
  return (
    <div className="flex flex-wrap justify-center">
      {tableInputs.map((input, index) => (
        <div className="flex flex-col m-3" key={index}>
          <label className="pb-1" htmlFor={input.name}>
            {input.label}
          </label>
          {input.type === "file" ? (
            <input
              className="border py-1 pl-2 rounded"
              type="file"
              ref={inputRef}
              name={input.name}
              onChange={handleFileChange}
              placeholder={input.placeholder}
            />
          ) : (
            <input
              className="border py-1 pl-2 rounded"
              type="text"
              name={input.name}
              value={dataWine[input.name] as string}
              onChange={handleChange}
              placeholder={input.placeholder}
            />
          )}
        </div>
      ))}
      <button onClick={() => console.warn(inputRef)}>press me </button>
    </div>
  );
};

export default WineFormInputs;

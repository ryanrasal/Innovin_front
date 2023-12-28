import { inputSignUp } from "@/interfaces/SignUp";
import { MapPin } from "lucide-react";

interface Props {
  handleChangeSignUp: (e: { target: { name: string; value: string } }) => void;
  codePostal: string;
  selectedVille: string;
  handleCodePostalChange: () => void;
  handleVilleChange: () => void;
  villes: any;
  inputSignUp: any;
}

export default function SignUpIdentity({
  codePostal,
  handleCodePostalChange,
  selectedVille,
  handleVilleChange,
  villes,
  inputSignUp,
  handleChangeSignUp,
}: Props) {
  return (
    <div className="bg-slate-200">
      <p className="text-xl pl-20 font-semibold py-2">Votre identité</p>
      <div className="flex md:flex-wrap flex-col md:flex-row md:w-full md:px-72 md:pb-8 ">
        {inputSignUp.slice(0, 4).map((field: inputSignUp) => (
          <div
            className="flex md:justify-center mx-auto items-center "
            key={field.name}
          >
            {field.icon}
            <input
              onChange={handleChangeSignUp}
              name={field.name}
              placeholder={field.placeholder}
              className="m-5 rounded-md shadow border py-2 px-1"
            />
          </div>
        ))}
        <div className="flex md:justify-center ml-3 mx-auto items-center">
          <MapPin />
          <input
            type="text"
            id="codePostal"
            name="codePostal"
            className="m-5 rounded-md shadow border py-2 px-1"
            placeholder="Code Postal"
            value={codePostal}
            onChange={handleCodePostalChange}
          />
        </div>
        <div className="flex ml-3 mx-auto items-center">
          <MapPin />
          <select
            id="ville"
            name="ville"
            value={selectedVille}
            onChange={handleVilleChange}
            className="m-5 rounded-md shadow border py-2 px-1"
          >
            <option value="">
              {selectedVille === "" ? "Sélectionner une ville" : selectedVille}
            </option>
            {villes?.map((ville: string, index: number) => (
              <option className="text-red-500" key={index}>
                {ville}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

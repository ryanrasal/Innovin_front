import inputSignUp from "./InputSignUp";
import SignUpIdentity from "./SignUpIdentity";
import SignUpInfoContact from "./SignUpInfoContact";
import SignUpPassword from "./SignUpPassword";
import { PropsSignUp } from "@/interfaces/SignUp";
import SignUpButtons from "./SignUpButtons";

export default function SignUp({
  handleChangeSignUp,
  submitSignUp,
  handleConfirmPassWord,
  handleShowForm,
  codePostal,
  handleCodePostalChange,
  selectedVille,
  handleVilleChange,
  villes,
}: PropsSignUp) {
  return (
    <div className=" flex justify-center w-full flex-col">
      <h4 className="text-center text-3xl font-bold py-5 px-10">
        Bienvenue dans l'équipe !
      </h4>
      {/* IDENTITE */}
      <SignUpIdentity
        codePostal={codePostal}
        handleCodePostalChange={handleCodePostalChange}
        selectedVille={selectedVille}
        handleVilleChange={handleVilleChange}
        villes={villes}
        inputSignUp={inputSignUp}
        handleChangeSignUp={handleChangeSignUp}
      />
      {/* INFORMATIONS DE CONTACT */}
      <SignUpInfoContact
        inputSignUp={inputSignUp}
        handleChangeSignUp={handleChangeSignUp}
      />
      {/* MOT DE PASSE */}
      <SignUpPassword
        inputSignUp={inputSignUp}
        handleConfirmPassWord={handleConfirmPassWord}
        handleChangeSignUp={handleChangeSignUp}
      />
      <SignUpButtons
        submitSignUp={submitSignUp}
        handleShowForm={handleShowForm}
      />
    </div>
  );
}

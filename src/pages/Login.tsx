import Onepi from "../assets/SignUp/Onepi.jpg";
import SignUp from "../components/Login/SignUp";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "../components/Login/SignIn";
import { useSigninFunctions } from "@/functions/Login/SignIn";
import { useSignupFunctions } from "@/functions/Login/Signup";

export default function Login() {
  const { connexion, handleChangeSignIn, showPassword, setShowPassword } =
    useSigninFunctions();
  const {
    toggleForm,
    handleShowForm,
    handleChangeSignUp,
    submitSignUp,
    handleConfirmPassWord,
    handleVilleChange,
    selectedVille,
    codePostal,
    villes,
    handleCodePostalChange
  } = useSignupFunctions();

  return (
    <div className="flex">
      {toggleForm ? (
        <div className="flex w-full">
          <SignIn
            connexion={connexion}
            handleChangeSignIn={handleChangeSignIn}
            handleShowForm={handleShowForm}
            setShowPassword={setShowPassword}
            showPassword={showPassword}
          />
          <div
            className="bg-contain bg-center w-full bg-no-repeat h-[92vh] hidden md:block"
            style={{ backgroundImage: `url(${Onepi})` }}
          />
        </div>
      ) : (
        <SignUp
          handleChangeSignUp={handleChangeSignUp}
          submitSignUp={submitSignUp}
          handleConfirmPassWord={handleConfirmPassWord}
          handleShowForm={handleShowForm}
          handleVilleChange={handleVilleChange}
          selectedVille={selectedVille}
          codePostal={codePostal}
          villes={villes}
          handleCodePostalChange={handleCodePostalChange}
        />
      )}
    </div>
  );
}

import { inputSignUp } from "@/interfaces/SignUp";

interface Props {
  handleConfirmPassWord: (e: {
    target: { name: string; value: string };
  }) => void;
  handleChangeSignUp: (e: {
    target: { name: string; value: string };
  }) => void;
  inputSignUp: any;
}

export default function SignUpPassword({
  inputSignUp,
  handleConfirmPassWord,
  handleChangeSignUp,
}: Props) {
  return (
    <div className="bg-slate-200">
      <p className="text-xl pl-20 font-semibold py-2">
        Mot de passe de votre compte
      </p>
      <div className="flex md:flex-wrap flex-col md:flex-row md:w-full md:px-72 md:pb-8 ">
        {inputSignUp.slice(6, 8).map((field: inputSignUp) => (
          <div
            className="flex md:justify-center mx-auto items-center "
            key={field.name}
          >
            {field.icon}
            <input
              onChange={field.name === "passwordConfirm" ? handleConfirmPassWord : handleChangeSignUp}
              name={field.name}
              placeholder={field.placeholder}
              className="m-5 rounded-md shadow border py-2 px-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

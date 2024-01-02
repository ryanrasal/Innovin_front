import { inputSignUp } from "@/interfaces/SignUp";

interface Props {
  handleChangeSignUp: (e: { target: { name: string; value: string } }) => void;
  inputSignUp: any;
}

export default function SignUpInfoContact({ inputSignUp, handleChangeSignUp }: Props) {
  return (
    <div className="bg-white">
      <p className="text-xl pl-20 font-semibold py-2">
        Vos informations de contact
      </p>
      <div className="flex md:flex-wrap flex-col md:flex-row md:w-full md:px-72 md:pb-8 ">
        {inputSignUp.slice(4, 6).map((field: inputSignUp) => (
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
      </div>
    </div>
  );
}

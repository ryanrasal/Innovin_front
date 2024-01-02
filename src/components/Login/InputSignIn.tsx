import React from "react";
import { Mail, KeyRound } from "lucide-react";

const InputSignIn = [
  { name: "email", label: "Email", placeholder: "Email", icon: <Mail /> },
  {
    name: "password",
    label: "Mot de passe",
    placeholder: "Mot de passe",
    icon: <KeyRound />,
  },
];

export default InputSignIn;

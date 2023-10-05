import { UserCircle, Mail, KeyRound, MapPin, Phone } from "lucide-react";
import React from "react";

const inputSignUp = [
  {
    name: "firstname",
    label: "Prénom",
    placeholder: "Prénom",
    icon: <UserCircle />,
  },
  { name: "lastname", label: "Nom", placeholder: "Nom", icon: <UserCircle /> },
  {
    name: "username",
    label: "Pseudo",
    placeholder: "Pseudo",
    icon: <UserCircle />,
  },
  { name: "email", label: "Email", placeholder: "Email", icon: <Mail /> },
  {
    name: "password",
    label: "Mot de passe",
    placeholder: "Mot de passe",
    icon: <KeyRound />,
  },
  {
    name: "passwordConfirm",
    label: "passwordConfirm",
    placeholder: "Confirmer mot de passe",
    icon: <KeyRound />,
  },
  {
    name: "address",
    label: "Adresse",
    placeholder: "Adresse",
    icon: <MapPin />,
  },
  {
    name: "phone",
    label: "Numéro de Téléphone",
    placeholder: "Numéro de téléphone",
    icon: <Phone />,
  },
];

export default inputSignUp;

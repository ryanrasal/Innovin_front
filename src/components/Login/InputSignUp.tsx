import { UserCircle, Mail, KeyRound, MapPin, Phone } from "lucide-react";

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
  {
    name: "address",
    label: "Adresse",
    placeholder: "Adresse",
    icon: <MapPin />,
  },
  { name: "email", label: "Email", placeholder: "Email", icon: <Mail /> },

  {
    name: "phone",
    label: "Numéro de Téléphone",
    placeholder: "Numéro de téléphone",
    icon: <Phone />,
  },
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
];

export default inputSignUp;

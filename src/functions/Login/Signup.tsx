import { useEffect, useState } from "react";
import ApiHelper from "@/services/apiHelper";
import { User } from "@/interfaces/User";
import { useToast } from "@/components/ui/use-toast";

export function useSignupFunctions() {
  const { toast } = useToast();
  const [codePostal, setCodePostal] = useState("");
  const [villes, setVilles] = useState([]);
  const [selectedVille, setSelectedVille] = useState("");
  const [toggleForm, setToggleForm] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dataSignUp, setDataSignUp] = useState<User>({
    firstname: "",
    lastname: "",
    username: "",
    role: "user",
    email: "",
    password: "",
    address: "",
    phone: "",
    postalCode: "",
    city: "",
  });

  const requiredFields = [
    "email",
    "firstname",
    "lastname",
    "address",
    "password",
    "phone",
    "username",
    "city",
    "postalCode",
  ];

  // toggle formulaire inscription et connexion
  const handleShowForm = () => {
    setToggleForm(!toggleForm);
  };

  // récupere inputConfirmPassword
  const handleConfirmPassWord = (e: { target: { value: string } }) => {
    setConfirmPassword(e.target.value);
  };

  // remplit le state dataSignUp
  const handleChangeSignUp = (e: {
    target: { name: string; value: string };
  }) => {
    setDataSignUp({ ...dataSignUp, [e.target.name]: e.target.value });
  };

  const handleVilleChange = (e: { target: { value: string } }) => {
    setSelectedVille(e.target.value);
    setDataSignUp({ ...dataSignUp, city: e.target.value });
  };

  const handleCodePostalChange = (e: { target: { value: string } }) => {
    setCodePostal(e.target.value);
    setDataSignUp({ ...dataSignUp, postalCode: e.target.value });
  };

  // inscription du user
  const submitSignUp = () => {
    console.warn(confirmPassword)
    console.warn(dataSignUp.password)
    if (confirmPassword !== dataSignUp.password) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Les mots de passe sont différents.",
      });
    } else if (requiredFields.every((field) => dataSignUp[field])) {
      ApiHelper("users", "post", dataSignUp).then((res: { status: number }) => {
        if (res.status === 201) {
          toast({
            title: "Succés",
            description: "Votre compte a bien été créé.",
          });
          handleShowForm();
        }
        if (res.status === 409) {
          toast({
            variant: "destructive",
            title: "Erreur",
            description: "Cette adresse mail est déjà utilisée.",
          });
        }
      });
    } else {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Informations Manquantes.",
      });
    }
  };

  const fetchVillesByCodePostal = async () => {
    try {
      const response = await fetch(
        `https://geo.api.gouv.fr/communes?codePostal=${codePostal}`
      );
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        const villesData = data.map((commune: any) => commune.nom);

        setVilles(villesData);
      } else {
        setVilles([]);
      }
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des villes :",
        error.message
      );
      toast.error("Erreur lors de la récupération des villes.");
    }
  };

  // Mettre à jour les villes lorsque le code postal change
  useEffect(() => {
    fetchVillesByCodePostal();
  }, [codePostal]);

  return {
    codePostal,
    setCodePostal,
    villes,
    setVilles,
    selectedVille,
    setSelectedVille,
    toggleForm,
    setToggleForm,
    confirmPassword,
    setConfirmPassword,
    dataSignUp,
    setDataSignUp,
    handleShowForm,
    handleConfirmPassWord,
    handleChangeSignUp,
    handleVilleChange,
    handleCodePostalChange,
    submitSignUp,
  };
}

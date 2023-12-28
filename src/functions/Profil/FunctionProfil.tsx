import { useEffect, useState } from "react";
import ApiHelper from "@/services/apiHelper";
import { useUserContext } from "@/services/Context/UserContext";
import { useToast } from "@/components/ui/use-toast";

export function useFunctionProfil() {
    const { toast } = useToast();
    const { user, handleReloadUser } = useUserContext();
    const [dataOrder, setDataOrder] = useState();
  
    const userInformations = [
      {
        label: "Prénom",
        placeholder: user?.firstname,
        key: "firstname",
      },
      {
        label: "Nom de famille",
        placeholder: user?.lastname,
        key: "lastname",
      },
      {
        label: "Nom d'utilisateur",
        placeholder: user?.username,
        key: "username",
      },
      {
        label: "Email",
        placeholder: user?.email,
        key: "email",
      },
      {
        label: "Adresse",
        placeholder: user?.address,
        key: "address",
      },
      {
        label: "Code postal",
        placeholder: user?.postalCode,
        key: "postalCode",
      },
      {
        label: "Ville",
        placeholder: user?.city,
        key: "city",
      },
      {
        label: "Téléphone",
        placeholder: user?.phone,
        key: "phone",
      },
    ];
    const [dataFormUser, setDataFormUser] = useState({
      firstname: user?.firstname,
      lastname: user?.lastname,
      username: user?.username,
      email: user?.email,
      address: user?.address,
      postalCode: user?.postalCode,
      city: user?.city,
      phone: user?.phone,
    });
  
    // met à jours les informations du user
    useEffect(() => {
      if (user) {
        ApiHelper(`carts/isOrder/${user.id}`, "GET").then((res) =>
          setDataOrder(res)
        );
        setDataFormUser({
          firstname: user.firstname || "",
          lastname: user.lastname || "",
          username: user.username || "",
          email: user.email || "",
          address: user.address || "",
          postalCode: user.postalCode || "",
          city: user.city || "",
          phone: user.phone || "",
        });
      }
    }, [user]);
  
  
    // rempli dataFormUser avec la saisie des inputs
    const handleInputChange = (label: string, value:string) => {
      setDataFormUser((prevDataFormUser) => ({
        ...prevDataFormUser,
        [label]: value,
      }));
    };
  
    // envoi à les nouvelles information du user
    const onSubmit = () => {
      ApiHelper(`users/${user?.id}`, "PUT", dataFormUser)
        .then((res) => {
          console.log("API Response:", res);
          if (res.status === 409) {
            toast({
              variant: "destructive",
              title: "Erreur",
              description: "Cette adresse mail est déjà utilisée.",
            });
          } else if (res.status === 200) {
            toast({
              title: "succès",
              description: "Votre compte à bien été modifié",
            });
            localStorage.removeItem("userConnect");
            localStorage.setItem(
              "userConnect",
              JSON.stringify(res.message.userConnect)
            );
            handleReloadUser();
          }
        })
        .catch((error) => console.warn(error));
    };
  return {
    dataOrder,
    userInformations,
    handleInputChange,
    onSubmit,
    user,
  };
}

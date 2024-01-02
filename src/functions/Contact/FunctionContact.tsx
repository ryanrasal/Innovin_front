import { useState } from "react";
import ApiHelper from "@/services/apiHelper";
import { useToast } from "@/components/ui/use-toast";

export function useFunctionContact() {
  const { toast } = useToast();
  const [dataMessage, setDataMessage] = useState({
    email: "",
    subject: "",
    content: "",
    isRead: false,
  });

  // Fonction pour gérer les changements dans les champs d'entrée
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setDataMessage((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await ApiHelper("messages", "POST", dataMessage).then(
      (res: { status: number }) => {
        if (res.status === 201) {
          toast({
            variant: "default",
            title: "Confirmation",
            description: `Votre message à bien été envoyé`,
          });
          setDataMessage({
            email: "",
            subject: "",
            content: "",
            isRead: false,
          });
        }
        if (res.status === 500) {
          toast({
            variant: "destructive",
            title: "Erreur",
            description: `Erreur lors de l'envoi de votre message`,
          });
        }
      }
    );
  };

  const formFields = [
    {
      id: "email",
      label: "Votre email",
      type: "email",
      placeholder: "nom@exemple.com",
    },
    {
      id: "subject",
      label: "Sujet",
      type: "text",
      placeholder: "exemple: Problème lors de ma commande",
    },
    {
      id: "content",
      label: "Votre message",
      type: "text",
      placeholder: "exemple: Problème lors de ma commande",
    },
  ];

  return {
    handleChange,
    handleSubmit,
    dataMessage,
    formFields
  };
}

import { useEffect, useState } from "react";
import ApiHelper from "@/services/apiHelper";
import { Cart } from "@/interfaces/Cart";
import { useUserContext } from "@/services/Context/UserContext";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export function useCartFunctions() {
  const { toast } = useToast();
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [dataCart, setDataCart] = useState<Cart | null>(null);
  const [reloadCart, setReloadCart] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [total, setTotal] = useState<number>(0);
  const [disableButton, setDisableButton] = useState(false);
  const [dataPaiement, setDataPaiement] = useState({
    methode: "",
    name: "",
    number: "",
    expireMonth: "",
    expireYear: "",
    cvc: "",
  });

  const handleChangePaiement = (e: any) => {
    setDataPaiement({ ...dataPaiement, [e.target.name]: e.target.value });
  };

  const toggleStepOrderNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const toggleStepOrderPrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  useEffect(() => {
    if (user) {
      ApiHelper(`carts/${user.id}`, "get").then((res: Cart) => {
        setDataCart(res);
      });
    }
  }, [user, reloadCart]);

  const toogleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  // passe à l'étape 3
  const passStepThree = () => {
    if (
      dataPaiement.cvc &&
      dataPaiement.expireMonth &&
      dataPaiement.expireYear &&
      dataPaiement.methode &&
      dataPaiement.name &&
      dataPaiement.number
    ) {
      toggleStepOrderNext();
    } else {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Informations manquantes.",
      });
    }
  };

  // valide le panier
  const confirmationOrder = async () => {
    await ApiHelper(`carts/${user?.id}`, "PUT", null).then(() => {
      setDisableButton(!disableButton);
      toast({
        title: "Succès",
        description:
          "Commande validée, retrouver votre commande dans Profil > Commandes",
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    });
  };

  // delete un vin du panier
  const handleDelete = (id: number) => {
    ApiHelper(`cartwines/${id}`, "DELETE", { userId: user?.id })
      .then(() => {
        setReloadCart(!reloadCart);
        toogleModal();
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression :", error);
      });
  };

  // calcul la somme total du panier
  useEffect(() => {
    let sum = 0;
    if (dataCart && dataCart.content && dataCart.content.length > 0) {
      dataCart.content.forEach((item) => {
        sum += item.price * item.quantity;
      });
    }
    const totalSum = Number(sum.toFixed(2));
    setTotal(totalSum);
  }, [dataCart]);

  return {
    user,
    dataCart,
    modalIsOpen,
    handleDelete,
    total,
    toggleStepOrderNext,
    toggleStepOrderPrev,
    currentStep,
    handleChangePaiement,
    setDataPaiement,
    dataPaiement,
    passStepThree,
    disableButton,
    confirmationOrder,
  };
}

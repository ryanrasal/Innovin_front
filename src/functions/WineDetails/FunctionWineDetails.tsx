import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Wine } from "@/interfaces/Wine";
import { useUserContext } from "@/services/Context/UserContext";
import ApiHelper from "@/services/apiHelper";

export function useFunctionWineDetails() {
  const { toast } = useToast();
  const { id } = useParams();
  const { user } = useUserContext();
  const [quantitiesSelected, setQuantitiesSelected] = useState<string>("1");
  const [data, setData] = useState<null | Wine>(null);
  const [dataCartWineFetch, setDataCartWineFetch] = useState<
    { id: number } | undefined
  >(undefined);

  useEffect(() => {
    if (user) {
      ApiHelper(`carts/${user?.id}`, "GET").then((reponseData) => {
        setDataCartWineFetch(reponseData);
      });
    }
  }, []);

  useEffect(() => {
    ApiHelper(`wines/${id}`, "GET").then((reponseData) => setData(reponseData));
  }, [id]);

  const quantity = [...Array(data?.quantity).keys()];

  const priceMultiple: string | null =
    (data &&
      (parseFloat(data.price) * parseInt(quantitiesSelected))?.toFixed(2)) ||
    null;

  const tvaAmount = priceMultiple ? parseFloat(priceMultiple) * 0.2 : 0;

  const withoutTva = priceMultiple ? parseFloat(priceMultiple) - tvaAmount : 0;

  // ajoute au panier le nombre de bouteille selectionnés
  const handleCart = () => {
    if (dataCartWineFetch?.id && data?.id && quantitiesSelected) {
      const wineId = data.id;
      const cartId = dataCartWineFetch.id;
      const parsedQuantity = parseInt(quantitiesSelected, 10);

      if (!isNaN(parsedQuantity) && cartId !== null) {
        ApiHelper(`cartwines`, "POST", {
          cart_id: cartId,
          wine_id: wineId,
          quantity: parsedQuantity,
        })
          .then(() => {
            toast({
              title: "Succès",
              description: `✅ ${quantitiesSelected} bouteille(s) de ${data.name} ont été ajoutées à votre panier.`,
            });
          })
          .catch((error) => {
            toast({
              variant: "destructive",
              title: "Erreur",
              description: error,
            });
          });
      } else {
        console.warn("Invalid quantity or cart ID is null");
      }
    }
  };

  return {
    setQuantitiesSelected,
    quantity,
    withoutTva,
    handleCart,
    user,
    data,
    priceMultiple,
  };
}

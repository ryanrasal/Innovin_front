import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useToast } from "@chakra-ui/react";
import ApiHelper from "../services/apiHelper";
import DescriptionDetails from "../components/WineDetails/DescriptionDetails";
import BuyDetails from "../components/WineDetails/BuyDetais";
import DescriptifDetails from "../components/WineDetails/DecriptifDetails";

const { VITE_BACKEND_URL } = import.meta.env;

interface Wine {
  id: number;
  best_seller: number;
  description: string;
  grape_variety: string;
  image: string;
  name: string;
  origin_country: string;
  price: number;
  region: string;
  wine_type: string;
  year: number;
}

export default function WineDetails() {
  const { id } = useParams();
  //   const toast = useToast();

  const [wineDetail, setWineDetail] = useState<Wine | undefined>(undefined);

  useEffect(() => {
    ApiHelper(`wines/${id}`, "get").then((data) => {
      setWineDetail(data);
    });
  }, [id]);

  const quantity = [...Array(31).keys()];

  const [quantitiesSelected, setQuantitiesSelected] = useState<string>("1");

  const priceMultiple =
    wineDetail && (wineDetail.price * parseInt(quantitiesSelected)).toFixed(2);

  const tvaAmount = priceMultiple * 0.2;

  const withoutTva = priceMultiple - tvaAmount;

  //   const toastSuccess = () => {
  //     toast({
  //       title: `${quantitiesSelected} bouteille(s) de ${wineDetail.name} ont été ajoutées à votre panier.`,
  //       status: "success",
  //       duration: 4000,
  //       isClosable: true,
  //     });
  //   };

    // const handleCart = () => {
    //   let cart = null;
    //   ApiHelper("carts", "get").then(async (res) => {
    //     // récupère les paniers, si aucun panier est là, créer un nouveau panier sinon rempli
    //     if (res.data.length === 0) {
    //       const { data } = await ApiHelper("carts", "post", {
    //         is_order: false,
    //       });
    //       [cart] = data;
    //     } else {
    //       [cart] = res.data;
    //     }
    //     const duplicateItem = cart.content.find(
    //       (wine) => wine.wine_id === parseInt(id, 10)
    //     );
    //     // si un item est en double, ajoute une nouvelle quantité au même item sinon créer un nouveau item dans le panier
    //     if (duplicateItem) {
    //       ApiHelper(`cartwines/${duplicateItem.cart_wine_id}`, "put", {
    //         quantity: duplicateItem.quantity + parseInt(quantitiesSelected, 10),
    //       }).then(() => {
    //         toastSuccess();
    //       });
    //     } else {
    //       ApiHelper("cartwines", "post", {
    //         cart_id: cart.id,
    //         wine_id: wineDetail.id,
    //         quantity: parseInt(quantitiesSelected, 10),
    //       }).then(() => {
    //         toastSuccess();
    //       });
    //     }
    //   });
    // };

  return (
    <div className="pt-20 px-4 md:px-0">
      {wineDetail && (
        <div>
          <div className="md:flex mb-10">
            <img
              className="md:h-[70vh] md:max-w-[30vw] h-[30vh] m-4 rounded-xl mx-auto"
              src={`${VITE_BACKEND_URL}/uploads/${wineDetail.image}`}
              alt=""
            />
            <DescriptionDetails wineDetail={wineDetail} />
            <BuyDetails
              wineDetail={wineDetail}
              setQuantitiesSelected={setQuantitiesSelected}
              priceMultiple={priceMultiple}
              quantity={quantity}
              withoutTva={withoutTva}
            />
          </div>
          <hr />
          <DescriptifDetails wineDetail={wineDetail} />
        </div>
      )}
    </div>
  );
}

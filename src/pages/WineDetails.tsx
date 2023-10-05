/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DescriptionDetails from "../components/WineDetails/DescriptionDetails";
import BuyDetails from "../components/WineDetails/BuyDetais";
import DescriptifDetails from "../components/WineDetails/DecriptifDetails";
import { useUserContext } from "../services/Context/UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApiHelper from "../services/apiHelper";

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
  const { user } = useUserContext();
  const [quantitiesSelected, setQuantitiesSelected] = useState(1);
  const [data, setData] = useState<null | Wine>(null);
  const [dataCartWineFetch, setDataCartWineFetch] = useState();

  useEffect(() => {
    fetch(`${VITE_BACKEND_URL}` + `carts/${user?.id}`)
      .then((response) => response.json())
      .then((reponseData) => {
        setDataCartWineFetch(reponseData);
      });
  }, []);

  useEffect(() => {
    fetch(`${VITE_BACKEND_URL}` + `wines/${id}`)
      .then((response) => response.json())
      .then((reponseData) => {
        setData(reponseData);
      });
  }, [id]);

  const quantity = [...Array(31).keys()];

  const priceMultiple =
    data && (data?.price * parseInt(quantitiesSelected)).toFixed(2);

  const tvaAmount = priceMultiple * 0.2;

  const withoutTva = priceMultiple - tvaAmount;

  const handleCart = () => {
    if (dataCartWineFetch.id && data.id && quantitiesSelected) {
      ApiHelper("cartwines", "post", {
        cart_id: dataCartWineFetch.id,
        wine_id: data.id,
        quantity: parseInt(quantitiesSelected, 10),
      }).then(() => {
        toast(
          `✅ ${quantitiesSelected} bouteille(s) de ${data?.name} ont été ajoutées à votre panier.`,
          {
            autoClose: 3000,
          },
        );
      });
    }
  };

  return (
    <div className="pt-2 px-4 md:px-0">
      {data && (
        <>
          <div className="md:flex mb-10">
            <img
              className="md:h-[70vh] md:max-w-[30vw] h-[30vh] m-4 rounded-xl mx-auto"
              src={`${VITE_BACKEND_URL}/uploads/${data.image}`}
              alt=""
            />
            <DescriptionDetails data={data} />
            <BuyDetails
              data={data}
              setQuantitiesSelected={setQuantitiesSelected}
              priceMultiple={priceMultiple}
              quantity={quantity}
              withoutTva={withoutTva}
              handleCart={handleCart}
            />
          </div>
          <hr />
          <DescriptifDetails data={data} />
        </>
      )}
    </div>
  );
}

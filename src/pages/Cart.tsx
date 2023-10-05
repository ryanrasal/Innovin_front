import React, { useEffect, useState } from "react";
import { useUserContext } from "../services/Context/UserContext";
import ApiHelper from "../services/apiHelper";
import ContentCart from "../components/Cart/ContentCart";

interface CartItem {
  cart_wine_id: number;
  image: string;
  name: string;
  origin_country: string;
  price: number;
  quantity: number;
  wine_id: number;
}

interface Cart {
  id: number;
  is_order: number;
  user_id: number;
  content: CartItem[];
}

export default function Cart() {
  const { user } = useUserContext();
  const [dataCart, setDataCart] = useState<null | Cart>(null);
  const [selectedWine, setSelectedWine] = useState(null);
  const [reloadCart, setReloadCart] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (user) {
      ApiHelper(`carts/${user.id}`, "get").then((res: Response) => {
        setDataCart(res);
      });
    }
  }, [user, reloadCart]);

  const openModal = (item: CartItem) => {
    setSelectedWine(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = (id: number) => {
    ApiHelper(`cartwines/${id}`, "delete")
      .then(() => {
        setReloadCart(!reloadCart);
        closeModal();
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression :", error);
      });
  };

  return (
    <div>
      {/* <button onClick={() => console.warn(dataCart)}>coucou</button> */}
      <br />
      <ContentCart
        openModal={openModal}
        closeModal={closeModal}
        dataCart={dataCart}
        modalIsOpen={modalIsOpen}
        setSelectedWine={setSelectedWine}
        selectedWine={selectedWine}
        handleDelete={handleDelete}
      />
    </div>
  );
}

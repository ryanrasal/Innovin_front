import React from "react";
import { XCircle } from "lucide-react";
import ModalDeletedWine from "./ModalDeletedWine";

interface Item {
  cart_wine_id: number;
  image: string;
  name: string;
  origin_country: string;
  price: number;
  quantity: number;
  wine_id: number;
}

const { VITE_BACKEND_URL } = import.meta.env;

export default function ContentCart({
  dataCart,
  openModal,
  modalIsOpen,
  closeModal,
  selectedWine,
  setSelectedWine,
  handleDelete,
}) {
  return (
    <div className="md:w-2/3 md:px-10">
      <h1 className=" tracking-wider pb-4 mb-4 text-2xl font-bold shadow pl-3">
        Panier
      </h1>
      <div className=" md:h-[70vh] md:overflow-auto">
        {dataCart?.content[0].name === null ? (
          <p>Votre panier est vide.</p>
        ) : (
          dataCart?.content?.map((item: Item) => (
            <div
              key={item.name}
              className="flex justify-between md:grid md:grid-cols-5 shadow-sm items-center p-3"
            >
              <img
                className="md:min-h-32 md:max-h-32 min-h-20 max-h-20 my-1  rounded-lg "
                src={`${VITE_BACKEND_URL}/uploads/${item?.image}`}
                alt=""
              />
              <p className="md:m-5">{item?.name}</p>
              <p className="md:m-5">Quantité: {item?.quantity}</p>
              <p className="md:m-5">
                {Math.round(item?.price * item?.quantity * 100) / 100} €
              </p>
              <button
                className="md:ml-auto"
                onClick={() => {
                  openModal(item);
                }}
              >
                <XCircle color="#d50101" />
              </button>
            </div>
          ))
        )}
        <ModalDeletedWine
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          selectedWine={selectedWine}
          setSelectedWine={setSelectedWine}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

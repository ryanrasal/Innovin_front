import React from "react";
import Modal from "react-modal";

interface Item {
  cart_wine_id: number;
  image: string;
  name: string;
  origin_country: string;
  price: number;
  quantity: number;
  wine_id: number;
}

interface ModalDeletedWineProps {
  closeModal: () => void;
  modalIsOpen: boolean;
  selectedWine: Item;
  setSelectedWine: () => void;
  handleDelete: (selectedWine: number) => void;
}

export default function ModalDeletedWine({
  closeModal,
  modalIsOpen,
  selectedWine,
  setSelectedWine,
  handleDelete,
}: ModalDeletedWineProps) {
  return (
    <Modal
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          border: "1px solid #ccc",
          borderRadius: "8px",
          paddingRight: "20px",
          paddingLeft: "20px",
          width: "500px",
          height: "25vh",
          margin: "auto auto",
        },
      }}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Exemple de modale"
    >
      <h2 className="mx-10 text-center uppercase">
        Voulez-vous vraiment supprimer {selectedWine?.quantity} bouteilles de
        votre panier ?
      </h2>
      <div className="flex  items-center my-2 justify-center px-6">
        <button
          className="bg-red-500 text-white background-transparent font-bold uppercase rounded px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => {
            closeModal();
            setSelectedWine(null);
          }}
        >
          Annuler
        </button>
        <button
          className="bg-green-500 text-white background-transparent font-bold uppercase rounded px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => handleDelete(selectedWine.cart_wine_id)}
        >
          Supprimer
        </button>
      </div>
    </Modal>
  );
}

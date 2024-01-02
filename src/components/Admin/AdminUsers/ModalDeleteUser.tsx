import { User } from "@/interfaces/User";
import Modal from "react-modal";

interface ModalDeleteUserProps {
    modalUserIsOpen: boolean;
    toggleShowModal: () => void;
    userSelected: User | undefined;
    deleteUser: () => void;
  }

export default function ModalDeleteUser({modalUserIsOpen, toggleShowModal, userSelected, deleteUser } : ModalDeleteUserProps ) {
    return (
        <Modal
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        isOpen={modalUserIsOpen}
        onRequestClose={toggleShowModal}
        contentLabel="Example Modal"
      >
        <h2 className="text-center text-xl">Suppression D'un Utilisateur</h2>
        <p>
          Voulez-Vous vraiment supprimer {userSelected?.firstname}{" "}
          {userSelected?.lastname}
        </p>
        <button onClick={toggleShowModal}>close</button>
        <button onClick={deleteUser}>supprimer</button>
      </Modal>
    );
}

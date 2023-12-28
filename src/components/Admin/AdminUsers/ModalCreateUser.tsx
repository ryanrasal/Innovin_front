import Modal from "react-modal";
import { UserFormInputs } from "./InputsFormUsers";
import { Button } from "@/components/ui/button";
import { User } from "@/interfaces/User";

interface ModalCreateUserProps {
  modalCreateIsOpen: boolean;
  toggleShowModalCreateUser: () => void;
  dataUser: User;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
}

export default function ModalCreateUser({
  modalCreateIsOpen,
  toggleShowModalCreateUser,
  dataUser,
  handleChange,
  addUser,
}: ModalCreateUserProps) {
  return (
    <Modal
      className="absolute top-1/2 left-1/2 py-4 transform bg-white border shadow -translate-x-1/2 -translate-y-1/2"
      isOpen={modalCreateIsOpen}
      onRequestClose={toggleShowModalCreateUser}
      contentLabel="Example Modal"
    >
      <h2 className="text-center underline text-xl py-4">
        Création D'un Utilisateur
      </h2>
      <UserFormInputs dataUser={dataUser} handleChange={handleChange} />
      <div className="flex justify-end">
        <Button variant="delete" onClick={toggleShowModalCreateUser}>
          Fermer
        </Button>
        <Button variant="create" onClick={addUser}>
          Ajouter
        </Button>
      </div>
    </Modal>
  );
}

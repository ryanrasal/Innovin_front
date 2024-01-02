import Modal from "react-modal";
import { Button } from "@/components/ui/button";
import WineFormInputs from "./InputsFormWine";
import { Wine } from "@/interfaces/Wine";

interface ModalCreateWineProps {
  modalCreateIsOpen: boolean;
  toggleShowModalCreateWine: () => void;
  dataWine: Wine;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addWine: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: string;
}

export default function ModalCreateWine({
  modalCreateIsOpen,
  toggleShowModalCreateWine,
  dataWine,
  handleChange,
  addWine,
  handleFileChange,
  inputRef,
}: ModalCreateWineProps) {
  return (
    <Modal
      className="absolute top-1/2 left-1/2 py-4 transform bg-white border shadow -translate-x-1/2 -translate-y-1/2"
      isOpen={modalCreateIsOpen}
      onRequestClose={toggleShowModalCreateWine}
      contentLabel="Example Modal"
    >
      <h2 className="text-center underline text-xl py-4">Création D'un Vin</h2>
      <WineFormInputs
        dataWine={dataWine}
        inputRef={inputRef}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
      />
      <div className="flex justify-end">
        <Button variant="delete" onClick={toggleShowModalCreateWine}>
          Fermer
        </Button>
        <Button variant="create" onClick={addWine}>
          Ajouter
        </Button>
      </div>
    </Modal>
  );
}

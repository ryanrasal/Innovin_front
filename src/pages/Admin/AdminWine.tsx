import ModalCreateWine from "@/components/Admin/AdminWines/ModalCreateWine";
import { WinesList } from "@/components/Admin/columns";
import { DataTable } from "@/components/Admin/data-table";
import { Button } from "@/components/ui/button";
import { useAdminWineFunctions } from "@/functions/AdminWine/FunctionAdminWine";
import Modal from "react-modal";

export default function AdminWine() {
  const {
    wines,
    wineSelected,
    modalWineIsOpen,
    modalCreateIsOpen,
    dataWine,
    deleteRowSelected,
    deleteWine,
    addWine,
    handleChange,
    toggleShowModal,
    inputRef,
    handleFileChange,
    toggleShowModalCreateWine,
  } = useAdminWineFunctions();

  const columnsWithProps = WinesList.map((column) => ({
    ...column,
  }));

  return (
    <div className="w-full mx-4">
      <h2 className="text-3xl text-center underline py-5">Liste des Vins</h2>
      <div className="flex py-5">
        <Button onClick={toggleShowModalCreateWine} variant="create">
          Ajouter un Nouveau Vin
        </Button>
      </div>
      <DataTable
        columns={columnsWithProps}
        data={wines}
        deleteRowSelected={deleteRowSelected}
      />
      {modalWineIsOpen && (
        <Modal
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          isOpen={modalWineIsOpen}
          onRequestClose={toggleShowModal}
          contentLabel="Example Modal"
        >
          <h2 className="text-center text-xl">Suppression D'un Vin</h2>
          <p>Voulez-Vous vraiment supprimer {wineSelected?.name} </p>
          <button onClick={toggleShowModal}>close</button>
          <button onClick={deleteWine}>supprimer</button>
          <div>I am a modal</div>
        </Modal>
      )}
      {modalCreateIsOpen && (
        <ModalCreateWine
          toggleShowModalCreateWine={toggleShowModalCreateWine}
          dataWine={dataWine}
          addWine={addWine}
          inputRef={inputRef}
          modalCreateIsOpen={modalCreateIsOpen}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
        />
      )}
    </div>
  );
}

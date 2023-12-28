import { usersList } from "@/components/Admin/columns";
import { DataTable } from "@/components/Admin/data-table";
import { useAdminUserFunctions } from "@/functions/AdminUser/FunctionAdminUser";
import ModalCreateUser from "@/components/Admin/AdminUsers/ModalCreateUser";
import ModalDeleteUser from "@/components/Admin/AdminUsers/ModalDeleteUser";
import HeaderUser from "@/components/Admin/AdminUsers/HeaderUser";

export default function AdminUser() {
  const {
    users,
    userSelected,
    modalUserIsOpen,
    modalCreateIsOpen,
    dataUser,
    deleteRowSelected,
    toggleShowModalCreateUser,
    handleChange,
    addUser,
    deleteUser,
  } = useAdminUserFunctions();

  const columnsWithProps = usersList.map((column) => ({
    ...column,
  }));

  return (
    <div className="w-full mx-4">
      <HeaderUser toggleShowModalCreateUser={toggleShowModalCreateUser} />
      <DataTable
        columns={columnsWithProps}
        data={users}
        deleteRowSelected={deleteRowSelected}
      />
      {modalUserIsOpen && (
        <ModalDeleteUser
          deleteUser={deleteUser}
          toggleShowModal={toggleShowModal}
          modalUserIsOpen={modalUserIsOpen}
          userSelected={userSelected}
        />
      )}
      {modalCreateIsOpen && (
        <ModalCreateUser
          modalCreateIsOpen={modalCreateIsOpen}
          toggleShowModalCreateUser={toggleShowModalCreateUser}
          dataUser={dataUser}
          handleChange={handleChange}
          addUser={addUser}
        />
      )}
    </div>
  );
}

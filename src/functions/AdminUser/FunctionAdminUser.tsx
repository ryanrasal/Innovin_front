import { useEffect, useState } from "react";
import ApiHelper from "@/services/apiHelper";
import { User } from "@/interfaces/User";

export function useAdminUserFunctions() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState<User | undefined>();
  const [modalUserIsOpen, setIsOpen] = useState(false);
  const [modalCreateIsOpen, setModalCreateUser] = useState(false);
  const [reloadUser, setReloadUser] = useState(false);
  const [dataUser, setDataUser] = useState<User>({
    firstname: "",
    lastname: "",
    username: "",
    role: "user",
    email: "",
    password: "",
    address: "",
    phone: "",
    postalCode: "",
    city: "",
  });

  // récupère les datas des users
  useEffect(() => {
    const fetchData = async () => {
      const newData = await ApiHelper("users/notAdmin", "GET");
      setUsers(newData);
    };
    fetchData();
  }, [reloadUser]);

  // selectionne le user et ouvre la modal pour le delete
  const toggleShowModal = (user?: User) => {
    setUserSelected(user);
    setIsOpen(!modalUserIsOpen);
  };

  // ouvre la modal pour créer un user
  const toggleShowModalCreateUser = () => {
    setModalCreateUser(!modalCreateIsOpen);
  };

  // récupère la value des inputs dur formulaire pour créer un user
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataUser({
      ...dataUser,
      [name]: value,
    });
  };

  // post un user via l'API
  const addUser = async () => {
    await ApiHelper("users", "POST", dataUser);
    toggleShowModalCreateUser();
    setReloadUser(!reloadUser);
  };

  const deleteRowSelected = async (id: number) => {
    await ApiHelper(`users/${id}`, "DELETE");
    setReloadUser(!reloadUser);
  };

  return {
    users,
    userSelected,
    modalUserIsOpen,
    modalCreateIsOpen,
    reloadUser,
    dataUser,
    setUsers,
    deleteRowSelected,
    setUserSelected,
    setIsOpen,
    setModalCreateUser,
    setReloadUser,
    setDataUser,
    toggleShowModal,
    toggleShowModalCreateUser,
    handleChange,
    addUser,
  };
}

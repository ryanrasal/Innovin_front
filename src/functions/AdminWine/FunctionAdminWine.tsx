import { Wine } from "@/interfaces/Wine";
import ApiHelper from "@/services/apiHelper";
import { useEffect, useState, useRef } from "react";

export function useAdminWineFunctions() {
  const [wines, setWines] = useState<Wine[]>([]);
  const [modalWineIsOpen, setIsOpen] = useState(false);
  const [reloadWine, setReloadWine] = useState(false);
  const [modalCreateIsOpen, setModalCreateWine] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [dataWine, setDataWine] = useState<Wine>({
    name: "",
    year: "",
    wine_type: "",
    origin_country: "",
    region: "",
    description: "",
    price: "",
    quantity: "",
    image: null,
  });

  //récupère les vins
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiHelper(`wines`, "GET");
        setWines(response);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [reloadWine]);

  const toggleShowModalCreateWine = () => {
    setModalCreateWine(!modalCreateIsOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue =
      name === "year" || name === "price" ? parseFloat(value) : value;

    setDataWine({
      ...dataWine,
      [name]: newValue,
    });
  };

  // Ajoute un vin à la base de donnée
  const addWine = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (
      inputRef.current &&
      inputRef.current.files &&
      inputRef.current.files[0]
    ) {
      const myHeaders = new Headers();
      const wine = JSON.stringify(dataWine);
      const formData = new FormData();

      formData.append("wine", wine);
      formData.append("picture", inputRef.current.files[0]);
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
      };

      fetch(`http://localhost:8888/wines`, requestOptions)
        .then((response) => response.text())
        .then(() => {
          toggleShowModalCreateWine();
          setReloadWine(!reloadWine);
        })
        .catch(console.error);
    } else {
      console.error("No file selected");
    }
  };

  // Delete un vin de la base de donnée
  const deleteRowSelected = async (id: number) => {
    setReloadWine(!reloadWine);
    await ApiHelper(`wines/${id}`, "DELETE");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setDataWine({
      ...dataWine,
      image: file,
    });
  };

  return {
    wines,
    modalWineIsOpen,
    modalCreateIsOpen,
    dataWine,
    deleteRowSelected,
    addWine,
    setIsOpen,
    setDataWine,
    toggleShowModalCreateWine,
    handleChange,
    handleFileChange,
    inputRef,
  };
}

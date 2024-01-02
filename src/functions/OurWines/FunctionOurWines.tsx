import { useState, useEffect } from "react";

import { Wine } from "@/interfaces/Wine";

const { VITE_BACKEND_URL } = import.meta.env;

export function FunctionOurWines() {
  const [type, setType] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [selectedWine, setSelectedWine] = useState("");
  const [data, setData] = useState<null | Wine[]>(null);

  useEffect(() => {
    fetch(`${VITE_BACKEND_URL}` + `wines`)
      .then((response) => response.json())
      .then((reponseData) => {
        setData(reponseData);
      });
  }, []);

  const handleChangeWine = (e: any) => {
    setSelectedWine(e.target.value);
  };

  const filteredData = data?.filter((wine: Wine) => {
    return (
      (type === "" || wine?.wine_type?.includes(type)) &&
      (region === "" || wine?.region?.includes(region)) &&
      (selectedWine === "" ||
        wine.name.toLowerCase().includes(selectedWine.toLowerCase()))
    );
  });

  const wine_types = [...new Set(data?.map((wine: Wine) => wine.wine_type))];
  const regions = [...new Set(data?.map((wine: Wine) => wine.region))];

  return {
    type,
    setType,
    region,
    setRegion,
    selectedWine,
    setSelectedWine,
    data,
    setData,
    handleChangeWine,
    filteredData,
    wine_types,
    regions,
  };
}

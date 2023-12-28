import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ApiHelper from "@/services/apiHelper";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Wine {
  key: string;
  label: string;
  placeholder: string;
}

export default function AdminUpdateWine() {
  const { id } = useParams();
  const [wine, setWine] = useState();
  const [dataFormWine, setDataFormWine] = useState<Wine>({
    name: "",
    year: "",
    wine_type: "",
    origin_country: "",
    region: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    ApiHelper(`wines/${id}`, "GET").then((response) => {
      setWine(response);
      setDataFormWine({
        name: response?.name || "",
        year: response?.year || "",
        wine_type: response?.wine_type || "",
        origin_country: response?.origin_country || "",
        region: response?.region || "",
        description: response?.description || "",
        price: response?.price || "",
        image: response?.image || "",
      });
    });
  }, [id]);

  const wineInformations = [
    {
      label: "Nom du Vin",
      placeholder: wine?.name,
      key: "name",
    },
    {
      label: "Pays d'origine",
      placeholder: wine?.origin_country,
      key: "origin_country",
    },
    {
      label: "Description",
      placeholder: wine?.description,
      key: "description",
    },
    {
      label: "Prix",
      placeholder: wine?.price,
      key: "price",
    },
    {
      label: "Région",
      placeholder: wine?.region,
      key: "region",
    },
    {
      label: "Type de Vin",
      placeholder: wine?.wine_type,
      key: "wine_type",
    },
    {
      label: "Année",
      placeholder: wine?.year,
      key: "year",
    },
    {
      label: "Image",
      placeholder: wine?.image,
      key: "image",
    },
  ];

  return (
    <div>
        <h2 className="text-center uppercase my-5 text-2xl">Modification du vin</h2>
      <div className="px-20  grid grid-cols-3 gap-10">
        {wineInformations?.map((item: Wine, indexInformation: number) => (
          <div key={indexInformation} className="my-2">
            {item.label === "Image" ? (
              <Input type="file" className="mt-6" />
            ) : (
              <div>
                <label>{item.label}</label>
                <Input placeholder={item.placeholder} />
              </div>
            )}
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        onClick={() => console.warn(dataFormWine)}
        className="mx-20 my-10"
      >
        Enregistrer
      </Button>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ApiHelper from "@/services/apiHelper";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface Wine {
  key: string;
  label: string;
  placeholder: string;
}

export default function AdminUpdateWine() {
  const { toast } = useToast();
  const { id } = useParams();
  const navigate = useNavigate()
  const [wine, setWine] = useState();
  const [reloadWine, setReloadWine] = useState(false);
  const [dataFormWine, setDataFormWine] = useState<Wine>({
    name: "",
    year: "",
    wine_type: "",
    origin_country: "",
    region: "",
    description: "",
    price: "",
    quantity:"",
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
        quantity: response?.quantity || "",
        image: response?.image || "",
      });
    });
  }, [id, reloadWine]);

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
      label: "Quantité",
      placeholder: wine?.quantity,
      key: "quantity",
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

  const ChangeInfoWine = (label: string, value: string) => {
    setDataFormWine((prevData) => ({
      ...prevData,
      [label]: value,
    }));
  };

  const onSubmit = () => {
    ApiHelper(`wines/${id}`, "PUT", dataFormWine)
      .then((res) => {
        console.warn("je suis res", res)
        if (res.status === 200) {
          toast({
            title: "Succès",
            description: "Le vin à bien été modifié",
          });
          navigate("/admin/adminWine")
        }
      })
      .catch((error) => console.warn(error));
  };

  return (
    <div>
      <h2 className="text-center uppercase my-5 text-2xl">
        Modification du vin
      </h2>
      <div className="px-20  grid grid-cols-3 gap-10">
        {wineInformations?.map((item: Wine, indexInformation: number) => (
          <div key={indexInformation} className="my-2">
            {item.label === "Image" ? (
              <Input type="file" className="mt-6" />
            ) : (
              <div>
                <label>{item.label}</label>
                <Input
                  placeholder={item.placeholder}
                  onChange={(e) => ChangeInfoWine(item.key, e.target.value)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <Button variant="outline" onClick={onSubmit} className="mx-20 my-10">
        Enregistrer
      </Button>
    </div>
  );
}

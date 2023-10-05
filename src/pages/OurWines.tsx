import React, { useState, useEffect } from "react";
import CardOurWines from "../components/OurWines/CardOurWines";
import SelectWine from "../components/OurWines/SelectWine";

const { VITE_BACKEND_URL } = import.meta.env;

interface Wine {
  id: number;
  best_seller: number;
  description: string;
  grape_variety: string;
  image: string;
  name: string;
  origin_country: string;
  price: number;
  region: string;
  wine_type: string;
  year: number;
}

export default function OurWines() {
  const [type, setType] = useState<string>("");

  const [data, setData] = useState<null | Wine[]>(null);

  useEffect(() => {
    fetch(`${VITE_BACKEND_URL}` + `wines`)
      .then((response) => response.json())
      .then((reponseData) => setData(reponseData));
  }, []);

  return (
    <div className="mx-10">
      <h4 className="text-center py-4 font-bold text-red-500 text-3xl">
        Nos vins
      </h4>
      <SelectWine setType={setType} />
      {data && data?.length > 0 && (
        <div className="md:grid md:grid-cols-4 md:gap-10 ">
          {data
            ?.filter((wine: Wine) => {
              return type === "" ? wine : wine?.wine_type?.includes(type);
            })
            .map((wine: Wine) => (
              <div key={wine.id}>
                <CardOurWines wine={wine} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

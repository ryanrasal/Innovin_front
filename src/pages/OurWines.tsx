import { useEffect, useState } from "react";
import CardOurWines from "../components/OurWines/CardOurWines";
import SelectWine from "../components/OurWines/SelectWine";
import ApiHelper from "../services/apiHelper";

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
  const [wines, setWines] = useState<Wine[]>([]);
  const [type, setType] = useState<string>("");

  useEffect(() => {
    ApiHelper("wines", "get").then((data) => {
      setWines(data);
    });
  }, []);

  return (
    <div className="mx-10">
      <h4 className="text-center py-4 font-bold text-red-500 text-3xl">
        Nos vins
      </h4>
      <SelectWine setType={setType} />
      {wines.length > 0 && (
        <div className="md:grid md:grid-cols-4 md:gap-10 ">
          {wines
            .filter((wine) => {
              return type === "" ? wine : wine?.wine_type?.includes(type);
            })
            .map((wine) => (
              <div key={wine.id}>
                <CardOurWines wine={wine} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

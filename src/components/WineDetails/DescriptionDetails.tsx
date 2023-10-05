import React from "react";
import { Star } from "lucide-react";

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

interface Props {
  data: Wine;
}

export default function DescriptionDetails({ data }: Props) {
  return (
    <div className="md:w-[40vw]">
      <div className="flex justify-between items-center py-3">
        <h3 className="text-2xl">{data?.name}</h3>
        {data?.best_seller && (
          <div className="flex items-center">
            <p>Meilleure vente</p>
            <Star color="#d2d501" />
          </div>
        )}
      </div>
      <hr />
      <h3 className="underline font-bold py-4">À propos de cet article</h3>
      <p className="pb-4 mx-10 md:mx-2">{data?.description}</p>
      <p className="pb-4">
        <b>Marque</b> : Petrus
      </p>
      <p className="pb-4">
        <b>Age</b> : {data?.year}
      </p>
      <hr />
      <div className="flex items-center justify-between bg-[#CBAF96] rounded-xl p-2 mt-5">
        <p>
          Interdiction de vente de boissons alcooliques aux mineurs de moins de
          18 ans. L’abus d’alcool est dangereux pour la santé. A consommer avec
          modération.
        </p>
      </div>
    </div>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";

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

interface Props {
  wine: Wine;
}

export default function CardOurWines({ wine }: Props) {
  return (
    <div className="md:w-[20vw] shadow mb-2 md:shadow-none rounded-md pt-5 relative">
      <NavLink
        to={`/wine/${wine.id}`}
        className="border rounded-md shadow flex  justify-center"
      >
        <img
          className="h-[45vh] rounded-md py-7"
          src={`${VITE_BACKEND_URL}/uploads/${wine.image}`}
          alt=""
        />
      </NavLink>
      <br />
      <div className="px-2">
        <p className="text-lg pb-2">{wine.name}</p>
        <p className="text-xl">{wine.price} €</p>
      </div>
    </div>
  );
}

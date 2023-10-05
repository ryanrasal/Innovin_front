import React from "react";

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
  priceMultiple: number;
  quantity: number[];
  withoutTva: number;
  handleCart: () => void;
}

export default function BuyDetails({
  data,
  priceMultiple,
  setQuantitiesSelected,
  quantity,
  withoutTva,
  handleCart,
}: Props) {
  return (
    <div className="flex flex-col mx-3 md:w-[20vw] pb-4 border border-2-black px-3 shadow-md">
      <p className="text-red-500 text-sm mt-2 font-bold">
        Habituellement expédié sous 2 à 3 jours
      </p>
      <br />
      <p>Livraison gratuite</p>
      <br />
      <p className="mb-1">Sans TVA : {withoutTva.toFixed(2)}€</p>
      <p className="mb-1">TVA : 20%</p>
      <p className="mb-5">
        TTC : {!priceMultiple ? data.price : priceMultiple}€
      </p>
      <div className="flex flex-col">
        <select
          className="border border-2-black rounded-md"
          onChange={(e) => setQuantitiesSelected(e.target.value)}
        >
          {quantity.slice(1, 32).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <br />
        <button
          onClick={handleCart}
          className=" bg-emerald-500 hover:bg-emerald-400 text-white py-1 mb-2 rounded-lg font-bold"
          type="button"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}

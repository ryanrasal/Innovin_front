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
}

export default function DescriptifDetails({ data }: Props) {
  const keysWine = Object.keys(data);
  const valuesWine = Object.values(data);

  return (
    <div className="mx-[5vw]">
      <p className="text-red-500 font-bold pb-2">Informations sur le produit</p>
      <p className="pb-2">Descriptif technique</p>
      <div className="flex">
        <div className="flex flex-col">
          {keysWine.slice(1, 7).map((keyWine) => (
            <div key={keyWine} className="w-[30vw] h-[5vh] bg-gray-300">
              <p className="pl-2">{keyWine}</p>
              <hr />
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          {valuesWine.slice(1, 7).map((valueWine) => (
            <div className="w-[40vw] md:w-[30vw] h-[5vh]" key={valueWine}>
              <p className="pl-2">{valueWine}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}

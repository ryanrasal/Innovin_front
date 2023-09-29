

export default function DescriptifDetails({ wineDetail }) {
  const keysWine = Object.keys(wineDetail);
  const valuesWine = Object.values(wineDetail);

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

import CardOurWines from "../components/OurWines/CardOurWines";
import SelectWine from "../components/OurWines/SelectWine";
import wineSearch from "../assets/wineSearch.png";
import { FunctionOurWines } from "@/functions/OurWines/FunctionOurWines";

export default function OurWines() {
  const {
    setType,
    setRegion,
    handleChangeWine,
    filteredData,
    wine_types,
    regions,
  } = FunctionOurWines();

  return (
    <div className="mx-10">
      <h4 className="text-center py-4 font-bold text-3xl">Nos vins</h4>
      <hr className="mb-5" />
      <SelectWine
        setType={setType}
        setRegion={setRegion}
        handleChangeWine={handleChangeWine}
        regions={regions}
        wine_types={wine_types}
      />

      {filteredData && filteredData.length > 0 ? (
        <div className="md:grid md:grid-cols-4 md:gap-10">
          {filteredData.map((wine: Wine, index: number) => (
            <div key={index}>
              <CardOurWines wine={wine} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="underline text-center font-bold text-3xl">
            Aucun vin ne correspond à votre recherche
          </h2>
          <img className=" h-96 mx-auto" src={wineSearch} alt="" />
        </div>
      )}
    </div>
  );
}

import { Input } from "../ui/input";

interface Props {
  setType: (type: string) => void;
  setRegion: (region: string) => void;
  handleChangeWine: (e: any) => void;
  regions: string[];
  wine_types: string[];
}

export default function SelectWine({
  setType,
  handleChangeWine,
  setRegion,
  regions,
  wine_types,
}: Props) {
  return (
    <div className="md:grid md:grid-cols-4 mb-5 md:gap-10">
      <Input
        className="col-span-2"
        placeholder="Rechercher..."
        onChange={(e) => handleChangeWine(e)}
      />
      <select
        onChange={(e) => setType(e.target.value)}
        className="px-5 mt-2 md:mt-0 py-3 border text-gray-500 rounded-md"
      >
        <option value="" className=" sm:text-sm md:text-lg">
          Type de vin
        </option>
        {wine_types?.map((itemRegion, indexRegion) => (
          <option key={indexRegion} value={itemRegion} className=" sm:text-sm md:text-lg">
            {itemRegion}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => setRegion(e.target.value)}
        className="px-5 mt-2 md:mt-0 py-3 border text-gray-500 rounded-md"
      >
        <option value="" className=" sm:text-sm md:text-lg">
          Region
        </option>
        {regions?.map((item: string, index: number) => (
          <option key={index} value={item} className=" sm:text-sm md:text-lg">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

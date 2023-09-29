interface Props {
  setType: (type: string) => void;
}

export default function SelectWine({ setType }: Props) {
  return (
    <div className="my-1 w-full">
      <select
        onChange={(e) => setType(e.target.value)}
        className="md:px-2 border text-gray-500 rounded-sm py-3 px-4 shadow-sm"
      >
        <option value="" className=" sm:text-sm md:text-lg">
          Type de vin
        </option>
        <option value="Blanc" className=" sm:text-sm md:text-lg">
          Blanc
        </option>
        <option value="Rouge" className=" sm:text-sm md:text-lg">
          Rouge
        </option>
        <option value="Rosé" className=" sm:text-sm md:text-lg">
          Rosé
        </option>
        <option value="Champagne" className=" sm:text-sm md:text-lg">
          Champagne
        </option>
      </select>
    </div>
  );
}

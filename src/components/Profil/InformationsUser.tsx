import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface Item {
  key: string;
  label: string;
  placeholder: string;
}

interface Props {
  userInformations: any;
  handleInputChange: (key: string, value: string) => void;
  onSubmit: () => void;
}

export default function InformationsUser({
  userInformations,
  handleInputChange,
  onSubmit,
}: Props) {
  return (
    <div>
      <div className="px-20  grid grid-cols-3 gap-10">
        {userInformations?.map((item: Item, indexInformation: number) => (
          <div key={indexInformation} className="my-2 ">
            <label>{item.label}</label>
            <Input
              placeholder={item.placeholder}
              onChange={(e) => handleInputChange(item.key, e.target.value)}
            />
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        onClick={() => onSubmit()}
        className="mx-20 my-10"
      >
        Enregistrer
      </Button>
    </div>
  );
}

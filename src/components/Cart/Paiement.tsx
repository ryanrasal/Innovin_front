import { Icons } from "@/components/Cart/Icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StepBar from "./StepBar";

interface Props {
  handleChangePaiement: (value: string) => void;
  dataPaiement: {
    methode: string;
    name: string;
    number: string;
    expireMonth: string;
    expireYear: string;
    cvc: string;
  };
  setDataPaiement: React.Dispatch<React.SetStateAction<any>>;
  passStepThree: () => void;
  currentStep: number;
}

export function Paiement({
  handleChangePaiement,
  dataPaiement,
  setDataPaiement,
  passStepThree,
  currentStep,
}: Props) {
  return (
    <div className="mt-5 mx-10">
      <hr />
      <div className="w-[300px] my-5">
        <StepBar currentStep={currentStep} />
      </div>
      <div className="md:w-[500px] mt-5">
        <Card>
          <CardHeader>
            <CardTitle>Méthodes de paiement</CardTitle>
            <CardDescription>
              Ajouter une nouvelle méthode de paiement à votre compte
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
              <div>
                <RadioGroupItem
                  onClick={() =>
                    setDataPaiement({ ...dataPaiement, methode: "carte" })
                  }
                  value="card"
                  id="card"
                  className="peer sr-only "
                />
                <Label
                  htmlFor="card"
                  className={
                    `flex flex-col items-center cursor-pointer justify-between 
                rounded-md border-2 bg-popover p-4 hover:bg-accent 
                hover:text-accent-foreground peer-data-[state=checked]:border-primary 
                [&:has([data-state=checked])]:border-primary` +
                    (dataPaiement.methode === "carte" ? ` border-blue-500` : ``)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="mb-3 h-6 w-6"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                  Carte
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="paypal"
                  id="paypal"
                  className="peer sr-only cursor-pointer"
                  onClick={() => console.log("Paypal")}
                />
                <Label
                  htmlFor="paypal"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Icons.paypal className="mb-3 h-6 w-6" />
                  Paypal
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="apple"
                  id="apple"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="apple"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Icons.apple className="mb-3 h-6 w-6" />
                  Apple
                </Label>
              </div>
            </RadioGroup>
            <div className="grid gap-2">
              <Label htmlFor="name">Nom Sur la Carte</Label>
              <Input
                value={dataPaiement.name}
                name="name"
                onChange={(e) => handleChangePaiement(e)}
                id="name"
                placeholder="ex: John Doe"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="number">Numéro de Carte</Label>
              <Input
                name="number"
                value={dataPaiement.number}
                onChange={(e) => handleChangePaiement(e)}
                id="number"
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="mois">Expire</Label>
                <Select
                  onValueChange={(value) =>
                    setDataPaiement({ ...dataPaiement, expireMonth: value })
                  }
                >
                  <SelectTrigger id="mois">
                    <SelectValue placeholder="mois" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Janvier">Janvier</SelectItem>
                    <SelectItem value="Février">Février</SelectItem>
                    <SelectItem value="Mars">Mars</SelectItem>
                    <SelectItem value="April">April</SelectItem>
                    <SelectItem value="Mai">Mai</SelectItem>
                    <SelectItem value="Juin">Juin</SelectItem>
                    <SelectItem value="Juillet">Juillet</SelectItem>
                    <SelectItem value="Aout">Aout</SelectItem>
                    <SelectItem value="Septembre">Septembre</SelectItem>
                    <SelectItem value="Octobre">Octobre</SelectItem>
                    <SelectItem value="Novembre">Novembre</SelectItem>
                    <SelectItem value="Decembre">Decembre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="year">Année</Label>
                <Select
                  onValueChange={(value) =>
                    setDataPaiement({ ...dataPaiement, expireYear: value })
                  }
                >
                  <SelectTrigger id="year">
                    <SelectValue placeholder="Année" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => (
                      <SelectItem
                        key={i}
                        value={`${new Date().getFullYear() + i}`}
                      >
                        {new Date().getFullYear() + i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input
                  name="cvc"
                  onChange={(e) => handleChangePaiement(e)}
                  id="cvc"
                  placeholder="CVC"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={passStepThree} variant="outline">
              Valider
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

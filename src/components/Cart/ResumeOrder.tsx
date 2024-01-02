import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { User } from "@/interfaces/User";

interface Props {
  user: User;
  total: number;
  confirmationOrder: () => void;
  disableButton: boolean
}

export default function ResumeOrder({ user, total, confirmationOrder, disableButton }: Props) {
  const itemResumeOrder = [
    {
      title: user.firstname + " " + user.lastname,
    },
    {
      title: user.address + " " + user.postalCode + " " + user.city,
    },
    {
      title: "Montant total : ",
    },
    {
      totalOrder: total,
    },
    {
      title: "",
    },
  ];

  return (
    <Card className="md:w-[450px]">
      <CardHeader>
        <CardTitle>Confirmation de la commande</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          {itemResumeOrder.map((item, index: number) => (
            <div className="py-2" key={index}>
              <p>{item?.title?.toUpperCase()}</p>
              {item.totalOrder && <p>{item.totalOrder} €</p>}
            </div>
          ))}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          disabled={disableButton}
          onClick={confirmationOrder}
          variant="outline"
        >
          Confirmation
        </Button>
      </CardFooter>
    </Card>
  );
}

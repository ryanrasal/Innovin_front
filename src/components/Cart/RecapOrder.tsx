import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "@/interfaces/User";
import { CartWines } from "../Admin/columns";
import StepBar from "./StepBar";
import { DataTable } from "./data-table";

interface Props {
  total: number;
  user: User;
  toggleStepOrderNext: () => void;
  currentStep: number;
  dataCart: any;
  handleDelete: (id: number) => void;
  modalIsOpen: boolean;
}
export default function RecapOrder({
  total,
  user,
  toggleStepOrderNext,
  currentStep,
  dataCart,
  handleDelete,
  modalIsOpen,
  ...props
}: Props) {
  const notifications = [
    {
      title: "Adresse: ",
      description: user?.address,
    },
    {
      title: "Code Postal: ",
      description: user?.postalCode,
    },
    {
      title: "Ville: ",
      description: user?.city,
    },
  ];
  return (
    <div>
      <div className="my-5">
        <StepBar currentStep={currentStep} />
      </div>
      <div>
        {total === 0 ? (
          <div>
            <h2 className="pl-5">Votre panier est vide.</h2>
          </div>
        ) : (
          <div className="md:flex md:mt-5 md:mx-10 md:justify-around">
            <DataTable
              modalIsOpen={modalIsOpen}
              handleDelete={handleDelete}
              columns={CartWines}
              data={dataCart?.content}
            />
            <Card {...props} className="h-[56vh] md:min-w-[24vw] md:mx-5">
              <CardHeader>
                <CardTitle className="text-center">
                  Adresse de livraison
                </CardTitle>
                <hr />
              </CardHeader>
              <CardContent className="grid gap-4">
                <div>
                  {notifications.map((notification, index) => (
                    <div key={index} className="mb-4 flex pb-4 items-center">
                      <span className="flex h-2 w-2 mr-1 rounded-full bg-sky-500" />
                      <div className="flex items-center">
                        <p className="font-semibold mr-2">
                          {notification?.title}
                        </p>
                        <p className="text-md">
                          {notification?.description}{" "}
                          {notification?.title === "Total:" ? "€" : ""}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <CardTitle className="text-center">
                  Montant de la commande
                </CardTitle>
                <hr />
                <div className="flex items-center">
                  <span className="flex h-2 w-2 mr-1 rounded-full bg-sky-500" />
                  <div className="flex items-center">
                    <p className="text-md">Total: {total}€</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={() => toggleStepOrderNext()} variant="outline">
                  Passer au paiement
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

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
import StepBar from "./StepBar";

interface CardProps {
  user: User;
  toggleStepOrderNext: () => void;
  currentStep: number;
}

export default function Delivery({
  user,
  toggleStepOrderNext,
  currentStep,
}: CardProps) {
  const notifications = [
    {
      title: "Nom et Prénom : ",
      description: user.firstname + " " + user.lastname,
    },
    {
      title: "Adresse: ",
      description: user.address,
    },
    {
      title: "Code Postal: ",
      description: user.postalCode,
    },
    {
      title: "Ville: ",
      description: user.city,
    },
  ];
  return (
    <div className="mt-5 mx-10">
      <hr />
      <div className="w-[300px] my-5">
        <StepBar currentStep={currentStep} />
      </div>
      <div className="md:w-[500px] mt-5">
        <Card>
          <CardHeader>
            <CardTitle>Livraison</CardTitle>
            <CardDescription>Adresse de livraison</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div>
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="mb-4 flex  items-center pb-4 last:mb-0 last:pb-0"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <p className="text-sm mx-5 font-medium leading-none">
                    {notification.title.toUpperCase()}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={toggleStepOrderNext} variant="outline">
              Continue
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

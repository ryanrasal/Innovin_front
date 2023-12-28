import { NavLink } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Wine } from "@/interfaces/Wine";

const { VITE_BACKEND_URL } = import.meta.env;

interface Props {
  wine: Wine;
}

export default function CardOurWines({ wine }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{wine.name}</CardTitle>
        <div className="flex justify-between">
          <CardDescription>{wine.region}</CardDescription>
          <CardDescription>{wine.price} €</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <img
          className="h-[30vh] rounded-md py-7 mx-auto"
          src={`${VITE_BACKEND_URL}/uploads/${wine.image}`}
          alt=""
        />
      </CardContent>
      <CardFooter className="flex justify-center item-center">
        <NavLink to={`/wine/${wine.id}`} >
          <Button variant="outline" >Voir plus</Button>
        </NavLink>
      </CardFooter>
    </Card>
  );
}

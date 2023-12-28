import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FunctionOurWines } from "@/functions/OurWines/FunctionOurWines";
import { Card, CardContent } from "../ui/card";
import { NavLink } from "react-router-dom";

const { VITE_BACKEND_URL } = import.meta.env;

export default function CarouselHome() {
  const { data } = FunctionOurWines();
  return (
    <div>
      <button onClick={() => console.warn(data)}>press me </button>
      <Carousel className="w-full mx-auto max-w-xs">
        <CarouselContent>
          {data?.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1 ">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <NavLink to={`/wine/${item.id}`}>
                      <img
                        src={`${VITE_BACKEND_URL}/uploads/${item.image}`}
                        alt={"Nom du vin : " + item.name}
                      />
                    </NavLink>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="create" />
        <CarouselNext variant="create"/>
      </Carousel>
    </div>
  );
}

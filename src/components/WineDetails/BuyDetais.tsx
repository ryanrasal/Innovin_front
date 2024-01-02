import { User } from "@/interfaces/User";
import { Wine } from "@/interfaces/Wine";
import { Button } from "../ui/button";

interface Props {
  data: Wine;
  priceMultiple: number;
  quantity: number[];
  withoutTva: number;
  handleCart: () => void;
  user: User;
  setQuantitiesSelected: (e: any) => void;
}

export default function BuyDetails({
  data,
  priceMultiple,
  setQuantitiesSelected,
  quantity,
  withoutTva,
  handleCart,
  user,
}: Props) {
  return (
    <div className="flex flex-col mx-3 md:w-[20vw] md:mt-5 rounded pb-4 border border-2-black px-3 shadow-md">
      <h2 className="text-xl font-semibold text-center my-3">Commander</h2>
      <p className="text-red-500 text-sm mt-2 ">
        Habituellement expédié sous 2 à 3 jours
      </p>
      <hr className="my-3" />
      <p>Livraison gratuite</p>
      <hr className="my-3" />
      <p className="mb-1">Sans TVA : {withoutTva.toFixed(2)}€</p>
      <p className="mb-1">TVA : 20%</p>
      <hr className="my-3" />
      <p className="mb-5 text-2xl font-semibold">
        TTC : {!priceMultiple ? data.price : priceMultiple} €
      </p>
      {user?.role === "user" && quantity.length > 0 ? (
        <div className="flex flex-col">
          <select
            className="border border-2-black rounded-md"
            onChange={(e) => setQuantitiesSelected(e.target.value)}
          >
            {quantity.slice(1, 32).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <br />
          <Button
            onClick={handleCart}
            variant="outline"
            type="button"
            className="mx-auto"
          >
            Ajouter au panier
          </Button>
        </div>
      ) : quantity.length < 0 ? (
        <div>
          <p className="font-semibold text-center text-red-400">
            Pas de stock disponible
          </p>
        </div>
      ) : (
        <p className="text-red-500 text-center">Veuillez vous connecter pour passer une commande</p>
      )}
    </div>
  );
}

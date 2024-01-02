import DescriptionDetails from "../components/WineDetails/DescriptionDetails";
import BuyDetails from "../components/WineDetails/BuyDetais";
import DescriptifDetails from "../components/WineDetails/DecriptifDetails";
import { useFunctionWineDetails } from "@/functions/WineDetails/FunctionWineDetails";

const { VITE_BACKEND_URL } = import.meta.env;

export default function WineDetails() {
  const {
    setQuantitiesSelected,
    quantity,
    withoutTva,
    handleCart,
    user,
    data,
    priceMultiple,
  } = useFunctionWineDetails();

  return (
    <div className="pt-2 px-4 md:px-0">
      {data && (
        <>
          <div className="md:flex mb-10">
            <img
              className="md:h-[70vh] md:max-w-[30vw] h-[30vh] m-4 rounded-xl mx-auto"
              src={`${VITE_BACKEND_URL}/uploads/${data.image}`}
              alt=""
            />
            <DescriptionDetails data={data} />
            <BuyDetails
              data={data}
              setQuantitiesSelected={setQuantitiesSelected}
              priceMultiple={priceMultiple}
              quantity={quantity}
              withoutTva={withoutTva}
              handleCart={handleCart}
              user={user}
            />
          </div>
          <hr />
          <DescriptifDetails data={data} />
        </>
      )}
    </div>
  );
}

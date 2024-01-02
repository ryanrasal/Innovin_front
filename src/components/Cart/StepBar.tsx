import clsx from "clsx";

interface Props {
  currentStep: number;
}

const StepBar = ({ currentStep }: Props) => {
  const steps = ["Panier", "Paiement", "Livraison", "Confirmation"];

  return (
    <div className="flex w-[120px] md:w-[200px]">
      {steps.map((step, index) => (
        <div
          key={index}
          className={clsx(
            "flex items-center",
            "py-2 px-4 mx-2 w-1/2",
            "text-sm font-semibold",
            {
              "text-blue-500": index === currentStep,
              "text-gray-500": index !== currentStep,
            }
          )}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default StepBar;

import { useCartFunctions } from "@/functions/Cart/Cart";
import RecapOrder from "@/components/Cart/RecapOrder";
import { useUserContext } from "@/services/Context/UserContext";
import { Paiement } from "@/components/Cart/Paiement";
import StepBar from "@/components/Cart/StepBar";
import { Button } from "@/components/ui/button";
import Delivery from "@/components/Cart/Delivery";
import ResumeOrder from "@/components/Cart/ResumeOrder";

export default function Cart() {
  const {
    dataCart,
    total,
    toggleStepOrderNext,
    toggleStepOrderPrev,
    currentStep,
    handleChangePaiement,
    dataPaiement,
    setDataPaiement,
    passStepThree,
    handleDelete,
    modalIsOpen,
    confirmationOrder,
    disableButton,
  } = useCartFunctions();
  const { user } = useUserContext();

  return (
    <div>
      {currentStep === 0 ? (
        <RecapOrder
          user={user}
          modalIsOpen={modalIsOpen}
          handleDelete={handleDelete}
          total={total}
          dataCart={dataCart}
          toggleStepOrderNext={toggleStepOrderNext}
        />
      ) : (
        <div className="my-5 mx-10">
          <Button variant="outline" onClick={() => toggleStepOrderPrev()}>
            Retour à l'étape précédente
          </Button>
        </div>
      )}
      {currentStep === 1 && (
        <Paiement
          handleChangePaiement={handleChangePaiement}
          dataPaiement={dataPaiement}
          setDataPaiement={setDataPaiement}
          currentStep={currentStep}
          passStepThree={passStepThree}
        />
      )}
      {currentStep === 2 && (
        <Delivery
          toggleStepOrderNext={toggleStepOrderNext}
          currentStep={currentStep}
          user={user}
        />
      )}
      {currentStep === 3 && (
        <div className="mt-5 mx-10">
          <hr />
          <div className="md:w-[300px] my-5">
            <StepBar currentStep={currentStep} />
          </div>
          <ResumeOrder
          disableButton={disableButton}
            confirmationOrder={confirmationOrder}
            user={user}
            total={total}
            dataPaiement={dataPaiement}
          />
        </div>
      )}
    </div>
  );
}

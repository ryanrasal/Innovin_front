import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import loiAlcool from "../assets/loiAlcool.png";

const AgeVerificationModal = ({ setShowModal, handleConfirm }) => {
  return (
    <>
      <div className="absolute inset-0 z-20 bg-center flex flex-col bg-no-repeat bg-imgVerification">
        <div className="mx-20 my-auto text-center w-1/2">
          <h2 className="text-3xl uppercase text-white font-light">Innovin</h2>
          <p className="my-4 text-lg text-white">
            La vente d'alcool est interdite aux mineurs. Veuillez confirmer que
            vous êtes majeur.
          </p>
          <HoverCard>
            <HoverCardTrigger className="text-white underline cursor-pointer">
              protection des mineurs et répression de l'ivresse publique
            </HoverCardTrigger>
            <HoverCardContent >
              <img
                src={loiAlcool}
                alt="loi 
                protection des mineurs et répression de l'ivresse publique"
              />
            </HoverCardContent>
          </HoverCard>
          <div className="flex justify-center mt-4">
            <Button variant="outline" onClick={handleConfirm}>
              Confirmer
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgeVerificationModal;

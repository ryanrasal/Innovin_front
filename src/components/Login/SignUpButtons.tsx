import { Button } from "../ui/button";

export interface PropsSignUp {
  submitSignUp: () => void;
  handleShowForm: () => void;
}

export default function SignUpButtons({
  handleShowForm,
  submitSignUp,
}: PropsSignUp) {
  return (
    <div className="flex justify-center mt-10">
      <Button variant="delete" onClick={handleShowForm}>
        Retour
      </Button>
      <Button variant="create" onClick={submitSignUp}>
        S'inscrire
      </Button>
    </div>
  );
}

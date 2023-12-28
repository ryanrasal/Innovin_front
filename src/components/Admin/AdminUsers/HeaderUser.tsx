import { Button } from "@/components/ui/button";

interface PropsHeaderUser {
  toggleShowModalCreateUser: () => void;
}

export default function HeaderUser({
  toggleShowModalCreateUser,
}: PropsHeaderUser) {
  return (
    <div>
      <h2 className="text-3xl text-center underline py-5">
        Liste des Utilisateurs
      </h2>
      <div className="flex py-5">
        <Button onClick={toggleShowModalCreateUser} variant="create">
          Ajouter un Nouvel utilisateur
        </Button>
      </div>
    </div>
  );
}

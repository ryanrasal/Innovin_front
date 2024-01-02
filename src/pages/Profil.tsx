import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Orders from "@/components/Profil/Orders";
import { useFunctionProfil } from "@/functions/Profil/FunctionProfil";
import InformationsUser from "@/components/Profil/InformationsUser";

export default function Profil() {
  const { dataOrder, userInformations, handleInputChange, onSubmit, user } =
    useFunctionProfil();

  return (
    <div>
      <h2 className="text-xl font-bold py-5 text-center">
        Profil de {user?.firstname} {user?.lastname}
      </h2>
      <Tabs defaultValue="informations" className="w-full">
        <TabsList>
          <TabsTrigger className="text-xl " value="informations">
            Informations
          </TabsTrigger>
          <TabsTrigger className="text-xl " value="commandes">
            Commandes
          </TabsTrigger>
        </TabsList>
        <TabsContent value="informations">
          <InformationsUser
            onSubmit={onSubmit}
            userInformations={userInformations}
            handleInputChange={handleInputChange}
          />
        </TabsContent>
        <TabsContent value="commandes">
          <Orders dataOrder={dataOrder} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

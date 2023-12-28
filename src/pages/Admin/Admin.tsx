import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAdminMessageFunctions } from "@/functions/AdminMessage/FunctionAdminMessage";
import { useAdminUserFunctions } from "@/functions/AdminUser/FunctionAdminUser";
import { useAdminWineFunctions } from "@/functions/AdminWine/FunctionAdminWine";
import { Mail, User, Wine } from "lucide-react";

export default function Admin() {
  const { messages } = useAdminMessageFunctions();
  const { users } = useAdminUserFunctions();
  const { wines } = useAdminWineFunctions();

  const informationForAdmin = [
    {
      title: "Messages",
      logo: <Mail />,
      number: messages.length,
    },
    {
      title: "Utilisateurs",
      logo: <User />,
      number: users.length,
    },
    {
      title: "Vins",
      logo: <Wine />,
      number: wines.length,
    },
  ];
  return (
    <div>
      <h2 className="text-3xl text-center underline py-5">
        Statistiques du site
      </h2>
      <div className="grid grid-cols-3 m-5">
        {informationForAdmin.map((item, index) => (
          <Card key={index} className="w-[350px] h-[200px] mx-3 ">
            <CardHeader>
              <div className="flex justify-around w-full">
                <CardTitle>{item.title}</CardTitle>
                <CardTitle>{item.logo}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-2xl text-center mt-4">
              {item.number}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

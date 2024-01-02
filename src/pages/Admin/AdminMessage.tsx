import { MessagesList } from "@/components/Admin/columns";
import { DataTable } from "@/components/Admin/data-table";
import { useAdminMessageFunctions } from "@/functions/AdminMessage/FunctionAdminMessage";

export default function AdminMessage() {
  const { messages } = useAdminMessageFunctions();

  const columnsWithProps = MessagesList.map((column) => ({
    ...column,
  }));

  return (
    <div className="w-full mx-4">
        <h2 className="text-3xl text-center underline py-5">
        Liste des Messages
      </h2>
      <DataTable columns={columnsWithProps} data={messages} />
    </div>
  );
}

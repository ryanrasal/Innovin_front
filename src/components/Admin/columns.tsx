import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { User } from "@/interfaces/User";
import { Wine } from "@/interfaces/Wine";

const capitalizeFirstLetter = (s: string) =>
  s?.charAt(0)?.toUpperCase() + s?.slice(1);

const createSortableColumn = <T extends keyof User | keyof Wine>(
  accessorKey: T,
  label: string
) => ({
  accessorKey,
  header: ({ column }: { column: ColumnDef<User | Wine> }) => {
    if (accessorKey !== "settings") {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {label}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    }
  },
});

export const usersList: ColumnDef<User>[] = [
  createSortableColumn("firstname", "Prénom"),
  createSortableColumn("lastname", "Nom"),
  createSortableColumn("email", "Email"),
  createSortableColumn("username", "Pseudo"),
  createSortableColumn("phone", "Telephone"),
  createSortableColumn("address", "Adresse"),
  createSortableColumn("settings", ""),
].map((column) => ({
  ...column,
  cell: ({ row }) =>
    column.accessorKey === "firstname" ||
    column.accessorKey === "lastname" ||
    column.accessorKey === "username"
      ? capitalizeFirstLetter(row.original[column.accessorKey])
      : row.original[column.accessorKey],
}));

export const WinesList: ColumnDef<Wine>[] = [
  createSortableColumn("name", "Nom"),
  createSortableColumn("year", "Année"),
  createSortableColumn("wine_type", "Type de Vin"),
  createSortableColumn("origin_country", "Pays d'origine"),
  createSortableColumn("price", "Prix"),
  createSortableColumn("quantity", "Quantité"),
  createSortableColumn("settings", ""),
];

export const CartWines: ColumnDef<Wine>[] = [
  createSortableColumn("name", "Nom"),
  createSortableColumn("origin_country", "Pays D'origine"),
  createSortableColumn("wine_type", "Type de Vin"),
  createSortableColumn("price", "Prix"),
  createSortableColumn("quantity", "Quantité"),
  createSortableColumn("total", "Total"),
  createSortableColumn("settings", ""),
];
export const MessagesList: ColumnDef<Wine>[] = [
  createSortableColumn("email", "Email"),
  createSortableColumn("subject", "Sujet"),
  createSortableColumn("content", "Message"),
];

export const OrderList: ColumnDef<any> = [
  createSortableColumn("name", "Nom"),
  createSortableColumn("price", "Prix"),
  createSortableColumn("wine_type", "Type de Vin"),
  createSortableColumn("quantity", "Quantité"),
];


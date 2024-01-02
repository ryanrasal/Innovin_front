"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";
import { User } from "@/interfaces/User";
import { DialogClose } from "@radix-ui/react-dialog";

const { VITE_BACKEND_URL } = import.meta.env;

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  toggleShowModal?: (user: User) => void;
  handleDelete: (id: number) => void;
  modalIsOpen: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  handleDelete,
  modalIsOpen,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      rowSelection,
    },
  });

  return (
    <div className="rounded-xl border w-full">
      {data && data.length > 0 ? (
        <div>
          <Table>
            <TableHeader>
              {table?.getHeaderGroups()?.map((headerGroup) => (
                <TableRow key={headerGroup.id} className="rounded-xl">
                  {headerGroup?.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className="rounded-xl">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="rounded-md">
              {table?.getRowModel().rows?.length ? (
                table?.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {cell.column.id === "settings" ? (
                          <div>
                            <Dialog isOpen={modalIsOpen}>
                              <DialogTrigger>
                                <Trash2 className="h-5 w-5 cursor-pointer" />
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle className="text-center uppercase font-light mb-3 mx-10 text-xl md:mx-0">
                                    Voulez-vous vraiment vous supprimer <br />
                                    {row.original.name} de votre panier ?
                                    <img
                                      className="h-[30vh] rounded-md py-7 mx-auto"
                                      src={`${VITE_BACKEND_URL}/uploads/${row.original.image}`}
                                      alt=""
                                    />
                                  </DialogTitle>
                                </DialogHeader>
                                <DialogFooter className="px-20">
                                  <Button
                                    variant="outline"
                                    className="md:w-1/2"
                                    onClick={() =>
                                      handleDelete(row.original.wine_id)
                                    }
                                  >
                                    Supprimer
                                  </Button>
                                  <DialogClose asChild>
                                    <Button type="button" variant="outline" className="md:w-1/2 bg-red-500 text-white">
                                      Annuler
                                    </Button>
                                  </DialogClose>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        ) : (
                          flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns?.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between space-x-2 py-4 mx-4">
            <Button
              variant="outline"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

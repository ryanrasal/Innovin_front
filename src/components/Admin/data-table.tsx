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
  DialogClose,
  DialogContent,
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
import { Trash2, Pen } from "lucide-react";
import { User } from "@/interfaces/User";
import { Wine } from "@/interfaces/Wine";
import { NavLink } from "react-router-dom";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  deleteRowSelected?: (user: User) => void;
  toggleShowModal: (item: User | Wine) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  deleteRowSelected,
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
                          <div className="flex">
                            {/* UPDATE  */}
                            <Dialog>
                              <NavLink to={`/admin/adminUpdateWine/${row.original.id}`}
                              >
                                <Pen className="h-5 w-5 cursor-pointer" />
                              </NavLink>
                            </Dialog>
                            {/* DELETE  */}
                            <Dialog>
                              <DialogTrigger asChild>
                                <Trash2 className="h-5 w-5 cursor-pointer" />
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle className="text-center mb-3 mx-10 md:mx-0">
                                    Voulez-vous vraiment supprimer{" "}
                                    {row.original.wine_type
                                      ? row.original.name
                                      : row.original.firstname}{" "}
                                    ?
                                  </DialogTitle>
                                  <DialogClose asChild>
                                    <Button
                                      className="mx-auto"
                                      variant="create"
                                      onClick={() =>
                                        deleteRowSelected(row.original.id)
                                      }
                                    >
                                      Oui
                                    </Button>
                                  </DialogClose>
                                </DialogHeader>
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
          </div>{" "}
        </div>
      ) : null}
    </div>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { OrderList } from "../Admin/columns";
import { DataTable } from "../Cart/data-table";
export default function Orders({ dataOrder }) {
  return (
    <div className="px-20">
      {dataOrder?.map((order: any, orderIndex: number) => {
        const totalOrder = order.content.reduce(
          (total: number, content: any) =>
            total + content.price * content.quantity,
          0
        );
        return (
          <Accordion key={orderIndex} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl underline">
                Commande numéro {orderIndex + 1}
              </AccordionTrigger>
              <AccordionContent>
                <DataTable data={order.content} columns={OrderList} />
              </AccordionContent>

              <div>Total de la commande: {totalOrder} €</div>
            </AccordionItem>
          </Accordion>
        );
      })}
      <button onClick={() => console.warn(dataOrder)}>console me</button>
    </div>
  );
}

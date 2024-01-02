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
        const dateTime = order.validation_date
          ? order.validation_date.slice(0, 10).split("-").reverse().join("-")
          : "";

        const totalOrder = order.content.reduce(
          (total: number, content: any) =>
            total + content.price * content.quantity,
          0
        );

        return (
          <Accordion key={orderIndex} type="single" collapsible>
            <AccordionItem value={`item-${orderIndex}`}>
              <AccordionTrigger className="text-xl underline">
                Commande numéro {orderIndex + 1}
                {dateTime && <p>Commande effectuée le {dateTime}</p>}
              </AccordionTrigger>
              <AccordionContent>
                <DataTable data={order.content} columns={OrderList} />
              </AccordionContent>
              <p>Total de la commande: {totalOrder} €</p>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
}

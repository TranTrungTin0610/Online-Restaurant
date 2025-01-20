"use client";

import { DataTable } from "@/components/data-table";
import { Heading } from "@/components/heading";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";
import { OrderColumns, columns } from "./columns";

interface OrdersClientProps {
  data: OrderColumns[];
}

export const OrdersClient = ({ data }: OrdersClientProps) => {
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <Heading
          title={`Orders (${data.length})`}
          description="Manage orders for your store"
        />
      </div>

      <Separator className="my-4" />

      {data.length > 0 ? (
        <DataTable searchKey="products" columns={columns} data={data} />
      ) : (
        <div className="text-center text-gray-500 mt-6">
          <p>No orders found for this store.</p>
        </div>
      )}
    </>
  );
};

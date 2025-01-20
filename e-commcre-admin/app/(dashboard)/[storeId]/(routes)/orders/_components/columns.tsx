"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { CellAction } from "./cell-actions";
import CellImage from "./cell-image";
import { cn } from "@/lib/utils";

export type OrderColumns = {
  id: string;
  phone: string;
  address: string;
  products: string;
  totalPrice: string;
  images: string[];
  isPaid: boolean;
  createdAt: string;
  order_status: string;
};

export const columns: ColumnDef<OrderColumns>[] = [
  {
    accessorKey: "images",
    header: "Hình ảnh",
    cell: ({ row }) => (
      <div className="grid grid-cols-2 gap-2">
        <CellImage data={row.original.images} />
      </div>
    ),
  },
  {
    accessorKey: "products",
    header: "Sản phẩm",
  },
  {
    accessorKey: "phone",
    header: "Số điện thoại",
  },
  {
    accessorKey: "address",
    header: "Địa chỉ",
  },
  {
    accessorKey: "totalPrice",
    header: "Tổng tiền",
  },
  { 
    accessorKey: "order_status", 
    header: "Trạng thái", 
    cell: ({row}) => { 
      const {order_status} = row.original; 
      return (
      <p className={cn("text-base font-semibold",
      order_status === "Đang giao hàng" && "text-yellow-500" ||
      order_status === "Đang xử lí" && "text-orange-500" ||
      order_status === "Đã giao hàng" && "text-emerald-500"|| 
      order_status === "Hủy bỏ" && "text-red-500"
      )}>
        {order_status}
      </p>
      )
    }
  },
  {
    accessorKey: "isPaid",
    header: "Trạng thái thanh toán",
    cell: ({row}) => { 
      const {isPaid} = row.original; 
      return ( 
        <p className={cn(
          "text-base font-semibold",isPaid ? "text-emerald-500" : "text-red-500" 
        )}>
           {isPaid ? "Thanh toán" : "Chưa thanh toán"}
        </p>
      )
    }
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
         Năm
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "order_status",
    header: "Trạng thái đơn hàng",
    cell: ({ row }) =>  { 
      const {isPaid} = row.original; 
      return ( 
        <p className={cn("text-lg font-semibold", isPaid ? "text-emerald-500" : "text-red-500")}>
          {isPaid ? "Thanh toán": "Chưa thanh toán"}

        </p>
      )
    }
  },
  {
    id: "action",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

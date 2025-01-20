"use client";
import { Heading } from "@/components/heading";
import { AlertModal } from "@/components/modal/alert-modal";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Order } from "@/type-db";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Trash } from "lucide-react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

interface OrderFormProps {
  initialData: Order;
}

const formSchema = z.object({
  name: z.string().min(1),
  value: z.string().min(1),
});

export const OrderForm = ({ initialData }: OrderFormProps) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const params = useParams();
  const router = useRouter();
  const title = initialData ? "Edit order" : "Create order";
  const description = initialData ? "Edit an order" : "Add a new order";
  const toastMessage = initialData ? "Order Updated" : "Order Created";
  const action = initialData ? "Save Changes" : "Create order";

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      const orderData = { ...data, paid: false }; // Default paid to false
      if (initialData) {
        await axios.patch(`/api/${params.storeId}/orders/${params.orderId}`, orderData);
      } else {
        await axios.post(`/api/${params.storeId}/orders`, orderData);
      }
      toast.success(toastMessage);
      router.push(`/${params.storeId}/orders`);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      router.refresh();
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/${params.storeId}/orders/${params.orderId}`);
      toast.success("Order Removed");
      router.refresh();
      router.push(`/${params.storeId}/orders`);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
      setOpen(false);
    }
  };

  return (
    <div className="ml-5">
      <AlertModal isOpen={open} onClose={() => setOpen(false)} onConfirm={onDelete} loading={isLoading} />
      <div className="flex items-center justify-center">
        <Heading title={title} description={description} />
        {initialData && (
          <Button disabled={isLoading} variant={"destructive"} size={"icon"} onClick={() => setOpen(true)}>
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      
    </div>
  );
};

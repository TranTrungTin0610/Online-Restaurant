import { db } from "@/lib/firebase";
import {  Order } from "@/type-db";
import {  doc, getDoc } from "firebase/firestore";
import { OrderForm } from "./_components/order-form";

const OrderPage = async({ 
    params, 
} : { 
    params: { 
        orderId: string, 
        storeId: string
    }; 
}) => {  
    const order = (await getDoc(doc(db,"store", params.storeId, "orders",params.orderId))).data() as Order 
    return ( 
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6"></div>
                <OrderForm initialData = {order} />
        </div>
     
    )
}
export default OrderPage
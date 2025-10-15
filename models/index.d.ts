declare module 'models/Order' {
  import { Document, Model } from 'mongoose';
  
  interface IOrderItem {
    name: string;
    price: number;
    quantity: number;
    image: string;
  }

  interface IShippingAddress {
    name: string;
    address: string;
    city: string;
    zipCode: string;
    email: string;
  }

  interface IOrder extends Document {
    customerEmail: string;
    orderNumber: string;
    items: IOrderItem[];
    shippingAddress: IShippingAddress;
    paymentMethod: string;
    subtotal: number;
    tax: number;
    shippingFee: number;
    total: number;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    trackingNumber?: string;
    createdAt: Date;
    updatedAt: Date;
  }

  const Order: Model<IOrder>;
  export default Order;
}

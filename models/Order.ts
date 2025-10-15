import mongoose, { Document, Model, Schema } from 'mongoose';

// Interface for Order Item
export interface IOrderItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Interface for Shipping Address
export interface IShippingAddress {
  name: string;
  address: string;
  city: string;
  zipCode: string;
  email: string;
}

// Interface for Order
export interface IOrder extends Document {
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

// Schema for Order Item
const orderItemSchema = new Schema<IOrderItem>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: { type: String, required: true },
});

// Schema for Shipping Address
const shippingAddressSchema = new Schema<IShippingAddress>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  email: { type: String, required: true },
});

// Main Order Schema
const orderSchema = new Schema<IOrder>(
  {
    customerEmail: { type: String, required: true, index: true },
    orderNumber: { type: String, required: true, unique: true },
    items: [orderItemSchema],
    shippingAddress: shippingAddressSchema,
    paymentMethod: { type: String, required: true },
    subtotal: { type: Number, required: true },
    tax: { type: Number, required: true },
    shippingFee: { type: Number, required: true },
    total: { type: Number, required: true },
    status: {
      type: String,
      required: true,
      enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },
    trackingNumber: String,
  },
  { timestamps: true }
);

// Create and export the model
const Order: Model<IOrder> = 
  mongoose.models.Order || 
  mongoose.model<IOrder>('Order', orderSchema);

export default Order;

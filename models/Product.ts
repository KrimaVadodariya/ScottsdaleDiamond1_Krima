import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IDimensions {
  length?: number;
  width?: number;
  height?: number;
  diameter?: number;
  chainLength?: number;
  unit?: 'mm' | 'cm' | 'inch';
}

export interface IProductVariant {
  name: string;
  sku: string;
  price: number;
  originalPrice?: number;
  costPrice?: number;
  stock: number;
  weight?: number;
  weightUnit?: 'g' | 'kg' | 'oz' | 'lb';
  dimensions?: IDimensions;
  barcode?: string;
  images?: string[];
  isDefault?: boolean;
}

export interface IProductAttribute {
  name: string;
  value: string;
  filterable: boolean;
}

export interface IReview {
  userId: Types.ObjectId;
  rating: number;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISeoInfo {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
  slug: string;
}

export interface IShippingInfo {
  weight: number;
  weightUnit: 'g' | 'kg' | 'oz' | 'lb';
  dimensions: IDimensions;
  requiresShipping: boolean;
  freeShipping: boolean;
  shippingClass?: string;
}

export interface IJewelryProduct extends Document {
  // Basic Information
  name: string;
  description: string;
  shortDescription?: string;
  sku: string;
  barcode?: string;
  
  // Pricing
  price: number;
  originalPrice?: number;
  costPrice?: number;
  taxClass?: string;
  taxStatus: 'taxable' | 'shipping' | 'none';
  
  // Inventory
  stock: number;
  stockStatus: 'in_stock' | 'out_of_stock' | 'on_backorder';
  lowStockThreshold?: number;
  backordersAllowed: boolean;
  soldIndividually: boolean;
  
  // Categories & Tags
  category: 'Rings' | 'Necklaces' | 'Earrings' | 'Bracelets' | 'Watches' | 'Other';
  subcategory?: string;
  collections?: Types.ObjectId[];
  tags?: string[];
  
  // Media
  images: string[];
  videoUrl?: string;
  
  // Jewelry Specific
  material: 'Gold' | 'Silver' | 'Platinum' | 'Diamond' | 'Gemstone' | 'Pearl' | 'Other';
  metalPurity?: '10K' | '14K' | '18K' | '22K' | '24K' | '925' | '950' | 'Other';
  color: string;
  gemstone?: {
    type: string;
    color: string;
    clarity?: string;
    carat?: number;
    shape?: string;
    treatment?: string;
  };
  
  // Variants
  hasVariants: boolean;
  variants?: IProductVariant[];
  defaultVariant?: IProductVariant;
  
  // Attributes
  attributes?: IProductAttribute[];
  
  // Dimensions & Weight
  weight?: number;
  weightUnit?: 'g' | 'kg' | 'oz' | 'lb';
  dimensions?: IDimensions;
  
  // Features
  isCustomizable: boolean;
  isFeatured: boolean;
  isNewArrival: boolean;
  isBestSeller: boolean;
  isOnSale: boolean;
  isDigital: boolean;
  isVirtual: boolean;
  isDownloadable: boolean;
  
  // Reviews & Ratings
  rating?: number;
  reviewCount: number;
  reviews?: IReview[];
  
  // SEO
  seo: ISeoInfo;
  
  // Shipping
  shipping: IShippingInfo;
  
  // Related Products
  relatedProducts?: Types.ObjectId[];
  crossSellProducts?: Types.ObjectId[];
  upSellProducts?: Types.ObjectId[];
  
  // Status
  status: 'draft' | 'pending' | 'publish' | 'private' | 'trash';
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
}

const dimensionsSchema = new Schema<IDimensions>({
  length: { type: Number, min: 0 },
  width: { type: Number, min: 0 },
  height: { type: Number, min: 0 },
  diameter: { type: Number, min: 0 },
  chainLength: { type: Number, min: 0 },
  unit: { type: String, enum: ['mm', 'cm', 'inch'], default: 'mm' }
}, { _id: false });

const variantSchema = new Schema<IProductVariant>({
  name: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  price: { type: Number, required: true, min: 0 },
  originalPrice: { type: Number, min: 0 },
  costPrice: { type: Number, min: 0 },
  stock: { type: Number, required: true, default: 0 },
  weight: { type: Number, min: 0 },
  weightUnit: { type: String, enum: ['g', 'kg', 'oz', 'lb'], default: 'g' },
  dimensions: dimensionsSchema,
  barcode: String,
  images: [String],
  isDefault: { type: Boolean, default: false }
}, { _id: false, timestamps: true });

const attributeSchema = new Schema<IProductAttribute>({
  name: { type: String, required: true },
  value: { type: String, required: true },
  filterable: { type: Boolean, default: false }
}, { _id: false });

const reviewSchema = new Schema<IReview>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { _id: true, timestamps: true });

const seoInfoSchema = new Schema<ISeoInfo>({
  metaTitle: String,
  metaDescription: String,
  metaKeywords: [String],
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true }
}, { _id: false });

const shippingInfoSchema = new Schema<IShippingInfo>({
  weight: { type: Number, required: true, min: 0 },
  weightUnit: { type: String, enum: ['g', 'kg', 'oz', 'lb'], default: 'g' },
  dimensions: { type: dimensionsSchema, required: true },
  requiresShipping: { type: Boolean, default: true },
  freeShipping: { type: Boolean, default: false },
  shippingClass: String
}, { _id: false });

const jewelryProductSchema = new Schema<IJewelryProduct>(
  {
    // Basic Information
    name: { 
      type: String, 
      required: [true, 'Product name is required'],
      trim: true,
      maxlength: [200, 'Product name cannot exceed 200 characters']
    },
    description: { 
      type: String, 
      required: [true, 'Product description is required'] 
    },
    shortDescription: {
      type: String,
      maxlength: [500, 'Short description cannot exceed 500 characters']
    },
    sku: { 
      type: String, 
      required: [true, 'SKU is required'],
      unique: true,
      uppercase: true,
      trim: true
    },
    barcode: { type: String, trim: true },
    
    // Pricing
    price: { 
      type: Number, 
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
      set: (v: number) => Math.round(v * 100) / 100 // Store prices with 2 decimal places
    },
    originalPrice: { 
      type: Number, 
      min: [0, 'Original price cannot be negative'],
      set: (v: number) => v ? Math.round(v * 100) / 100 : undefined
    },
    costPrice: { 
      type: Number, 
      min: [0, 'Cost price cannot be negative'],
      set: (v: number) => v ? Math.round(v * 100) / 100 : undefined
    },
    taxClass: { type: String, trim: true },
    taxStatus: { 
      type: String, 
      enum: ['taxable', 'shipping', 'none'],
      default: 'taxable'
    },
    
    // Inventory
    stock: { 
      type: Number, 
      required: [true, 'Stock is required'],
      min: [0, 'Stock cannot be negative'],
      default: 0
    },
    stockStatus: {
      type: String,
      enum: ['in_stock', 'out_of_stock', 'on_backorder'],
      default: 'in_stock'
    },
    lowStockThreshold: { 
      type: Number, 
      min: [0, 'Low stock threshold cannot be negative']
    },
    backordersAllowed: { type: Boolean, default: false },
    soldIndividually: { type: Boolean, default: false },
    
    // Categories & Tags
    category: { 
      type: String, 
      required: [true, 'Category is required'],
      enum: ['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Watches', 'Other']
    },
    subcategory: { type: String, trim: true },
    collections: [{ 
      type: Schema.Types.ObjectId, 
      ref: 'Collection' 
    }],
    tags: [{ 
      type: String, 
      trim: true,
      lowercase: true
    }],
    
    // Media
    images: [{ 
      type: String, 
      required: [true, 'At least one image is required'] 
    }],
    videoUrl: { type: String, trim: true },
    
    // Jewelry Specific
    material: { 
      type: String, 
      required: [true, 'Material is required'],
      enum: ['Gold', 'Silver', 'Platinum', 'Diamond', 'Gemstone', 'Pearl', 'Other']
    },
    metalPurity: { 
      type: String, 
      enum: ['10K', '14K', '18K', '22K', '24K', '925', '950', 'Other', null],
      default: null
    },
    color: { 
      type: String, 
      required: [true, 'Color is required'],
      trim: true
    },
    gemstone: {
      type: {
        type: String,
        required: [
          function(this: IJewelryProduct) { 
            return this.material === 'Diamond' || this.material === 'Gemstone' || this.material === 'Pearl'; 
          },
          'Gemstone type is required for this material'
        ]
      },
      color: { type: String },
      clarity: { type: String },
      carat: { type: Number, min: 0 },
      shape: { type: String },
      treatment: { type: String }
    },
    
    // Variants
    hasVariants: { type: Boolean, default: false },
    variants: [variantSchema],
    defaultVariant: { type: variantSchema },
    
    // Attributes
    attributes: [attributeSchema],
    
    // Dimensions & Weight
    weight: { type: Number, min: 0 },
    weightUnit: { 
      type: String, 
      enum: ['g', 'kg', 'oz', 'lb'],
      default: 'g'
    },
    dimensions: dimensionsSchema,
    
    // Features
    isCustomizable: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
    isNewArrival: { type: Boolean, default: false },
    isBestSeller: { type: Boolean, default: false },
    isOnSale: { type: Boolean, default: false },
    isDigital: { type: Boolean, default: false },
    isVirtual: { type: Boolean, default: false },
    isDownloadable: { type: Boolean, default: false },
    
    // Reviews & Ratings
    rating: { 
      type: Number, 
      min: 0, 
      max: 5,
      set: (v: number) => v ? parseFloat(v.toFixed(1)) : undefined
    },
    reviewCount: { type: Number, default: 0, min: 0 },
    reviews: [reviewSchema],
    
    // SEO
    seo: { 
      type: seoInfoSchema, 
      required: [true, 'SEO information is required'] 
    },
    
    // Shipping
    shipping: { 
      type: shippingInfoSchema, 
      required: [true, 'Shipping information is required'] 
    },
    
    // Related Products
    relatedProducts: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    crossSellProducts: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    upSellProducts: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    
    // Status
    status: { 
      type: String, 
      enum: ['draft', 'pending', 'publish', 'private', 'trash'],
      default: 'draft'
    },
    
    // Timestamps
    publishedAt: { type: Date }
  },
  { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Add text index for search functionality
jewelryProductSchema.index({ 
  name: 'text', 
  description: 'text',
  category: 'text',
  'gemstone.type': 'text'
});

// Virtual for product URL
jewelryProductSchema.virtual('url').get(function() {
  return `/products/${this._id}`;
});

// Pre-save hook to ensure SKU is uppercase
jewelryProductSchema.pre('save', function(next) {
  if (this.sku) {
    this.sku = this.sku.toUpperCase();
  }
  next();
});

export default mongoose.models.JewelryProduct || 
  mongoose.model<IJewelryProduct>('JewelryProduct', jewelryProductSchema);

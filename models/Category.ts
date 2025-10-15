import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  slug: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    description: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

// Create text index for search
categorySchema.index({ name: 'text', description: 'text' });

const Category: Model<ICategory> = 
  mongoose.models.Category || 
  mongoose.model<ICategory>('Category', categorySchema);

export default Category;

import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Category from '@/models/Category';

const connectDB = async () => {
  if (mongoose.connections[0]?.readyState) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI || '');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { name, description } = await request.json();
    
    if (!name) {
      return NextResponse.json(
        { error: 'Category name is required' },
        { status: 400 }
      );
    }

    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const category = await Category.findByIdAndUpdate(
      params.id,
      { name, slug, description },
      { new: true, runValidators: true }
    );

    if (!category) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(category);
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Category with this name already exists' },
        { status: 400 }
      );
    }
    console.error('Error updating category:', error);
    return NextResponse.json(
      { error: 'Failed to update category' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    // Check if there are any blogs using this category
    // You'll need to import and use your Blog model here
    // const blogCount = await Blog.countDocuments({ category: params.id });
    // if (blogCount > 0) {
    //   return NextResponse.json(
    //     { error: 'Cannot delete category with associated blogs' },
    //     { status: 400 }
    //   );
    // }
    
    const category = await Category.findByIdAndDelete(params.id);
    
    if (!category) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json(
      { error: 'Failed to delete category' },
      { status: 500 }
    );
  }
}

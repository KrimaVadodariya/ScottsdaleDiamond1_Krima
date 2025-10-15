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

export async function GET() {
  try {
    await connectDB();
    const categories = await Category.find({}).sort({ name: 1 });
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, description } = await req.json();
    
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

    const category = new Category({
      name,
      slug,
      description
    });

    await category.save();
    return NextResponse.json(category, { status: 201 });
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Category already exists' },
        { status: 400 }
      );
    }
    console.error('Error creating category:', error);
    return NextResponse.json(
      { error: 'Failed to create category' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import sanityClient from '@/sanity/sanity.client';

// Function to create a new product
async function createProduct(newProduct: any) {
  try {
    const result = await sanityClient.create({
      _type: 'products',
      _id: newProduct.number,
      title: newProduct.title,
      price: newProduct.price,
      priceWithoutDiscount: newProduct.priceWithoutDiscount,
      image: newProduct.image,
      status: newProduct.status,
      badge: newProduct.badge,
      inventory: newProduct.inventory,
      category: newProduct.category,
    });
    return result;
  } catch (error: any) {
    throw new Error(`Error creating product: ${error.message}`);
  }
}

// Function to delete a product by ID
async function deleteProduct(productId: any) {
  try {
    const result = await sanityClient.delete(productId);
    return result;
  } catch (error: any) {
    throw new Error(`Error deleting product: ${error.message}`);
  }
}

// Function to fetch all products
async function getProducts() {
  try {
    const data = await sanityClient.fetch('*[_type == "products"]');
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching products: ${error.message}`);
  }
}

// Function to update a product
async function updateProduct(_id: any, updateProduct: any) {
  try {
    const result = await sanityClient
      .patch(_id)
      .set(updateProduct)  // Apply the update
      .commit();  // Commit the update to Sanity
    return result;
  } catch (error: any) {
    throw new Error(`Error updating product: ${error.message}`);
  }
}

// Handle GET request to fetch products
export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json(products);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// Handle POST request to create a product
export async function POST(req: Request) {
  try {
    const newProduct = await req.json();
    const createdProduct = await createProduct(newProduct);
    return NextResponse.json(createdProduct, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// Handle PUT request to update a product
export async function PUT(req: Request) {
  try {
    const { _id, updatedData } = await req.json();
    const updatedProduct = await updateProduct(_id, updatedData);
    return NextResponse.json(updatedProduct);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// Handle DELETE request to delete a product
export async function DELETE(req: Request) {
  try {
    const { productId } = await req.json();
    const deletedProduct = await deleteProduct(productId);
    return NextResponse.json({ message: 'Product deleted successfully', deletedProduct });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

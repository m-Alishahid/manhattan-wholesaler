import { NextResponse } from 'next/server';

let cart: any[] = []; // In-memory cart for demo

export async function GET() {
  return NextResponse.json(cart);
}

export async function POST(request: Request) {
  const body = await request.json();
  cart.push(body);
  return NextResponse.json({ message: 'Added to cart' });
}

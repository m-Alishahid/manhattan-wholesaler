'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import Image from 'next/image';
import { ArrowLeft, ShoppingCart, MessageSquare, Star, Shield, Truck, Award } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const product = products.find(p => p.id === id);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-foreground-light mb-8">The product you're looking for doesn't exist.</p>
          <Link href="/products" className="btn-primary">
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  const addToCart = async () => {
    await fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...product, quantity }),
    });
    alert('Added to cart!');
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container">
          <nav className="flex items-center space-x-2 text-sm text-foreground-light">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary">Products</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-2">
                <div className="aspect-square w-20 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-black mb-4">{product.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-bold text-primary">${product.price}</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-foreground-light ml-2">(4.8)</span>
                  </div>
                </div>
                <p className="text-lg text-foreground-light leading-relaxed">{product.description}</p>
              </div>

              {/* Specifications */}
              <div className="card p-6">
                <h2 className="text-xl font-bold mb-4 text-primary">Specifications</h2>
                <ul className="space-y-2">
                  {product.specifications.map((spec, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground-light">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity and Actions */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Quantity</label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 text-center min-w-[3rem]">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm text-foreground-light">
                      ${product.price * quantity} total
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={addToCart}
                    className="btn-primary flex items-center justify-center gap-2 py-4 px-8 text-lg font-semibold"
                  >
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                    className="btn-secondary flex items-center justify-center gap-2 py-4 px-8 text-lg font-semibold"
                  >
                    <MessageSquare size={20} />
                    Request Quote
                  </Link>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-xs text-foreground-light">Quality Guaranteed</p>
                </div>
                <div className="text-center">
                  <Truck className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-xs text-foreground-light">Fast Shipping</p>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-xs text-foreground-light">Certified Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`} className="group">
                  <div className="card overflow-hidden">
                    <div className="aspect-square bg-gray-100 relative overflow-hidden">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-primary font-semibold">${relatedProduct.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Back to Products */}
      <section className="py-8">
        <div className="container text-center">
          <Link href="/products" className="btn-secondary inline-flex items-center gap-2">
            <ArrowLeft size={18} />
            Back to All Products
          </Link>
        </div>
      </section>
    </div>
  );
}

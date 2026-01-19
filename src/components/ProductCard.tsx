import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleAddToCart = () => {
    fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    }).then(() => {
      alert('Added to cart!');
    }).catch(() => {
      alert('Failed to add to cart. Please try again.');
    });
  };

  return (
    <div className="card group h-full flex flex-col">
      <div className="relative h-48 md:h-56 overflow-hidden rounded-t-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
          NEW
        </div>
      </div>
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        <div className="mb-3">
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
            {product.category}
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 flex-shrink-0">
          {product.name}
        </h3>
        <p className="text-sm mb-4 line-clamp-2 leading-relaxed flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-4 flex-shrink-0">
          <span className="text-xl md:text-2xl font-bold text-primary">${product.price}</span>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-sm">⭐</span>
            ))}
          </div>
        </div>
        <div className="flex gap-2 justify-center mt-auto">
          <Link
            href={`/products/${product.id}`}
            className="btn-secondary text-center py-2 px-3 md:px-4 rounded-lg font-semibold text-xs hover:shadow-lg transition-all flex-1"
          >
            View Details
          </Link>
          <button
            onClick={handleAddToCart}
            className="btn-primary py-2 px-3 md:px-4 rounded-lg font-semibold text-xs hover:shadow-lg transition-all flex-1"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

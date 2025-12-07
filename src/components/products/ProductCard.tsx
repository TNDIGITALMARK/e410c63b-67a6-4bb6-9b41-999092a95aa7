"use client";

import Image from 'next/image';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/lib/store/cart-store';
import { Product } from '@/lib/data/products';
import { toast } from 'sonner';

interface ProductCardProps extends Product {}

export function ProductCard(product: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl,
      type: 'product',
    });

    toast.success(`${product.name} added to cart!`, {
      description: `$${product.price} • Quantity: 1`,
    });
  };

  const occasionColors: Record<string, string> = {
    birthday: 'bg-amber-100 text-amber-700 hover:bg-amber-200',
    wedding: 'bg-pink-100 text-pink-700 hover:bg-pink-200',
    anniversary: 'bg-rose-100 text-rose-700 hover:bg-rose-200',
    corporate: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
    holiday: 'bg-green-100 text-green-700 hover:bg-green-200',
    graduation: 'bg-purple-100 text-purple-700 hover:bg-purple-200',
    'baby-shower': 'bg-sky-100 text-sky-700 hover:bg-sky-200',
    other: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
  };

  return (
    <div className="group bg-card border rounded-xl overflow-hidden hover:shadow-product-hover transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.featured && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-primary text-primary-foreground font-semibold">
              Featured
            </Badge>
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive" className="text-base px-4 py-2">
              Out of Stock
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Occasions */}
        <div className="flex flex-wrap gap-1.5">
          {product.occasions.slice(0, 2).map((occasion) => (
            <Badge
              key={occasion}
              variant="secondary"
              className={`text-xs ${occasionColors[occasion]}`}
            >
              {occasion.replace('-', ' ')}
            </Badge>
          ))}
          {product.occasions.length > 2 && (
            <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
              +{product.occasions.length - 2}
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg leading-tight line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-semibold">{product.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviewCount} reviews)
          </span>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2 border-t">
          <div>
            <div className="text-2xl font-bold text-foreground">
              ${product.price}
            </div>
          </div>
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="gap-2"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}

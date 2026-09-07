import type { Product } from "../../../types/marketplace";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: Product[];
  onProductClick: (product: Product) => void;
};

export default function ProductGrid({
  products,
  onProductClick,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-200 py-16 text-center">
        <p className="font-medium text-gray-700">No products found</p>

        <p className="mt-1 text-sm text-gray-400">
          Try searching for something else.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onProductClick(product)}
        />
      ))}
    </div>
  );
}

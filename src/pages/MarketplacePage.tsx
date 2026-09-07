import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import MarketplaceHeader from "../components/shop/Marketplace/MarketplaceHeader";
import ProductGrid from "../components/shop/Marketplace/ProductGrid";

import { getMarketplaceProducts } from "../services/marketplaceApi";
import type { Product } from "../types/marketplace";

export default function MarketplacePage() {
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const data = await getMarketplaceProducts();

        setProducts(data);
      } catch {
        setError("Unable to load marketplace products.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return products;
    }

    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.storage?.toLowerCase().includes(query)
      );
    });
  }, [products, search]);

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <MarketplaceHeader search={search} onSearchChange={setSearch} />

      {loading && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="animate-pulse rounded-2xl border border-gray-100 bg-white p-3"
            >
              <div className="h-56 rounded-xl bg-gray-100" />

              <div className="mt-4 h-3 w-20 rounded bg-gray-100" />

              <div className="mt-2 h-5 w-36 rounded bg-gray-100" />

              <div className="mt-4 h-8 rounded bg-gray-100" />
            </div>
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="rounded-xl border border-red-100 bg-red-50 p-5 text-sm text-red-600">
          {error}
        </div>
      )}

      {!loading && !error && (
        <ProductGrid
          products={filteredProducts}
          onProductClick={(product) =>
            navigate(`/shop/marketplace/${product.id}`)
          }
        />
      )}
    </div>
  );
}

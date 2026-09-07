import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ProductGallery from "../components/shop/Marketplace/ProductDetails/ProductGallery";
import ProductInfo from "../components/shop/Marketplace/ProductDetails/ProductInfo";

import { getMarketplaceProduct } from "../services/marketplaceApi";
import type { Product } from "../types/marketplace";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProduct() {
      if (!productId) {
        setError("Product not found.");
        setLoading(false);
        return;
      }

      try {
        const data = await getMarketplaceProduct(productId);

        if (!data) {
          setError("Product not found.");
          return;
        }

        setProduct(data);
      } catch {
        setError("Unable to load product.");
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white p-6">
        <div className="mx-auto max-w-6xl animate-pulse">
          <div className="h-6 w-20 rounded bg-gray-100" />

          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div className="h-[500px] rounded-2xl bg-gray-100" />

            <div>
              <div className="h-5 w-16 rounded bg-gray-100" />
              <div className="mt-4 h-10 w-72 rounded bg-gray-100" />
              <div className="mt-6 h-12 w-48 rounded bg-gray-100" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-5">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-gray-900">
            {error || "Product not found"}
          </h1>

          <button
            onClick={() => navigate("/shop")}
            className="mt-4 rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-5 pb-28 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900"
        >
          ← Back
        </button>

        <div className="mt-6 grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <ProductGallery product={product} />

          <ProductInfo product={product} />
        </div>
      </div>
    </div>
  );
}

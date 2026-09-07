import { useState } from "react";
import type { Product } from "../../../../types/marketplace";

type ProductGalleryProps = {
  product: Product;
};

export default function ProductGallery({ product }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div>
      <div className="flex min-h-[420px] items-center justify-center rounded-3xl bg-gray-50 p-8 sm:min-h-[520px]">
        <img
          src={selectedImage}
          alt={product.name}
          className="max-h-[460px] w-full object-contain"
        />
      </div>

      {product.images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {product.images.map((image) => (
            <button
              key={image}
              onClick={() => setSelectedImage(image)}
              className={`h-20 w-20 overflow-hidden rounded-xl border-2 bg-gray-50 p-2 ${
                selectedImage === image
                  ? "border-gray-900"
                  : "border-transparent"
              }`}
            >
              <img
                src={image}
                alt=""
                className="h-full w-full object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

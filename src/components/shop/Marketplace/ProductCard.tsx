import type { Product } from "../../../types/marketplace";

type ProductCardProps = {
  product: Product;
  onClick: () => void;
};

const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const lowestEmi = product.emiPlans.reduce(
    (lowest, plan) =>
      plan.monthlyAmount < lowest.monthlyAmount ? plan : lowest,
    product.emiPlans[0],
  );

  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full rounded-2xl border border-gray-100 bg-white p-3 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-xl bg-gray-50 sm:h-56">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-gray-900 px-2.5 py-1 text-[11px] font-semibold text-white">
            {product.badge}
          </span>
        )}
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain p-5 transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="px-1 pt-4">
        <p className="text-xs font-medium text-gray-400">{product.category}</p>

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          {product.name}
        </h3>

        {product.storage && (
          <p className="mt-1 text-sm text-gray-500">{product.storage}</p>
        )}

        <div className="mt-3 flex items-end gap-2">
          <span className="text-lg font-semibold text-gray-900">
            {formatPrice(product.price)}
          </span>

          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        <div className="mt-3 rounded-xl bg-purple-50 px-3 py-2.5">
          <p className="text-[11px] font-medium text-purple-600">
            EMI starting from
          </p>

          <p className="mt-0.5 text-sm font-semibold text-purple-900">
            ₹{lowestEmi.monthlyAmount.toLocaleString("en-IN")}
            <span className="font-normal text-purple-600"> / month</span>
          </p>
        </div>
      </div>
    </button>
  );
}

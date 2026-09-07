import { useState } from "react";
import { useNavigate } from "react-router-dom";

import type { Product } from "../../../../types/marketplace";

import ContinueButton from "./ContinueButton";
import EmiPlanList from "./EmiPlanList";
import VariantSelector from "./VariantSelector";

type ProductInfoProps = {
  product: Product;
};

const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;

export default function ProductInfo({ product }: ProductInfoProps) {
  const navigate = useNavigate();

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0]?.id ?? "",
  );

  const [selectedPlan, setSelectedPlan] = useState("");

  const [confirmationPlan, setConfirmationPlan] = useState<
    (typeof product.emiPlans)[number] | null
  >(null);

  const handleContinue = () => {
    if (!selectedPlan) {
      return;
    }

    const plan = product.emiPlans.find((item) => item.id === selectedPlan);

    if (!plan) {
      return;
    }

    setConfirmationPlan(plan);
  };

  return (
    <div>
      {product.badge && (
        <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
          {product.badge}
        </span>
      )}

      <h1 className="mt-4 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
        {product.name}
      </h1>

      {product.storage && (
        <p className="mt-2 text-base text-gray-500">{product.storage}</p>
      )}

      <div className="mt-6">
        <div className="flex items-end gap-3">
          <span className="text-3xl font-semibold text-gray-900">
            {formatPrice(product.price)}
          </span>

          {product.originalPrice && (
            <span className="pb-1 text-base text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {product.originalPrice && (
          <p className="mt-2 text-sm font-medium text-green-600">
            Save {formatPrice(product.originalPrice - product.price)}
          </p>
        )}
      </div>

      <VariantSelector
        variants={product.variants}
        selectedVariant={selectedVariant}
        onChange={setSelectedVariant}
      />

      <EmiPlanList
        plans={product.emiPlans}
        selectedPlan={selectedPlan}
        onSelect={setSelectedPlan}
      />

      <ContinueButton disabled={!selectedPlan} onClick={handleContinue} />

      {confirmationPlan && (
        <div className="mt-4 rounded-2xl border border-purple-100 bg-purple-50 p-4">
          <p className="text-sm font-semibold text-purple-900">
            EMI plan selected
          </p>

          <p className="mt-1 text-sm text-purple-700">
            {product.name} · {confirmationPlan.months} months · ₹
            {confirmationPlan.monthlyAmount.toLocaleString("en-IN")}/month
          </p>
        </div>
      )}

      <button
        onClick={() => navigate("/shop")}
        className="mt-3 w-full rounded-2xl border border-gray-200 py-4 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
      >
        Back to Marketplace
      </button>
    </div>
  );
}

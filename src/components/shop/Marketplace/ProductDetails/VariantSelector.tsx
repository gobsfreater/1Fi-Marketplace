import type { ProductVariant } from "../../../../types/marketplace";

type VariantSelectorProps = {
  variants: ProductVariant[];
  selectedVariant: string;
  onChange: (variantId: string) => void;
};

export default function VariantSelector({
  variants,
  selectedVariant,
  onChange,
}: VariantSelectorProps) {
  if (variants.length === 0) {
    return null;
  }

  return (
    <div className="mt-7">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">
          Available in {variants.length} finishes
        </h3>

        <span className="text-xs text-gray-400">
          {variants.find((v) => v.id === selectedVariant)?.name}
        </span>
      </div>

      <div className="mt-4 flex gap-4">
        {variants.map((variant) => {
          const selected = variant.id === selectedVariant;

          return (
            <button
              key={variant.id}
              onClick={() => onChange(variant.id)}
              title={variant.name}
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition ${
                selected ? "border-gray-900" : "border-gray-200"
              }`}
            >
              <span
                className="h-7 w-7 rounded-full border border-black/10"
                style={{ backgroundColor: variant.color }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

import type { EMIPlan } from "../../../../types/marketplace";

type EmiPlanCardProps = {
  plan: EMIPlan;
  selected: boolean;
  onSelect: () => void;
};

export default function EmiPlanCard({
  plan,
  selected,
  onSelect,
}: EmiPlanCardProps) {
  return (
    <button
      onClick={onSelect}
      className={`w-full rounded-2xl border p-4 text-left transition ${
        selected
          ? "border-purple-500 bg-purple-50 ring-1 ring-purple-500"
          : "border-gray-200 bg-white hover:border-gray-300"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
            selected ? "border-purple-600" : "border-gray-300"
          }`}
        >
          {selected && (
            <div className="h-2.5 w-2.5 rounded-full bg-purple-600" />
          )}
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-base font-semibold text-gray-900">
                ₹{plan.monthlyAmount.toLocaleString("en-IN")}
              </span>

              <span className="ml-1 text-sm text-gray-500">
                × {plan.months} months
              </span>
            </div>

            <span className="text-sm font-medium text-green-600">
              {plan.interestRate === 0
                ? "0% interest"
                : `${plan.interestRate}% interest`}
            </span>
          </div>

          {plan.cashback && (
            <p className="mt-2 text-xs font-medium text-purple-600">
              Cashback ₹{plan.cashback.toLocaleString("en-IN")}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}

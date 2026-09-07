import type { EMIPlan } from "../../../../types/marketplace";
import EmiPlanCard from "./EmiPlanCard";

type EmiPlanListProps = {
  plans: EMIPlan[];
  selectedPlan: string;
  onSelect: (planId: string) => void;
};

export default function EmiPlanList({
  plans,
  selectedPlan,
  onSelect,
}: EmiPlanListProps) {
  return (
    <div className="mt-8">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          Choose your EMI plan
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          EMI plans backed by mutual funds.
        </p>
      </div>

      <div className="mt-4 space-y-3">
        {plans.map((plan) => (
          <EmiPlanCard
            key={plan.id}
            plan={plan}
            selected={selectedPlan === plan.id}
            onSelect={() => onSelect(plan.id)}
          />
        ))}
      </div>
    </div>
  );
}

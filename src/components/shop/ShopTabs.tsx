type ShopTab = {
  id: string;
  label: string;
};

type ShopTabsProps = {
  activeTab: string;
  onTabChange: (tabId: string) => void;
};

const tabs: ShopTab[] = [
  { id: "top-brands", label: "Top Brands" },
  { id: "nearby-stores", label: "Nearby Stores" },
  { id: "marketplace", label: "1Fi Marketplace" },
];

export default function Shoptabs({ activeTab, onTabChange }: ShopTabsProps) {
  return (
    <div className="overflow-x-auto">
      <div className="grid min-w-[420px] grid-cols-3 rounded-full bg-gray-200 p-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`rounded-full px-3 py-2.5 text-sm font-medium transition-all ${
                isActive
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

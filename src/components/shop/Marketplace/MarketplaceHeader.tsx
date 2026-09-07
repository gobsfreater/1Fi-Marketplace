import { Search } from "lucide-react";

type MarketplaceHeaderProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export default function MarketplaceHeader({
  search,
  onSearchChange,
}: MarketplaceHeaderProps) {
  return (
    <div className="mb-5">
      <div className="mb-4">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900">
          1Fi Marketplace
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Shop now and pay later using your mutual funds.
        </p>
      </div>
      <div className="relative">
        <Search
          size={18}
          strokeWidth={1.8}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search products..."
          className="h-12 w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-purple-300 focus:ring-4 focus:ring-purple-100"
        />
      </div>
    </div>
  );
}

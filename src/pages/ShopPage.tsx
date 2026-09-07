import { useState } from "react";
import BottomNav from "../components/BottomNav";
import ShopHeroBanner from "../components/shop/ShopHeroBanner";
import ShopPlaceholder from "../components/shop/ShopPlaceholder";
import ShopTabs from "../components/shop/ShopTabs";
import MarketplacePage from "./MarketplacePage";

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState("top-brands");

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero */}
      <div className="px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ShopHeroBanner />
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <ShopTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mt-5">
          {activeTab === "top-brands" && (
            <ShopPlaceholder
              title="Top Brands"
              description="Browse products from your favourite brands."
            />
          )}

          {activeTab === "nearby-stores" && (
            <ShopPlaceholder
              title="Nearby Stores"
              description="Explore stores available near you."
            />
          )}

          {activeTab === "marketplace" && <MarketplacePage />}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

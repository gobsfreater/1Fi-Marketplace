import {
  Gauge,
  House,
  ReceiptText,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  {
    label: "Home",
    path: "/",
    icon: House,
  },
  {
    label: "Shop",
    path: "/shop",
    icon: ShoppingBag,
  },
  {
    label: "EMI Dues",
    path: "/emi-dues",
    icon: ReceiptText,
  },
  {
    label: "Limit",
    path: "/limit",
    icon: Gauge,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: UserRound,
  },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-3 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 rounded-2xl border border-gray-100 bg-white/95 px-2 shadow-lg backdrop-blur">
      <div className="flex items-center justify-between">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition ${
                  isActive
                    ? "text-purple-600"
                    : "text-gray-400 hover:text-gray-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={19} strokeWidth={isActive ? 2.2 : 1.8} />

                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

import type { ReactNode } from "react";
import BottomNav from "../BottomNav";

type AppLayoutProps = {
  title: string;
  children: ReactNode;
};

export default function AppLayout({ title, children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="border-b border-gray-100 bg-white px-5 py-5">
        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
      </header>

      <main>{children}</main>

      <BottomNav />
    </div>
  );
}

import { marketplaceProducts } from "../../data/marketplaceData";

export default function ShopHeroBanner() {
  const iphone = marketplaceProducts.find(
    (product) => product.id === "iphone-17-pro-256",
  );
  const macbook = marketplaceProducts.find(
    (product) => product.id === "macbook-air",
  );
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#5B21B6] px-6 py-7 text-white sm:px-8 sm:py-8">
      <div className="relative z-20 max-w-md">
        <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
          NO-COST EMIs
        </span>

        <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Shop today,
          <br />
          <span className="font-normal italic">Pay later using</span>
          <br />
          Mutual funds.
        </h2>

        <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
          No credit score required. No interest. Backed by your investments.
        </p>
      </div>

      {/* Product visual */}
      <div className="pointer-events-none absolute -right-4 top-4 hidden h-full w-[42%] sm:block">
        {iphone && (
          <div className="absolute right-20 top-8 h-44 w-32 rotate-[-10deg] overflow-hidden rounded-2xl bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
            <div className="flex h-full items-center justify-center rounded-xl bg-white">
              <img
                src={iphone.images[0]}
                alt=""
                className="h-full w-full object-contain p-2"
              />
            </div>
          </div>
        )}

        {macbook && (
          <div className="absolute right-[-10px] top-20 h-32 w-44 rotate-[8deg] overflow-hidden rounded-2xl bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
            <div className="flex h-full items-center justify-center rounded-xl bg-white">
              <img
                src={macbook.images[0]}
                alt=""
                className="h-full w-full object-contain p-2"
              />
            </div>
          </div>
        )}
      </div>

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute -bottom-20 right-24 h-52 w-52 rounded-full bg-white/10" />
    </section>
  );
}

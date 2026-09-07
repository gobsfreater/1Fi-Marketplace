import { marketplaceProducts } from "../data/marketplaceData";
import type { Product } from "../types/marketplace";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getMarketplaceProducts(): Promise<Product[]> {
  await delay(700);

  return marketplaceProducts;
}

export async function getMarketplaceProduct(
  productId: string,
): Promise<Product | undefined> {
  await delay(500);

  return marketplaceProducts.find((product) => product.id === productId);
}

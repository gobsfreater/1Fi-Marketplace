export type ProductVariant = {
  id: string;
  name: string;
  color: string;
};

export type EMIPlan = {
  id: string;
  months: number;
  monthlyAmount: number;
  interestRate: number;
  cashback?: number;
};

export type Product = {
  id: string;
  name: string;
  badge?: string;
  category: string;
  storage?: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  variants: ProductVariant[];
  emiPlans: EMIPlan[];
};

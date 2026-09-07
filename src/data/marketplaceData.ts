import type { Product } from "../types/marketplace";

export const marketplaceProducts: Product[] = [
  {
    id: "iphone-17-pro-256",
    name: "iPhone 17 Pro",
    badge: "NEW",
    category: "Smartphones",
    storage: "256GB",
    price: 127400,
    originalPrice: 134900,
    description:
      "The latest iPhone Pro with advanced performance, camera capabilities and premium design.",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    ],
    variants: [
      {
        id: "natural-titanium",
        name: "Natural Titanium",
        color: "#b5b0a8",
      },
      {
        id: "black",
        name: "Black",
        color: "#1f1f1f",
      },
      {
        id: "white",
        name: "White",
        color: "#f1f1f1",
      },
    ],
    emiPlans: [
      {
        id: "emi-3",
        months: 3,
        monthlyAmount: 44967,
        interestRate: 0,
        cashback: 7500,
      },
      {
        id: "emi-6",
        months: 6,
        monthlyAmount: 22483,
        interestRate: 0,
        cashback: 7500,
      },
      {
        id: "emi-12",
        months: 12,
        monthlyAmount: 11242,
        interestRate: 0,
      },
      {
        id: "emi-24",
        months: 24,
        monthlyAmount: 5621,
        interestRate: 0,
      },
      {
        id: "emi-36",
        months: 36,
        monthlyAmount: 4297,
        interestRate: 10.5,
      },
      {
        id: "emi-48",
        months: 48,
        monthlyAmount: 3385,
        interestRate: 10.5,
      },
      {
        id: "emi-60",
        months: 60,
        monthlyAmount: 2842,
        interestRate: 10.5,
      },
    ],
  },

  {
    id: "macbook-air",
    name: "MacBook Air",
    category: "Laptops",
    storage: "256GB",
    price: 99900,
    originalPrice: 109900,
    description:
      "A lightweight laptop designed for everyday productivity and performance.",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
    ],
    variants: [
      {
        id: "silver",
        name: "Silver",
        color: "#c7c7c7",
      },
      {
        id: "midnight",
        name: "Midnight",
        color: "#24252a",
      },
    ],
    emiPlans: [
      {
        id: "mac-6",
        months: 6,
        monthlyAmount: 16650,
        interestRate: 0,
      },
      {
        id: "mac-12",
        months: 12,
        monthlyAmount: 8325,
        interestRate: 0,
      },
      {
        id: "mac-24",
        months: 24,
        monthlyAmount: 4163,
        interestRate: 10.5,
      },
    ],
  },

  {
    id: "airpods-pro",
    name: "AirPods Pro",
    category: "Audio",
    price: 24900,
    originalPrice: 26900,
    description:
      "Premium wireless earbuds with immersive audio and active noise cancellation.",
    images: [
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80",
    ],
    variants: [
      {
        id: "white",
        name: "White",
        color: "#f5f5f5",
      },
    ],
    emiPlans: [
      {
        id: "airpods-3",
        months: 3,
        monthlyAmount: 8300,
        interestRate: 0,
      },
      {
        id: "airpods-6",
        months: 6,
        monthlyAmount: 4150,
        interestRate: 0,
      },
      {
        id: "airpods-12",
        months: 12,
        monthlyAmount: 2075,
        interestRate: 10.5,
      },
    ],
  },
];

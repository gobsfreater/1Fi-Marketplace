# 1Fi Marketplace

A frontend implementation of the **1Fi Marketplace** as part of the 1Fi SDE Intern assignment.

The Marketplace is integrated into the existing Shop experience and allows users to browse products, view product details, select variants, explore EMI plans, and proceed with a selected EMI option.

## Features

- 1Fi Marketplace integrated within the Shop page
- Responsive product listing
- Product search
- Product detail pages
- Product image gallery
- Product variant selection
- EMI plan selection
- EMI details including tenure, monthly amount, interest rate, and cashback
- Continue CTA after selecting an EMI plan
- Loading and error states
- Responsive layout for desktop and mobile
- Mock API/service layer for dynamic product data
- Reusable React components

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React

## Project Structure

```text
src/
├── components/
│   ├── layout/
│   └── shop/
│       ├── Marketplace/
│       │   ├── MarketplaceHeader.tsx
│       │   ├── ProductCard.tsx
│       │   ├── ProductGrid.tsx
│       │   └── ProductDetails/
│       │       ├── ContinueButton.tsx
│       │       ├── EmiPlanCard.tsx
│       │       ├── EmiPlanList.tsx
│       │       ├── ProductGallery.tsx
│       │       ├── ProductInfo.tsx
│       │       └── VariantSelector.tsx
│       ├── ShopHeroBanner.tsx
│       ├── ShopPlaceholder.tsx
│       └── ShopTabs.tsx
├── data/
│   └── marketplaceData.ts
├── pages/
│   ├── MarketplacePage.tsx
│   ├── ProductDetailsPage.tsx
│   ├── ShopPage.tsx
│   └── GeneralPage.tsx
├── services/
│   └── marketplaceApi.tsx
├── types/
│   └── marketplace.ts
├── App.tsx
├── index.css
└── main.tsx

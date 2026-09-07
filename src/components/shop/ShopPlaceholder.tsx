type ShopPlaceholderProps = {
  title: string;
  description: string;
};

function ShopPlaceholder({ title, description }: ShopPlaceholderProps) {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
export default ShopPlaceholder;

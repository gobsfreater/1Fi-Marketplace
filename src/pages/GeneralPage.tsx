import AppLayout from "../components/layout/Applayout";

type GeneralPageProps = {
  title: string;
};

export default function GeneralPage({ title }: GeneralPageProps) {
  return (
    <AppLayout title={title}>
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-purple-100 px-5 py-5">
          <p className="text-lg font-semibold text-gray-900">
            Shop today, Pay later
          </p>

          <p className="mt-1 text-sm text-gray-600">
            Use your mutual funds to pay for your purchases.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <p>This is just a placeholder and not part of the assignment.</p>
        </div>
      </div>
    </AppLayout>
  );
}

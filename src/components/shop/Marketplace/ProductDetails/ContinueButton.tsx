type ContinueButtonProps = {
  disabled: boolean;
  onClick: () => void;
};

export default function ContinueButton({
  disabled,
  onClick,
}: ContinueButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`mt-6 w-full rounded-2xl py-4 text-sm font-semibold transition ${
        disabled
          ? "cursor-not-allowed bg-gray-100 text-gray-400"
          : "bg-gray-900 text-white hover:bg-gray-800"
      }`}
    >
      {disabled ? "Select an EMI plan" : "Continue"}
    </button>
  );
}

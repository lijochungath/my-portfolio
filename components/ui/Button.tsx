type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "border border-slate-500 hover:border-blue-500";

  return (
    <button
      className={`px-6 py-3 rounded-lg font-medium transition ${styles}`}
    >
      {children}
    </button>
  );
}
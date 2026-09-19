const VARIANTS = {
  primary:
    "bg-teal-800 text-white shadow-lg shadow-teal-900/20 hover:bg-teal-900",
  accent: "bg-emerald-200 text-teal-900 hover:bg-emerald-100",
  white: "bg-white text-teal-800 hover:bg-teal-50",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2 text-sm",
  lg: "px-7 py-3.5 text-sm",
};

export default function Button({
  as = "a",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}) {
  const Tag = as;
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

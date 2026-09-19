export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}) {
  const alignment = align === "center" ? "text-center" : "text-left";
  return (
    <div className={`${alignment} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.2em] text-teal-700">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-teal-900">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-teal-800/70">{subtitle}</p>}
    </div>
  );
}

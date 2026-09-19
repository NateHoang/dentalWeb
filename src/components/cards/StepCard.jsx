export default function StepCard({ n, title, text }) {
  return (
    <div className="rounded-3xl bg-teal-800/95 p-8 text-white">
      <span className="text-sm font-semibold text-emerald-200">Step {n}</span>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-2 leading-relaxed text-teal-50/85">{text}</p>
    </div>
  );
}

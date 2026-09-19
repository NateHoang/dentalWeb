import { IconQuote, IconStar } from "../icons/index.jsx";

export default function ReviewCard({ label, text }) {
  return (
    <div className="h-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-teal-900/5">
      <IconQuote size={26} className="text-emerald-300" />
      <div className="mt-4 flex gap-1 text-amber-400">
        {[0, 1, 2, 3, 4].map((s) => (
          <IconStar key={s} size={15} />
        ))}
      </div>
      <p className="mt-4 leading-relaxed text-teal-900">{text}</p>
      <p className="mt-6 text-xs font-semibold tracking-wide text-teal-700">
        {label.toUpperCase()}
      </p>
    </div>
  );
}

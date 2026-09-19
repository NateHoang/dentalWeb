import { ICONS } from "../icons/index.jsx";

export default function ServiceCard({ icon, title, text }) {
  const Icon = ICONS[icon];
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-teal-900/5">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-teal-800">
        {Icon && <Icon size={22} />}
      </span>
      <h3 className="mt-6 text-lg font-semibold text-teal-900">{title}</h3>
      <p className="mt-3 leading-relaxed text-teal-800/75">{text}</p>
    </div>
  );
}

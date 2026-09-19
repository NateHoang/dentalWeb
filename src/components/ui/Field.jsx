export const inputClass =
  "w-full rounded-xl border border-teal-900/15 bg-white px-4 py-3 text-teal-900 outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-emerald-200";

export default function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-teal-900">
        {label}
      </span>
      {children}
    </label>
  );
}

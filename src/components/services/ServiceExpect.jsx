export default function ServiceExpect({ visit }) {
  return (
    <section className="px-4 pb-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl bg-teal-800/95 p-8 text-white">
          <h2 className="text-lg font-semibold">What to expect</h2>
          <p className="mt-3 leading-relaxed text-teal-50/85">{visit}</p>
        </div>
        <p className="mt-6 rounded-2xl bg-emerald-50 p-5 text-sm leading-relaxed text-teal-800">
          Treatment is provided under licensed faculty supervision and
          availability depends on clinical assessment and school guidelines.
          Nothing on this page is a diagnosis or a promise of a specific result.
        </p>
      </div>
    </section>
  );
}

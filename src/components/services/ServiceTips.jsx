export default function ServiceTips({ tips }) {
  if (!tips) return null;

  return (
    <section className="px-4 pb-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:items-start sm:gap-10">
          <h2 className="text-3xl font-bold tracking-tight text-teal-700/70 sm:text-4xl">
            {tips.heading}
          </h2>
          <p className="text-sm leading-relaxed text-teal-900/80 sm:pt-2">
            {tips.lead}
          </p>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {tips.items.map((tip) => (
            <div key={tip.title}>
              <h3 className="text-xl font-bold tracking-tight text-teal-950">
                {tip.title}
              </h3>
              <div className="mt-3 flex gap-2.5">
                <img
                  src={tip.icon}
                  alt=""
                  className="mt-0.5 h-16 w-16 shrink-0 rounded-full"
                />
                <p className="text-sm leading-relaxed text-teal-800/85">
                  {tip.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

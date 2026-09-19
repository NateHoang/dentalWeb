import { useState } from "react";
import { IconChevronDown } from "../ui/Icons";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  heading: string;
  items: FAQItem[];
};

export default function FAQSection({ heading, items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-teal-900 sm:text-4xl">
          {heading}
        </h2>

        <div className="mt-8 space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white ring-1 ring-teal-900/5"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="w-full cursor-pointer px-6 py-4 text-left flex items-center justify-between transition hover:bg-emerald-50/40"
              >
                <span className="text-sm font-semibold text-teal-900">
                  {item.question}
                </span>
                <IconChevronDown
                  size={18}
                  className={`shrink-0 text-teal-700 transition ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="border-t border-teal-900/5 px-6 py-4 bg-emerald-50/40">
                  <p className="text-sm leading-relaxed text-teal-800/85">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

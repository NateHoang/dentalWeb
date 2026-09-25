import { SITE } from "../data/site.js";

export default function PrivacyPolicy() {
  const updated = "September 2026";

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-semibold text-teal-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>

        <div className="mt-8 space-y-8 text-sm leading-7 text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-teal-900">Who we are</h2>
            <p className="mt-2">
              {SITE.name} is a dental student clinic operating under licensed
              faculty supervision at {SITE.school}. This policy explains what
              information this website collects, why, and how it is handled.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-teal-900">
              Information we collect
            </h2>
            <p className="mt-2">
              This website collects only what you choose to send us. That may
              include:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Your name and contact details, when you request an appointment
              </li>
              <li>The content of any message you send us</li>
              <li>
                Basic technical information such as browser type and pages
                visited, collected in aggregate for site reliability
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-teal-900">
              How we use it
            </h2>
            <p className="mt-2">
              Information you send is used solely to respond to your enquiry and
              to arrange or manage appointments. It is not used for marketing
              and is never sold or shared with third parties for their own
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-teal-900">
              Clinical records
            </h2>
            <p className="mt-2">
              If you become a patient, your clinical records are kept separately
              from this website, under the supervision of licensed faculty, and
              are handled in line with applicable health information
              regulations. This website does not store clinical records.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-teal-900">
              Cookies and analytics
            </h2>
            <p className="mt-2">
              This site may use minimal, privacy-respecting analytics to
              understand which pages are useful. No advertising cookies are
              used, and no personal information is sold.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-teal-900">Your rights</h2>
            <p className="mt-2">
              You can ask us what information we hold about you, request a copy,
              or ask us to delete it. To do so, contact us using the details
              below.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-teal-900">Contact</h2>
            <p className="mt-2">
              Questions about this policy can be sent to{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-teal-700 underline hover:text-teal-900"
              >
                {SITE.email}
              </a>{" "}
              or by phone at {SITE.phoneDisplay}.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

import { useState } from "react";
import { SITE } from "../data/site.js";
import { submitRequest } from "../lib/submitRequest.js";
import Field, { inputClass } from "../components/ui/Field.jsx";
import {
  IconMail,
  IconPhone,
  IconPin,
  IconShield,
} from "../components/icons/index.jsx";

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  contact: "Email",
  message: "",
  consent: false,
};

function ContactColumn() {
  return (
    <div>
      <h2 className="text-3xl font-semibold tracking-tight text-teal-900">
        Let&rsquo;s talk about your smile
      </h2>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-teal-800/80">
        Tell me how to reach you and what you would like help with. I will
        follow up and the clinic will confirm availability and next steps.
      </p>

      <ul className="mt-9 space-y-4 text-teal-900">
        <li className="flex items-center gap-3">
          <IconPhone size={18} className="text-teal-700" />
          <span>{SITE.phoneDisplay}</span>
        </li>
        <li className="flex items-center gap-3">
          <IconMail size={18} className="text-teal-700" />
          <span>{SITE.email}</span>
        </li>
        <li className="flex items-center gap-3">
          <IconPin size={18} className="text-teal-700" />
          <span>{SITE.address}</span>
        </li>
      </ul>

      <p className="mt-9 max-w-md rounded-2xl bg-emerald-50 p-5 text-sm leading-relaxed text-teal-800">
        Please don&rsquo;t include medical records or sensitive health details
        in this form. Submitting a request does not confirm an appointment. For
        urgent dental problems, contact a clinic directly.
      </p>
    </div>
  );
}

function SuccessState({ onReset }) {
  return (
    <div className="flex h-full flex-col items-start justify-center gap-4">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-200 text-teal-900">
        <IconShield size={22} />
      </span>
      <h3 className="text-xl font-semibold text-teal-900">
        Thank you — your request was received.
      </h3>
      <p className="text-teal-800/80">
        I will reach out using the contact method you selected.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="text-sm font-semibold text-teal-800 underline underline-offset-4"
      >
        Send another request
      </button>
    </div>
  );
}

function AppointmentForm({ onSent }) {
  const [form, setForm] = useState(EMPTY);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  const update = (key) => (e) =>
    setForm((f) => ({
      ...f,
      [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      await submitRequest(form);
      setForm(EMPTY);
      onSent();
    } catch (err) {
      setError("Something went wrong. Please try again or call the clinic.");
      console.error(err);
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h3 className="text-lg font-semibold text-teal-900">
        Request an appointment
      </h3>

      <Field label="Full name">
        <input
          required
          value={form.name}
          onChange={update("name")}
          className={inputClass}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email">
          <input
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            className={inputClass}
          />
        </Field>
        <Field label="Phone">
          <input
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Preferred contact method">
        <select
          value={form.contact}
          onChange={update("contact")}
          className={inputClass}
        >
          <option>Email</option>
          <option>Phone call</option>
          <option>Text message</option>
        </select>
      </Field>

      <Field label="How can I help? (optional)">
        <textarea
          rows={4}
          value={form.message}
          onChange={update("message")}
          className={inputClass}
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-teal-800">
        <input
          type="checkbox"
          required
          checked={form.consent}
          onChange={update("consent")}
          className="mt-1 h-4 w-4 rounded border-teal-900/30"
        />
        <span>You may contact me about this request.</span>
      </label>

      {error && <p className="text-sm font-medium text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={busy}
        className="w-full rounded-full bg-teal-800 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-900 disabled:opacity-60"
      >
        {busy ? "Sending…" : "Send Request"}
      </button>
    </form>
  );
}

// RequestForm.jsx

export default function RequestForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-white px-4 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <ContactColumn />

        {/* ADD THIS ID */}
        <div
          id="request-appointment"
          className="rounded-3xl bg-teal-50/70 p-8 ring-1 ring-teal-900/5"
        >
          {sent ? (
            <SuccessState onReset={() => setSent(false)} />
          ) : (
            <AppointmentForm onSent={() => setSent(true)} />
          )}
        </div>
      </div>
    </section>
  );
}

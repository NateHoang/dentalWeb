import { SITE, FOOTER_LINKS, LEGAL_LINKS } from "../../data/site.js";
import { IconFacebook, IconInstagram, IconLinkedIn } from "../icons/index.jsx";
import Button from "../ui/Button.jsx";
import { Link, useNavigate } from "react-router-dom";

function SocialLinks() {
  return (
    <div className="mt-6 flex gap-3">
      <a
        href={SITE.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25"
      >
        <IconFacebook size={18} />
      </a>
      <a
        href={SITE.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25"
      >
        <IconInstagram size={18} />
      </a>
      <a
        href={SITE.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25"
      >
        <IconLinkedIn size={18} />
      </a>
    </div>
  );
}

function LegalBar() {
  return (
    <div className="bg-slate-800 px-4 py-6 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-5">
          {LEGAL_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactLink({ to, children, isButton = false }) {
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();

    // Extract path and hash from the link
    const url = new URL(to, window.location.origin);
    const targetPath = url.pathname;
    const targetHash = url.hash;

    // If already on /contact, scroll to the anchor
    if (window.location.pathname === targetPath) {
      const id = targetHash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        window.history.replaceState(null, "", `${targetPath}${targetHash}`);
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    // Navigate to the page with the hash
    navigate(to);
  };

  if (isButton) {
    return (
      <button
        onClick={handleContactClick}
        className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-teal-800 transition hover:bg-teal-50"
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      to={to}
      onClick={handleContactClick}
      className="transition hover:text-white"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="bg-teal-800 px-4 py-14 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3 md:divide-x md:divide-white/15">
          <div className="md:pr-8">
            <ContactLink to="/#request-appointment" isButton>
              Request an appointment
            </ContactLink>
            <p className="mt-4 text-sm text-teal-50/80">
              Start with a simple conversation.
            </p>
            <SocialLinks />
          </div>

          <div className="space-y-2 text-sm text-teal-50/90 md:px-8">
            <p className="text-base font-semibold text-white">
              {SITE.name} • Dental Student
            </p>
            <p>{SITE.school}</p>
            <p>{SITE.address}</p>
            <p>{SITE.phoneDisplay}</p>
            <p className="pt-3 text-xs text-teal-50/70">
              Care provided under licensed faculty supervision.
            </p>
          </div>

          <div className="md:pl-8">
            <p className="text-sm font-semibold text-white">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-teal-50/90">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Services", to: "/services" },
                {
                  label: "Patient Experience",
                  to: "/about#patient-experience",
                },
                { label: "Contact", to: "/#request-appointment" },
              ].map((l) => (
                <li key={l.label}>
                  <ContactLink to={l.to}>{l.label}</ContactLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <LegalBar />
    </footer>
  );
}

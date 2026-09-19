import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../../data/site";
import NavDropdown from "./NavDropdown";
import { IconPhone, IconChevronDown, Svg } from "../ui/Icons";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const { pathname } = useLocation();

  const close = () => {
    setOpen(false);
    setAboutOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center gap-4 rounded-full bg-teal-800 px-5 py-3 shadow-lg shadow-teal-900/20">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            onClick={close}
            aria-label="Go to home page"
            className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white/15 transition hover:bg-white/25"
          >
            <img
              src="/smile.png"
              alt="Home"
              className="h-full w-full object-cover"
            />
          </Link>

          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-tight text-white">
              Nathan Hoang
            </span>
            <span className="text-xs text-teal-100">
              Dental Student • Supervised Care
            </span>
          </div>
        </div>

        <ul className="ml-6 hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              {link.children ? (
                <NavDropdown link={link} />
              ) : (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition ${
                      isActive && pathname === link.to
                        ? "text-white"
                        : "text-teal-50 hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <a
            href="tel:+10000000000"
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal-800 transition hover:bg-teal-50"
          >
            <IconPhone size={16} />
            Sacramento
          </a>
          <Link
            to="/#contact"
            className="rounded-full bg-emerald-200 px-5 py-2 text-sm font-semibold text-teal-900 transition hover:bg-emerald-100"
          >
            Request an Appointment
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white lg:hidden"
        >
          <Svg size={20}>
            <path d="M4 7h16M4 12h16M4 17h16" />
          </Svg>
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl bg-teal-800 p-5 shadow-lg lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => setAboutOpen((v) => !v)}
                    aria-expanded={aboutOpen}
                    className="flex w-full items-center justify-between text-sm font-medium text-teal-50"
                  >
                    {link.label}
                    <IconChevronDown
                      size={16}
                      className={`transition-transform ${
                        aboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {aboutOpen && (
                    <ul className="mt-3 space-y-3 border-l border-white/20 pl-4">
                      <li>
                        <Link
                          to={link.to}
                          onClick={close}
                          className="text-sm text-teal-100"
                        >
                          About overview
                        </Link>
                      </li>
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            to={child.to}
                            onClick={close}
                            className="text-sm text-teal-100"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={close}
                    className="text-sm font-medium text-teal-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="tel:+10000000000"
              className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal-800"
            >
              <IconPhone size={16} />
              Sacramento
            </a>
            <Link
              to="/#contact"
              onClick={close}
              className="rounded-full bg-emerald-200 px-5 py-2 text-center text-sm font-semibold text-teal-900"
            >
              Request an Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

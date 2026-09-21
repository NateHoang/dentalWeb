import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IconChevronDown } from "../ui/Icons";

export default function NavDropdown({ link }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const closeTimer = useRef(null);

  const openNow = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const closeSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  const handleChildClick = (e, href) => {
    // href example: "/about#experience" or "/services/cleaning-and-prevention"
    if (!href) return;

    const target = new URL(href, window.location.origin);
    const targetPath = target.pathname;
    const targetHash = target.hash;

    e.preventDefault();

    // Same page
    if (window.location.pathname === targetPath) {
      if (targetHash) {
        // Scroll to anchor
        window.history.replaceState(null, "", `${targetPath}${targetHash}`);
        scrollToTarget(targetHash);
      } else {
        // No hash: scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setOpen(false);
      return;
    }

    // Different page: navigate normally
    window.location.href = `${targetPath}${targetHash}`;
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
      clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <NavLink
        to={link.to}
        onFocus={openNow}
        onClick={(e) => {
          if (window.location.pathname === link.to) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
          setOpen(false);
        }}
        aria-haspopup="true"
        aria-expanded={open}
        className={({ isActive }) =>
          `flex items-center gap-1 text-sm font-medium transition ${
            isActive ? "text-white" : "text-teal-50 hover:text-white"
          }`
        }
      >
        {link.label}
        <IconChevronDown
          size={15}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </NavLink>

      {/* invisible bridge so the menu survives the gap under the navbar */}
      <div className="absolute left-0 top-full h-4 w-full" />

      <div
        className={`absolute left-1/2 top-full z-50 mt-4 w-60 -translate-x-1/2 origin-top rounded-2xl bg-white p-2 shadow-xl ring-1 ring-teal-900/10 transition duration-150 ${
          open
            ? "visible scale-100 opacity-100"
            : "invisible scale-95 opacity-0"
        }`}
      >
        {link.children.map((child) => (
          <a
            key={child.label}
            href={child.to}
            onClick={(e) => handleChildClick(e, child.to)}
            className="block rounded-xl px-4 py-2.5 text-sm font-medium text-teal-900 transition hover:bg-emerald-50 hover:text-teal-700"
          >
            {child.label}
          </a>
        ))}
      </div>
    </div>
  );
}

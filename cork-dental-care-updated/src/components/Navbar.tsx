import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { business } from "../data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/finance", label: "Finance" },
  { to: "/team", label: "Team" },
  { to: "/reviews", label: "Reviews" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy-950/95 shadow-lg py-2 backdrop-blur-xl" : "bg-navy-950/90 py-4 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 text-gold-400 shadow-md">
            <span className="text-xl">🦷</span>
          </div>
          <div className="leading-tight">
            <span className="block font-display text-lg font-bold text-white">Cork Dental Care</span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-gold-500">
              Est. {business.established} · Cork City
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-gold-400" : "text-white hover:text-gold-400"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={business.phoneHref} className="text-sm font-semibold text-white hover:text-gold-400">
            {business.phone}
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-5 py-2.5 text-sm font-semibold text-navy-900 shadow-md transition-transform hover:-translate-y-0.5"
          >
            Book Now
          </Link>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg text-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-navy-900/98 backdrop-blur-xl transition-all duration-400 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-2 px-6">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-display text-2xl ${isActive ? "text-gold-400" : "text-white"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <a href={business.phoneHref} className="mt-6 text-gold-300">{business.phone}</a>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-3 font-semibold text-navy-900"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}

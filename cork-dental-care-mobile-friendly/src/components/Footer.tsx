import { Link } from "react-router-dom";
import { business, openingHours } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-100">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-navy-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-gold-400 text-xl">🦷</div>
              <span className="font-display text-xl font-bold text-white">Cork Dental Care</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy-200">
              Cork's trusted Invisalign & cosmetic dentistry experts, delivering premium private dental care since {business.established}.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="text-gold-400">★ {business.rating}</span>
              <span className="text-sm text-navy-300">{business.reviewCount} reviews</span>
            </div>
            <div className="mt-5 flex gap-3">
              <a href={business.facebook} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-gold-500 hover:text-navy-900" aria-label="Facebook">f</a>
              <a href={business.instagram} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-gold-500 hover:text-navy-900" aria-label="Instagram"><svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-white">Explore</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                ["About", "/about"],
                ["Services", "/services"],
                ["Pricing", "/pricing"],
                ["Finance", "/finance"],
                ["Reviews", "/reviews"],
                ["Blog", "/blog"],
                ["Team", "/team"],
              ].map(([l, h]) => (
                <li key={h}>
                  <Link to={h} className="text-navy-200 transition hover:text-gold-400">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-white">Treatments</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                ["Invisalign", "/services/invisalign"],
                ["Fixed Braces", "/services/fixed-braces"],
                ["Composite Bonding", "/services/composite-bonding"],
                ["Teeth Whitening", "/services/teeth-whitening"],
                ["Emergency Dentist", "/services/emergency-dentist"],
              ].map(([l, h]) => (
                <li key={h}>
                  <Link to={h} className="text-navy-200 transition hover:text-gold-400">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-white">Visit Us</h4>
            <ul className="mt-5 space-y-2.5 text-sm text-navy-200">
              <li>{business.address}</li>
              <li><a href={business.phoneHref} className="hover:text-gold-400">{business.phone}</a></li>
              <li><a href={business.emailHref} className="hover:text-gold-400">{business.email}</a></li>
            </ul>
            <div className="mt-5 space-y-1 text-xs text-navy-300">
              {openingHours.slice(0, 5).map((h) => (
                <div key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-navy-300 sm:flex-row">
          <p>© {new Date().getFullYear()} Cork Dental Care. All rights reserved.</p>
          <p>14 Union Quay, Cork City, Ireland · Dental Council of Ireland Registered</p>
        </div>
      </div>
    </footer>
  );
}

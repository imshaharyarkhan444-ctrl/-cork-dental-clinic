import { Link } from "react-router-dom";
import { business } from "../data/site";

export default function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-navy-100 bg-white shadow-2xl lg:hidden">
      <a
        href={business.phoneHref}
        className="flex items-center justify-center gap-2 bg-navy-800 py-3.5 text-sm font-semibold text-white"
      >
        📞 Call Us
      </a>
      <Link
        to="/contact"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-400 py-3.5 text-sm font-semibold text-navy-900"
      >
        📅 Book Now
      </Link>
    </div>
  );
}

import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Comprehensive <span className="gold-text">Dental Treatments</span></>}
        subtitle="All Cork Dental Care services are shown below without category buttons, so visitors can see every treatment clearly."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group reveal flex flex-col rounded-3xl border border-navy-50 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy-200/40"
              style={{ transitionDelay: `${(i % 6) * 50}ms` }}
            >
              <div className="text-4xl">{s.icon}</div>
              <span className="mt-4 inline-flex w-fit rounded-full bg-navy-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy-500">
                {s.category}
              </span>
              <h3 className="mt-3 font-display text-2xl text-navy-900">{s.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-500">{s.short}</p>
              <ul className="mt-5 space-y-1.5">
                {s.benefits.slice(0, 3).map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-navy-600">
                    <span className="text-gold-500">✓</span> {b}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold-500">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

import { useParams, Navigate, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { Button } from "../components/UI";
import { services } from "../data/services";
import { business } from "../data/site";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  const related = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={service.category} title={<><span className="gold-text">{service.name}</span> in Cork</> } subtitle={service.short} />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 reveal">
            <div className="text-5xl">{service.icon}</div>
            <h2 className="mt-5 font-display text-3xl text-navy-900">About {service.name}</h2>
            <p className="mt-4 leading-relaxed text-navy-600">{service.short}</p>
            <p className="mt-4 leading-relaxed text-navy-600">
              At Cork Dental Care, our experienced team delivers {service.name.toLowerCase()} using the latest techniques and technology in a comfortable, modern setting in the heart of Cork City. We tailor every treatment to your individual needs and provide clear, honest advice at every step.
            </p>

            <h3 className="mt-10 font-display text-2xl text-navy-900">Key Benefits</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {service.benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 rounded-2xl border border-navy-50 bg-white p-4 shadow-sm">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gold-500/15 text-sm text-gold-600">✓</span>
                  <span className="text-sm text-navy-700">{b}</span>
                </div>
              ))}
            </div>

            <h3 className="mt-10 font-display text-2xl text-navy-900">Your Journey With Us</h3>
            <div className="mt-5 space-y-4">
              {[
                ["Consultation", "A relaxed chat and full assessment to understand your goals and answer your questions."],
                ["Custom Plan", "A tailored treatment plan with transparent pricing and flexible finance options."],
                ["Treatment", "Comfortable, expert care delivered by our award-winning clinical team."],
                ["Aftercare", "Ongoing support and maintenance to keep your smile looking its best."],
              ].map(([t, d], idx) => (
                <div key={t} className="flex gap-4">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-navy-800 font-display text-sm font-bold text-gold-400">{idx + 1}</div>
                  <div>
                    <h4 className="font-semibold text-navy-900">{t}</h4>
                    <p className="text-sm text-navy-500">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6 reveal">
            <div className="rounded-3xl bg-gradient-to-b from-navy-800 to-navy-900 p-7 text-white shadow-xl">
              <h3 className="font-display text-xl">Book {service.name}</h3>
              <p className="mt-2 text-sm text-navy-100">Free consultation available. Flexible finance from 0%.</p>
              <div className="mt-5 space-y-3">
                <Button to="/contact" variant="gold" className="w-full">Book Appointment</Button>
                <Button href={business.phoneHref} variant="outline" className="w-full border-white/40 text-white hover:bg-white hover:text-navy-900">📞 Call Us</Button>
              </div>
            </div>
            <div className="rounded-3xl border border-navy-50 bg-white p-7 shadow-sm">
              <h3 className="font-display text-lg text-navy-900">Pricing</h3>
              <p className="mt-2 text-sm text-navy-500">View full, transparent fees for all our treatments.</p>
              <Link to="/pricing" className="mt-4 inline-flex text-sm font-semibold text-gold-500">See Pricing →</Link>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h3 className="font-display text-2xl text-navy-900 reveal">Related Treatments</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} to={`/services/${r.slug}`} className="reveal rounded-3xl border border-navy-50 bg-white p-6 shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="text-3xl">{r.icon}</div>
                  <h4 className="mt-3 font-display text-lg text-navy-900">{r.name}</h4>
                  <p className="mt-2 text-xs text-navy-500">{r.short}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

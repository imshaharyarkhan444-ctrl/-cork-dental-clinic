import { Link } from "react-router-dom";
import { Button, SectionTitle, Stars, Pill } from "../components/UI";
import { business, awards } from "../data/site";
import { services } from "../data/services";
import { reviews } from "../data/reviews";
import { team } from "../data/team";

export default function Home() {
  const featured = services.filter((s) => s.featured);
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="auto" poster="/images/clinic-exterior.png">
            <source src="/images/home-background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-navy-900/45 to-navy-900/20" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-28 pb-16">
          <div className="max-w-2xl">
            <div className="mb-6 flex flex-wrap items-center gap-3 animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-sm text-white">
                <Stars rating={5} /> {business.rating} · {business.reviewCount} Reviews
              </span>
              <span className="rounded-full bg-gold-500/20 px-4 py-2 text-sm font-medium text-gold-300">
                Invisalign Platinum Provider
              </span>
            </div>

            <h1 className="font-display text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up">
              Cork's Trusted <span className="gold-text">Invisalign</span> & Cosmetic Dentistry Experts
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100 animate-fade-up">
              Premium private dental care in the heart of Cork City. From clear aligners and composite bonding to whitening and emergency care — your perfect smile starts here.
            </p>

            <div className="mt-9 flex flex-wrap gap-4 animate-fade-up">
              <Button to="/contact" variant="gold">Book Appointment</Button>
              <Button to="/contact" variant="outline" className="border-white/40 text-white hover:bg-white hover:text-navy-900">
                Free Smile Consultation
              </Button>
              <Button to="/services/emergency-dentist" variant="ghost" className="text-gold-300 hover:text-gold-400">
                🚑 Emergency Appointment
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-navy-200 animate-fade-up">
              <span>🏆 Irish Dentistry Awards Winner</span>
              <span>⭐ Six Month Smiles Elite Provider</span>
              <span>📍 Est. {business.established}</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-2xl animate-floaty">⌄</div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-navy-50 bg-navy-50/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4">
          {[
            ["15+", "Years in Cork"],
            ["234+", "5-Star Reviews"],
            ["10,000+", "Smiles Created"],
            ["4.6★", "Google Rating"],
          ].map(([n, l]) => (
            <div key={l} className="text-center reveal">
              <div className="font-display text-3xl font-bold text-navy-800 md:text-4xl">{n}</div>
              <div className="mt-1 text-sm text-navy-500">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionTitle
          eyebrow="Our Treatments"
          title={<>Premium Dentistry, <span className="gold-text">Tailored To You</span></>}
          subtitle="Discover our most popular treatments, delivered by an award-winning team using the latest technology."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group reveal relative overflow-hidden rounded-3xl border border-navy-50 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy-200/40"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold-500/5 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative">
                <div className="text-4xl">{s.icon}</div>
                <h3 className="mt-5 font-display text-2xl text-navy-900">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-500">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-500">
                  Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center reveal">
          <Button to="/services" variant="primary">View All Services</Button>
        </div>
      </section>

      {/* SMILE TRANSFORMATION */}
      <section className="bg-navy-900 py-24">
        <div className="mx-auto max-w-5xl px-5">
          <SectionTitle
            eyebrow="Smile Transformation"
            title={<>Real Results, <span className="gold-text">Real Confidence</span></>}
            subtitle="A clear look at the kind of smile transformation patients can achieve at our Cork clinic."
            light
          />
          <div className="mt-14 overflow-hidden rounded-3xl shadow-2xl reveal">
            <img src="/images/smile-transformation.png" alt="Smile transformation result" className="w-full object-cover" />
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionTitle
          eyebrow="Recognition"
          title={<>Award-Winning <span className="gold-text">Excellence</span></>}
          subtitle="We're proud to be among Ireland's most accredited and recognised dental practices."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((a, i) => (
            <div
              key={a.title}
              className="reveal rounded-3xl border border-navy-50 bg-gradient-to-b from-white to-navy-50/40 p-7 text-center shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-4xl">{a.icon}</div>
              <h3 className="mt-4 font-display text-lg text-navy-900">{a.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-navy-500">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINANCE */}
      <section className="bg-gradient-to-r from-navy-800 to-navy-900 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2">
          <div className="reveal">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">Flexible Finance</p>
            <h2 className="font-display text-3xl text-white sm:text-4xl">Spread the Cost of Your New Smile</h2>
            <p className="mt-5 max-w-lg text-navy-100">
              We believe a confident smile should be affordable. Choose from <strong className="text-white">0% interest payment plans</strong> and flexible monthly finance options on Invisalign, braces and cosmetic treatments.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Pill>0% Interest Plans</Pill>
              <Pill>Low Monthly Payments</Pill>
              <Pill>No Hidden Fees</Pill>
            </div>
            <div className="mt-8">
              <Button to="/finance" variant="gold">Explore Finance Options</Button>
            </div>
          </div>
          <div className="reveal grid gap-4 sm:grid-cols-2">
            {[
              ["Invisalign", "from €58/mo"],
              ["Fixed Braces", "from €49/mo"],
              ["Composite Bonding", "from €40/mo"],
              ["Smile Makeover", "from €99/mo"],
            ].map(([t, p]) => (
              <div key={t} className="glass-dark rounded-2xl p-6">
                <div className="text-sm text-navy-200">{t}</div>
                <div className="mt-1 font-display text-2xl text-gold-300">{p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionTitle
          eyebrow="Patient Stories"
          title={<>Loved by Patients <span className="gold-text">Across Cork</span></>}
          subtitle={`Rated ${business.rating}★ from ${business.reviewCount} verified reviews on Google.`}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.slice(0, 3).map((r, i) => (
            <div
              key={r.name}
              className="reveal rounded-3xl border border-navy-50 bg-white p-7 shadow-sm"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Stars rating={r.rating} className="text-lg" />
              <p className="mt-4 text-sm leading-relaxed text-navy-600">“{r.text}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-100 font-semibold text-navy-700">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy-900">{r.name}</div>
                  <div className="text-xs text-navy-400">{r.treatment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center reveal">
          <Button to="/reviews" variant="outline">Read All Reviews</Button>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="bg-navy-50/50 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="Meet The Team"
            title={<>Caring Experts You Can <span className="gold-text">Trust</span></>}
            subtitle="A friendly, highly-qualified team dedicated to making every visit comfortable."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.slice(0, 4).map((m, i) => (
              <div
                key={m.name}
                className="reveal rounded-3xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {m.image ? (
                  <img src={m.image} alt={m.name} className="mx-auto h-20 w-20 rounded-full object-cover" />
                ) : (
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-navy-900 font-display text-2xl text-gold-400">
                    {m.initials}
                  </div>
                )}
                <h3 className="mt-4 font-display text-lg text-navy-900">{m.name}</h3>
                <p className="text-xs text-gold-500">{m.role}</p>
                <p className="mt-1 text-[11px] text-navy-400">{m.quals}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center reveal">
            <Button to="/team" variant="primary">Meet The Full Team</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy-950 py-24">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-5 text-center reveal">
          <h2 className="font-display text-3xl text-white sm:text-5xl">Ready to Transform Your Smile?</h2>
          <p className="mx-auto mt-5 max-w-xl text-navy-100">
            Book your free smile consultation today and discover what's possible at Cork's premier dental clinic.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="gold">Book Free Consultation</Button>
            <Button href={business.phoneHref} variant="outline" className="border-white/40 text-white hover:bg-white hover:text-navy-900">
              📞 {business.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

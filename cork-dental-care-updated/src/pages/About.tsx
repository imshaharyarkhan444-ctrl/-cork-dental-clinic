import PageHero from "../components/PageHero";
import { Button, SectionTitle, Pill } from "../components/UI";
import { business, awards } from "../data/site";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Cork Dental Care"
        title={<>Redefining Dental Care in <span className="gold-text">Cork City</span></>}
        subtitle={`Premium, patient-focused dentistry delivered with warmth and precision since ${business.established}.`}
      />

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal overflow-hidden rounded-3xl shadow-2xl">
            <img src="/images/reception.png" alt="Cork Dental Care reception" className="h-full w-full object-cover" />
          </div>
          <div className="reveal">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">Our Story</p>
            <h2 className="font-display text-3xl text-navy-900 sm:text-4xl">A Modern Clinic Built on Trust</h2>
            <p className="mt-5 leading-relaxed text-navy-600">
              Established in {business.established} on Union Quay in the heart of Cork City, Cork Dental Care has grown into one of the region's most respected private dental practices. We combine the latest dental technology with a calm, welcoming environment designed to put even the most nervous patients at ease.
            </p>
            <p className="mt-4 leading-relaxed text-navy-600">
              As an Invisalign Platinum Provider and Six Month Smiles Elite Provider, we specialise in transforming smiles — but we're equally passionate about everyday preventive care, helping families across Cork keep their teeth healthy for life.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Pill>⭐ {business.rating} Google Rating</Pill>
              <Pill>👥 {business.reviewCount} Reviews</Pill>
              <Pill>📍 {business.address}</Pill>
            </div>
            <div className="mt-8">
              <Button to="/team" variant="primary">Meet Our Team</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-50/50 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="Our Values" title={<>Why Patients <span className="gold-text">Choose Us</span></>} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["🤍", "Gentle, Caring Approach", "We take time to listen and ensure every patient feels relaxed and informed throughout their treatment."],
              ["🔬", "Advanced Technology", "Digital scanning, 3D planning and modern materials for precise, comfortable and predictable results."],
              ["💎", "Cosmetic Expertise", "Award-winning cosmetic and orthodontic dentistry to create natural, confidence-boosting smiles."],
              ["💶", "Transparent Pricing", "Clear, upfront fees with flexible 0% finance — no surprises, ever."],
              ["🚑", "Emergency Care", "Same-day emergency appointments when you need us most, right in the city centre."],
              ["🏆", "Award Winning", "Nationally recognised at the Irish Dentistry Awards for clinical excellence."],
            ].map(([icon, title, desc], i) => (
              <div
                key={title}
                className="reveal rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-4 font-display text-xl text-navy-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionTitle eyebrow="Accreditations" title={<>Our <span className="gold-text">Awards & Recognition</span></>} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((a, i) => (
            <div key={a.title} className="reveal rounded-3xl border border-navy-50 bg-white p-7 text-center shadow-sm" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="text-4xl">{a.icon}</div>
              <h3 className="mt-4 font-display text-lg text-navy-900">{a.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-navy-500">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

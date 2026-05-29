import PageHero from "../components/PageHero";
import { Button, SectionTitle } from "../components/UI";

export default function Finance() {
  return (
    <>
      <PageHero
        eyebrow="Flexible Payment Plans"
        title={<>Affordable <span className="gold-text">Dental Finance</span></>}
        subtitle="Your dream smile, made affordable. Choose from 0% interest plans and low monthly payment options."
      />

      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionTitle eyebrow="How It Works" title={<>Finance in <span className="gold-text">3 Simple Steps</span></>} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            ["1", "Choose Your Treatment", "Have your consultation and agree on the treatment plan that's right for you."],
            ["2", "Pick a Plan", "Select a 0% interest or low-cost monthly finance option to suit your budget."],
            ["3", "Start Smiling", "Spread the cost over time and enjoy your new smile straight away."],
          ].map(([n, t, d], i) => (
            <div key={t} className="reveal rounded-3xl border border-navy-50 bg-white p-8 text-center shadow-sm" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-600 to-gold-400 font-display text-xl font-bold text-navy-900">{n}</div>
              <h3 className="mt-5 font-display text-xl text-navy-900">{t}</h3>
              <p className="mt-2 text-sm text-navy-500">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-900 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="Example Plans" title={<>Monthly Payments from <span className="gold-text">€40/mo</span></>} subtitle="Representative examples. Final plans tailored at your consultation." light />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Composite Bonding", "€40", "0% over 6 months"],
              ["Fixed Braces", "€49", "0% over 12 months"],
              ["Invisalign", "€58", "0% over 24 months"],
              ["Smile Makeover", "€99", "Low-cost finance"],
            ].map(([t, p, d], i) => (
              <div key={t} className="reveal glass-dark rounded-3xl p-7 text-center" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="text-sm text-navy-200">{t}</div>
                <div className="mt-2 font-display text-3xl text-gold-300">{p}<span className="text-base">/mo</span></div>
                <div className="mt-2 text-xs text-navy-300">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-24">
        <SectionTitle eyebrow="Good To Know" title={<>Finance <span className="gold-text">FAQs</span></>} />
        <div className="mt-12 space-y-4">
          {[
            ["Is there really 0% interest?", "Yes — we offer genuine 0% interest payment plans on many treatments, meaning you pay no more than the treatment cost."],
            ["Who can apply?", "Most adult patients are eligible. A quick, simple application is completed in practice during your visit."],
            ["Can I pay off early?", "Absolutely. You can settle your balance early at any time with no penalty fees."],
            ["Do you accept PRSI & Medical Cards?", "Yes. We are part of the PRSI Dental Treatment Benefit Scheme and accept Medical Cards for eligible treatments."],
          ].map(([q, a]) => (
            <details key={q} className="reveal group rounded-2xl border border-navy-50 bg-white p-5 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-navy-900">
                {q}
                <span className="text-gold-500 transition group-open:rotate-45">＋</span>
              </summary>
              <p className="mt-3 text-sm text-navy-500">{a}</p>
            </details>
          ))}
        </div>
        <div className="mt-12 text-center reveal">
          <Button to="/contact" variant="gold">Ask Us About Finance</Button>
        </div>
      </section>
    </>
  );
}

import PageHero from "../components/PageHero";
import { pricingIntro, pricingTables } from "../data/pricing";

export default function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Dental care prices"
        title={<>Dental Care <span className="gold-text">Prices</span></>}
        subtitle="Complete Cork Dental Care fee guide for general dentistry, orthodontics, Invisalign and packages."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="reveal rounded-3xl bg-white p-8 shadow-sm border border-navy-50">
          <h2 className="font-display text-3xl text-navy-900">Dental care prices</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-navy-600">
            {pricingIntro.map((para) => <p key={para}>{para}</p>)}
            <p>
              To find out what tax relief options are available please see Revenue’s Med 2 form:
              <a className="ml-1 font-semibold text-gold-600 hover:text-gold-700" href="https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/documents/med2.pdf" target="_blank" rel="noreferrer">revenue.ie Med 2 PDF</a>.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-10">
          {pricingTables.map((t, i) => (
            <div key={t.title} className="reveal overflow-hidden rounded-3xl border border-navy-50 bg-white shadow-sm" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="bg-gradient-to-r from-navy-800 to-navy-900 px-6 py-5">
                <h2 className="font-display text-2xl text-white">{t.title}</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-navy-50 text-sm">
                  <thead className="bg-navy-50/70 text-left text-xs uppercase tracking-wider text-navy-500">
                    <tr>
                      <th className="px-6 py-3 font-semibold">Procedure</th>
                      <th className="px-6 py-3 font-semibold">Fee</th>
                      <th className="px-6 py-3 font-semibold">Tax Relief</th>
                      <th className="px-6 py-3 font-semibold">Total Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-50">
                    {t.items.map((item) => (
                      <tr key={item.procedure} className="align-top transition hover:bg-navy-50/40">
                        <td className="max-w-xl px-6 py-4 text-navy-700">{item.procedure}</td>
                        <td className="whitespace-nowrap px-6 py-4 font-semibold text-gold-600">{item.fee}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-navy-600">{item.taxRelief || ""}</td>
                        <td className="whitespace-nowrap px-6 py-4 font-semibold text-navy-800">{item.totalFee || ""}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

import PageHero from "../components/PageHero";
import { Button } from "../components/UI";
import { team } from "../data/team";

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Meet The Team"
        title={<>The Experts Behind Your <span className="gold-text">Smile</span></>}
        subtitle="A warm, highly-qualified team committed to gentle, exceptional dental care."
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {team.map((m, i) => (
            <div
              key={m.name}
              className="reveal flex flex-col gap-6 rounded-3xl border border-navy-50 bg-white p-7 shadow-sm transition hover:shadow-xl sm:flex-row"
              style={{ transitionDelay: `${(i % 2) * 60}ms` }}
            >
              {m.image ? (
                <img src={m.image} alt={m.name} className="h-28 w-28 flex-none rounded-2xl object-cover" />
              ) : (
                <div className="flex h-28 w-28 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 font-display text-3xl text-gold-400">
                  {m.initials}
                </div>
              )}
              <div>
                <h3 className="font-display text-2xl text-navy-900">{m.name}</h3>
                <p className="text-sm font-semibold text-gold-500">{m.role}</p>
                <p className="text-xs text-navy-400">{m.quals}</p>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-navy-900 p-10 text-center reveal">
          <h2 className="font-display text-3xl text-white">Experience the Difference</h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-100">Book with our award-winning team and see why patients across Cork trust us with their smiles.</p>
          <div className="mt-7"><Button to="/contact" variant="gold">Book Your Visit</Button></div>
        </div>
      </section>
    </>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { posts, blogCategories } from "../data/blog";

export default function Blog() {
  const [cat, setCat] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = posts.filter(
    (p) =>
      (cat === "All" || p.category === cat) &&
      (p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <>
      <PageHero
        eyebrow="Dental Blog"
        title={<>Smile <span className="gold-text">Insights</span></>}
        subtitle="Expert advice, treatment guides and dental tips from the Cork Dental Care team."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="reveal mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  cat === c ? "bg-navy-800 text-white" : "border border-navy-100 bg-white text-navy-600 hover:border-navy-300"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative lg:w-72">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-300">🔍</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles…"
              className="w-full rounded-full border border-navy-100 bg-white py-2.5 pl-11 pr-4 text-sm outline-none focus:border-gold-400"
            />
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group reveal flex flex-col overflow-hidden rounded-3xl border border-navy-50 bg-white shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl"
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <div className="flex h-44 items-center justify-center bg-gradient-to-br from-navy-700 to-navy-900 text-5xl">
                {p.category === "Invisalign" ? "😁" : p.category === "Cosmetic" ? "💫" : p.category === "Emergency" ? "🚑" : "🦷"}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="w-fit rounded-full bg-gold-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-600">{p.category}</span>
                <h3 className="mt-3 font-display text-xl leading-snug text-navy-900 transition group-hover:text-gold-600">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-navy-400">
                  <span>{p.author}</span>
                  <span>{p.read} read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && <p className="py-16 text-center text-navy-400">No articles found.</p>}
      </section>
    </>
  );
}

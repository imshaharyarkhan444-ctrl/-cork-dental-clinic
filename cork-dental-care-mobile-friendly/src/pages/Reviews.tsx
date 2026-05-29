import { useState } from "react";
import PageHero from "../components/PageHero";
import { Stars } from "../components/UI";
import { reviews as seedReviews } from "../data/reviews";
import { business } from "../data/site";
import { useReviews } from "../components/ReviewsStore";

export default function Reviews() {
  const { reviews, submit } = useReviews();
  const approved = reviews.filter((r) => r.approved);
  const [form, setForm] = useState({ name: "", rating: 5, text: "" });
  const [hover, setHover] = useState(0);
  const [done, setDone] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.text) return;
    submit(form);
    setForm({ name: "", rating: 5, text: "" });
    setDone(true);
    setTimeout(() => setDone(false), 6000);
  };

  return (
    <>
      <PageHero
        eyebrow="Patient Reviews"
        title={<>What Our Patients <span className="gold-text">Say</span></>}
        subtitle={`Rated ${business.rating}★ from ${business.reviewCount} verified reviews. Read real stories from Cork Dental Care patients.`}
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        {/* Rating summary */}
        <div className="reveal mx-auto mb-14 flex max-w-md flex-col items-center rounded-3xl bg-gradient-to-b from-white to-navy-50/50 p-8 text-center shadow-lg">
          <div className="font-display text-6xl font-bold text-navy-900">{business.rating}</div>
          <Stars rating={5} className="mt-2 text-2xl" />
          <p className="mt-2 text-sm text-navy-500">Based on {business.reviewCount} Google reviews</p>
          <div className="mt-4 flex gap-3">
            <a href={business.facebook} target="_blank" rel="noreferrer" className="rounded-full bg-navy-50 px-4 py-2 text-xs font-semibold text-navy-700">Facebook</a>
            <a href={business.instagram} target="_blank" rel="noreferrer" className="rounded-full bg-navy-50 px-4 py-2 text-xs font-semibold text-navy-700">Instagram</a>
          </div>
        </div>

        {/* Review grid */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {[...approved.map((r) => ({ name: r.name, rating: r.rating, text: r.text, treatment: "Verified Patient" })), ...seedReviews].map((r, i) => (
            <div key={i} className="reveal mb-6 break-inside-avoid rounded-3xl border border-navy-50 bg-white p-7 shadow-sm">
              <Stars rating={r.rating} className="text-lg" />
              <p className="mt-4 text-sm leading-relaxed text-navy-600">“{r.text}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-100 font-semibold text-navy-700">{r.name[0]}</div>
                <div>
                  <div className="text-sm font-semibold text-navy-900">{r.name}</div>
                  <div className="text-xs text-navy-400">{r.treatment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Write a review */}
      <section className="bg-navy-50/50 py-20">
        <div className="mx-auto max-w-2xl px-5">
          <div className="reveal rounded-3xl bg-white p-8 shadow-xl sm:p-10">
            <h2 className="font-display text-3xl text-navy-900">Write a Review</h2>
            <p className="mt-2 text-sm text-navy-500">We'd love to hear about your experience. Reviews are published after admin approval.</p>

            {done && (
              <div className="mt-5 rounded-2xl bg-gold-500/15 p-4 text-sm text-gold-700">
                ✓ Thank you! Your review has been submitted and is awaiting approval.
              </div>
            )}

            <form onSubmit={handle} className="mt-6 space-y-5">
              <div>
                <label className="text-sm font-medium text-navy-700">Your Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="mt-1.5 w-full rounded-xl border border-navy-100 px-4 py-3 text-sm outline-none focus:border-gold-400"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-navy-700">Rating</label>
                <div className="mt-1.5 flex gap-1 text-3xl">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onMouseEnter={() => setHover(n)}
                      onMouseLeave={() => setHover(0)}
                      onClick={() => setForm({ ...form, rating: n })}
                      className={`transition ${(hover || form.rating) >= n ? "text-gold-400" : "text-navy-200"}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-navy-700">Your Review</label>
                <textarea
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  required
                  rows={4}
                  className="mt-1.5 w-full rounded-xl border border-navy-100 px-4 py-3 text-sm outline-none focus:border-gold-400"
                />
              </div>
              <button type="submit" className="w-full rounded-full bg-gradient-to-r from-gold-600 to-gold-400 py-3.5 font-semibold text-navy-900 shadow-md transition hover:-translate-y-0.5">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

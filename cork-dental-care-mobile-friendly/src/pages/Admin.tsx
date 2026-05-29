import { useState } from "react";
import PageHero from "../components/PageHero";
import { Stars } from "../components/UI";
import { useReviews } from "../components/ReviewsStore";

export default function Admin() {
  const { reviews, approve, remove } = useReviews();
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");

  const pending = reviews.filter((r) => !r.approved);
  const live = reviews.filter((r) => r.approved);

  if (!authed) {
    return (
      <>
        <PageHero eyebrow="Staff Only" title={<>Review <span className="gold-text">Admin</span></>} />
        <section className="mx-auto max-w-md px-5 py-20">
          <div className="reveal rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="font-display text-xl text-navy-900">Admin Login</h2>
            <p className="mt-2 text-sm text-navy-500">Enter the staff password to manage reviews.</p>
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="Password (demo: cork2009)"
              className="mt-5 w-full rounded-xl border border-navy-100 px-4 py-3 text-sm outline-none focus:border-gold-400"
            />
            <button
              onClick={() => setAuthed(pw === "cork2009")}
              className="mt-4 w-full rounded-full bg-navy-800 py-3 font-semibold text-white"
            >
              Log In
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero eyebrow="Admin Dashboard" title={<>Manage <span className="gold-text">Reviews</span></>} />
      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="font-display text-2xl text-navy-900">Pending Approval ({pending.length})</h2>
        <div className="mt-5 space-y-4">
          {pending.length === 0 && <p className="text-navy-400">No reviews awaiting approval.</p>}
          {pending.map((r) => (
            <div key={r.id} className="rounded-2xl border border-navy-50 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-navy-900">{r.name}</span>
                  <Stars rating={r.rating} className="ml-3" />
                </div>
                <span className="text-xs text-navy-400">{r.date}</span>
              </div>
              <p className="mt-2 text-sm text-navy-600">{r.text}</p>
              <div className="mt-4 flex gap-3">
                <button onClick={() => approve(r.id)} className="rounded-full bg-gold-500 px-5 py-2 text-xs font-semibold text-navy-900">Approve</button>
                <button onClick={() => remove(r.id)} className="rounded-full border border-red-200 px-5 py-2 text-xs font-semibold text-red-500">Delete</button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-12 font-display text-2xl text-navy-900">Published ({live.length})</h2>
        <div className="mt-5 space-y-4">
          {live.length === 0 && <p className="text-navy-400">No published patient reviews yet.</p>}
          {live.map((r) => (
            <div key={r.id} className="rounded-2xl border border-navy-50 bg-navy-50/40 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-navy-900">{r.name}</span>
                  <Stars rating={r.rating} className="ml-3" />
                </div>
                <button onClick={() => remove(r.id)} className="text-xs font-semibold text-red-500">Remove</button>
              </div>
              <p className="mt-2 text-sm text-navy-600">{r.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

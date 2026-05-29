import { useState } from "react";
import PageHero from "../components/PageHero";
import { business, openingHours } from "../data/site";
import { services } from "../data/services";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
    setTimeout(() => setSent(false), 7000);
  };

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title={<>Book Your <span className="gold-text">Appointment</span></>}
        subtitle="We'd love to welcome you to our Union Quay clinic. Get in touch to book or ask a question."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <div className="reveal rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="font-display text-2xl text-navy-900">Send Us a Message</h2>
            {sent && (
              <div className="mt-5 rounded-2xl bg-gold-500/15 p-4 text-sm text-gold-700">
                ✓ Thank you! We've received your request and will be in touch shortly.
              </div>
            )}
            <form onSubmit={handle} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-xl border border-navy-100 px-4 py-3 text-sm outline-none focus:border-gold-400" />
                <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-xl border border-navy-100 px-4 py-3 text-sm outline-none focus:border-gold-400" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="rounded-xl border border-navy-100 px-4 py-3 text-sm outline-none focus:border-gold-400" />
                <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="rounded-xl border border-navy-100 px-4 py-3 text-sm text-navy-700 outline-none focus:border-gold-400">
                  <option value="">Treatment of Interest</option>
                  {services.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
                </select>
              </div>
              <textarea rows={4} placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-xl border border-navy-100 px-4 py-3 text-sm outline-none focus:border-gold-400" />
              <button type="submit" className="w-full rounded-full bg-gradient-to-r from-gold-600 to-gold-400 py-3.5 font-semibold text-navy-900 shadow-md transition hover:-translate-y-0.5">
                Request Appointment
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="reveal grid gap-4 sm:grid-cols-2">
              <a href={business.phoneHref} className="rounded-3xl bg-navy-800 p-6 text-white transition hover:bg-navy-900">
                <div className="text-2xl">📞</div>
                <div className="mt-3 text-xs uppercase tracking-wider text-navy-200">Call Us</div>
                <div className="mt-1 font-semibold">{business.phone}</div>
              </a>
              <a href={business.emailHref} className="rounded-3xl bg-gradient-to-br from-gold-600 to-gold-400 p-6 text-navy-900 transition hover:-translate-y-0.5">
                <div className="text-2xl">✉️</div>
                <div className="mt-3 text-xs uppercase tracking-wider text-navy-800/70">Email Us</div>
                <div className="mt-1 break-all text-sm font-semibold">{business.email}</div>
              </a>
            </div>

            <div className="reveal rounded-3xl border border-navy-50 bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg text-navy-900">📍 Find Us</h3>
              <p className="mt-2 text-sm text-navy-600">{business.address}</p>
            </div>

            <div className="reveal rounded-3xl border border-navy-50 bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg text-navy-900">🕒 Opening Hours</h3>
              <ul className="mt-3 space-y-1.5 text-sm">
                {openingHours.map((h) => (
                  <li key={h.day} className="flex justify-between text-navy-600">
                    <span>{h.day}</span>
                    <span className="font-medium text-navy-800">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="reveal mt-10 overflow-hidden rounded-3xl border border-navy-50 shadow-sm">
          <iframe
            title="Cork Dental Care location"
            src={business.mapEmbed}
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

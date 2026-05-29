import { useParams, Navigate, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { Button } from "../components/UI";
import { posts } from "../data/blog";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const related = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);
  const fallback = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const rel = related.length ? related : fallback;

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} />

      <article className="mx-auto max-w-3xl px-5 py-16">
        <div className="reveal flex items-center gap-4 border-b border-navy-50 pb-6 text-sm text-navy-500">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-100 font-semibold text-navy-700">
            {post.author.split(" ").map((w) => w[0]).slice(0, 2).join("")}
          </div>
          <div>
            <div className="font-semibold text-navy-900">{post.author}</div>
            <div className="text-xs">{new Date(post.date).toLocaleDateString("en-IE", { day: "numeric", month: "long", year: "numeric" })} · {post.read} read</div>
          </div>
        </div>

        <div className="reveal mt-8 space-y-5 text-[17px] leading-relaxed text-navy-700">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="reveal mt-10 rounded-3xl bg-navy-900 p-8 text-center">
          <h3 className="font-display text-2xl text-white">Have a question?</h3>
          <p className="mt-2 text-sm text-navy-100">Our team is here to help. Book a free consultation today.</p>
          <div className="mt-5"><Button to="/contact" variant="gold">Book Consultation</Button></div>
        </div>
      </article>

      <section className="bg-navy-50/50 py-16">
        <div className="mx-auto max-w-7xl px-5">
          <h3 className="font-display text-2xl text-navy-900 reveal">Related Articles</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {rel.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="reveal rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-600">{p.category}</span>
                <h4 className="mt-2 font-display text-lg leading-snug text-navy-900">{p.title}</h4>
                <p className="mt-2 text-xs text-navy-500">{p.excerpt.slice(0, 90)}…</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

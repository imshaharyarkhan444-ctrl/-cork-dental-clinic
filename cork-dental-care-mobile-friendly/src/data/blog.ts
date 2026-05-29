export type Post = { slug: string; title: string; category: string; author: string; date: string; read: string; excerpt: string; content: string[] };

const make = (title: string, category = "News"): Post => ({
  slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  title,
  category,
  author: "Cork Dental Care",
  date: "2026-05-29",
  read: "3 min",
  excerpt: `${title} — latest information and guidance from Cork Dental Care.`,
  content: [
    `${title} is part of our ongoing patient information updates at Cork Dental Care.`,
    "Our team is committed to keeping patients informed about dental services, treatment options and practice news.",
    "For personalised advice, please contact the clinic and our reception team will guide you to the right appointment."
  ],
});

export const posts: Post[] = [
  make("COVID-19 Update", "News"),
  make("Cork Dental Care recent awards", "News"),
  make("Invisalign open day", "Invisalign"),
  make("Cork Dental Care now part of Portman Dental Care", "News"),
  make("Professional teeth whitening", "Cosmetic"),
  make("Cosmetic Dentistry - Putting the Smile on your face", "Cosmetic"),
  make("Wisdom teeth removal", "General"),
  make("Invisalign consultation FREE scan", "Invisalign"),
  make("Invisalign dental braces", "Invisalign"),
  make("Composite bonding", "Cosmetic"),
  make("Our Dental Services", "General"),
];

export const blogCategories = ["All", "News", "Invisalign", "Cosmetic", "General"];

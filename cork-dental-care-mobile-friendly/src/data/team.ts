export type Member = {
  name: string;
  role: string;
  quals: string;
  bio: string;
  initials: string;
  image?: string;
};

export const team: Member[] = [
  {
    name: "Dr. Grania O’Connell",
    role: "Dentist",
    quals: "BDS NUI",
    bio: "Dr. Grania O’Connell brings a caring, patient-first approach to general and cosmetic dentistry at Cork Dental Care.",
    initials: "GO",
    image: "/images/dr-grania-oconnell.png",
  },
  {
    name: "Dr. Emma Vahey",
    role: "Dentist",
    quals: "BDS NUI",
    bio: "Dr. Emma Vahey provides gentle, high-quality dental care with a focus on making every patient feel comfortable.",
    initials: "EV",
    image: "/images/dr-emma-vahey.png",
  },
  {
    name: "Dr. Cian Murphy",
    role: "Cosmetic & Restorative Dentist",
    quals: "BDS, Dip Implant Dentistry",
    bio: "Dr. Murphy specialises in composite bonding, veneers and full smile makeovers.",
    initials: "CM",
  },
  {
    name: "Dr. Niamh Kelly",
    role: "Orthodontist",
    quals: "BDS, MSc Orthodontics",
    bio: "An expert in Invisalign, Spark and fixed brace systems, Dr. Kelly delivers precise orthodontic results.",
    initials: "NK",
  },
  {
    name: "Laura Byrne",
    role: "Lead Dental Hygienist",
    quals: "Dip Dental Hygiene",
    bio: "Laura is passionate about preventive care and gum health, guiding patients to healthier smiles.",
    initials: "LB",
  },
  {
    name: "Emma Ryan",
    role: "Practice Manager",
    quals: "Patient Care & Treatment Coordinator",
    bio: "Emma ensures every visit runs smoothly — from booking to treatment coordination.",
    initials: "ER",
  },
];

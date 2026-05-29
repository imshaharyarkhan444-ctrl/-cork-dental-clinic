export type Review = {
  name: string;
  rating: number;
  text: string;
  treatment?: string;
};

export const reviews: Review[] = [
  {
    name: "Sarah M.",
    rating: 5,
    treatment: "Invisalign",
    text: "Absolutely thrilled with my Invisalign results! The team made the whole process so easy and the clinic is beautiful. My smile has completely transformed.",
  },
  {
    name: "James K.",
    rating: 5,
    treatment: "Composite Bonding",
    text: "Had composite bonding done and couldn't be happier. Dr. Murphy is a true artist — natural, comfortable and done in one visit. Highly recommend.",
  },
  {
    name: "Aoife D.",
    rating: 5,
    treatment: "Teeth Whitening",
    text: "Such a welcoming, professional practice. My teeth whitening results were amazing and the staff put me completely at ease. Best dentist in Cork!",
  },
  {
    name: "Michael O.",
    rating: 4,
    treatment: "Emergency Dentist",
    text: "Cracked a tooth on a Friday and they saw me the same day. Pain relief and a clear plan — so grateful for the emergency service.",
  },
  {
    name: "Emma R.",
    rating: 5,
    treatment: "Dental Hygiene",
    text: "Laura the hygienist is fantastic. Gentle, thorough and full of helpful advice. My gums have never been healthier.",
  },
  {
    name: "David L.",
    rating: 5,
    treatment: "Fixed Braces",
    text: "Brought my teenage daughter for braces and the care was exceptional. Lovely team, modern clinic and great results.",
  },
  {
    name: "Niamh C.",
    rating: 5,
    treatment: "Veneers",
    text: "My veneers look incredibly natural. The attention to detail was outstanding from consultation to fitting. Worth every cent.",
  },
  {
    name: "Conor B.",
    rating: 4,
    treatment: "Root Canal",
    text: "Was dreading a root canal but it was completely painless. Dr. Walsh explained everything and put me at ease. Excellent care.",
  },
];

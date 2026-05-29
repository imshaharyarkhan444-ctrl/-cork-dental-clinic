export type Service = {
  slug: string;
  name: string;
  icon: string;
  short: string;
  benefits: string[];
  category: "Orthodontics" | "Cosmetic" | "General" | "Restorative" | "Emergency";
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "invisalign",
    name: "Invisalign",
    icon: "😁",
    short:
      "Straighten your teeth discreetly with virtually invisible, removable clear aligners — as a Platinum Provider.",
    benefits: ["Virtually invisible", "Removable for eating", "Predictable digital plan", "Fewer appointments"],
    category: "Orthodontics",
    featured: true,
  },
  {
    slug: "fixed-braces",
    name: "Fixed Braces",
    icon: "🦷",
    short:
      "Traditional and modern fixed brace systems to correct complex alignment and bite issues for all ages.",
    benefits: ["Treats complex cases", "Highly effective", "Suitable for teens & adults", "Aesthetic options available"],
    category: "Orthodontics",
    featured: true,
  },
  {
    slug: "spark-aligners",
    name: "Spark Aligners",
    icon: "✨",
    short:
      "The latest generation of clear aligners — clearer, more comfortable and stain-resistant.",
    benefits: ["More transparent material", "Comfortable edges", "Stain resistant", "Effective tooth movement"],
    category: "Orthodontics",
  },
  {
    slug: "suresmile-aligners",
    name: "SureSmile Aligners",
    icon: "🌟",
    short:
      "Precision clear aligner therapy powered by advanced 3D digital treatment planning.",
    benefits: ["Advanced 3D planning", "Custom fit", "Discreet", "Efficient results"],
    category: "Orthodontics",
  },
  {
    slug: "composite-bonding",
    name: "Composite Bonding",
    icon: "💫",
    short:
      "Reshape, repair and perfect your smile in a single visit with minimally invasive tooth-coloured composite.",
    benefits: ["No drilling needed", "Same-day results", "Natural finish", "Affordable smile makeover"],
    category: "Cosmetic",
    featured: true,
  },
  {
    slug: "veneers",
    name: "Porcelain Veneers",
    icon: "🪞",
    short:
      "Custom porcelain veneers to transform the colour, shape and symmetry of your smile.",
    benefits: ["Hollywood-style smile", "Stain resistant", "Long lasting", "Natural translucency"],
    category: "Cosmetic",
  },
  {
    slug: "crowns",
    name: "Crowns",
    icon: "👑",
    short:
      "Strong, natural-looking crowns that restore damaged or weakened teeth to full function.",
    benefits: ["Restores strength", "Natural appearance", "Durable", "Protects damaged teeth"],
    category: "Restorative",
  },
  {
    slug: "bridges",
    name: "Bridges",
    icon: "🌉",
    short:
      "Replace missing teeth with a fixed bridge to restore your smile and bite.",
    benefits: ["Fills gaps", "Fixed & stable", "Restores chewing", "Natural look"],
    category: "Restorative",
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    icon: "🩺",
    short:
      "Gentle, modern root canal therapy to save infected teeth and relieve pain.",
    benefits: ["Saves natural tooth", "Relieves pain", "Modern techniques", "High success rate"],
    category: "Restorative",
  },
  {
    slug: "endodontics",
    name: "Endodontics",
    icon: "🔬",
    short:
      "Specialist endodontic care for complex root canal and dental pulp treatment.",
    benefits: ["Specialist care", "Advanced equipment", "Pain management", "Tooth preservation"],
    category: "Restorative",
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    icon: "⚡",
    short:
      "Safe, professional whitening for a brighter, more confident smile — in-clinic and at-home options.",
    benefits: ["Brighter smile", "Professional grade", "Safe & monitored", "Long lasting results"],
    category: "Cosmetic",
    featured: true,
  },
  {
    slug: "dental-hygiene",
    name: "Dental Hygiene",
    icon: "🪥",
    short:
      "Comprehensive hygiene care to keep your gums healthy and your smile fresh.",
    benefits: ["Healthy gums", "Fresher breath", "Prevents decay", "Personalised advice"],
    category: "General",
  },
  {
    slug: "scale-and-polish",
    name: "Scale & Polish",
    icon: "💧",
    short:
      "Professional cleaning to remove plaque, tartar and surface stains for a cleaner, brighter smile.",
    benefits: ["Removes tartar", "Reduces staining", "Healthier gums", "Smooth, clean feel"],
    category: "General",
  },
  {
    slug: "fillings",
    name: "Fillings",
    icon: "🦷",
    short:
      "Tooth-coloured composite fillings that restore decayed teeth invisibly.",
    benefits: ["Tooth coloured", "Mercury free", "Durable", "Natural finish"],
    category: "General",
  },
  {
    slug: "dentures",
    name: "Dentures",
    icon: "😬",
    short:
      "Comfortable, natural-looking full and partial dentures tailored to you.",
    benefits: ["Custom fit", "Natural look", "Restores function", "Full & partial options"],
    category: "Restorative",
  },
  {
    slug: "emergency-dentist",
    name: "Emergency Dentist",
    icon: "🚑",
    short:
      "Same-day emergency dental appointments for pain, trauma and broken teeth in Cork City.",
    benefits: ["Same-day appointments", "Pain relief", "Trauma care", "Central Cork location"],
    category: "Emergency",
    featured: true,
  },
];

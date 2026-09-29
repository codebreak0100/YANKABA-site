// Unified university directory for YANKABA Education Consultancy.
//
// This file is the single source of truth for the university platform. Add new
// countries to COUNTRIES and new universities to UNIVERSITIES; every list,
// filter, detail page and sitemap entry is generated from these two exports.
//
// Data policy: official names, cities and websites are used where known.
// Fields that still need to be confirmed (fees, exact admission rules, contact
// details) are marked with `null` or a clearly-labelled placeholder so they can
// be filled in without touching any component.

export const DEGREE_LEVELS = [
  "Associate",
  "Bachelor",
  "Master",
  "PhD",
];

export const PROGRAM_CATEGORIES = [
  "Health Sciences",
  "Engineering",
  "Computer Science & IT",
  "Business & Management",
  "Natural Sciences",
  "Law & Political Studies",
  "Media & Communication",
  "Arts & Design",
  "Education",
  "Aviation",
];

export const COUNTRIES = [
  {
    id: "egypt",
    name: "Egypt",
    flag: "🇪🇬",
    tagline: "World-class degrees, historic campuses",
    description:
      "Egypt combines centuries of academic heritage with internationally recognised degrees, English-taught programmes and affordable living.",
    currency: "USD",
    image: "/images/countries/egypt.jpeg",
  },
  {
    id: "turkey",
    name: "Turkey",
    flag: "🇹🇷",
    tagline: "A bridge between Europe and Asia",
    description:
      "Turkey offers modern campuses, strong research output and English-taught programmes in one of the region's most vibrant student cities.",
    currency: "USD",
    image: "/images/countries/turkey.jpeg",
  },
  {
    id: "cyprus",
    name: "Cyprus",
    flag: "🇨🇾",
    tagline: "A Mediterranean study destination",
    description:
      "Cyprus is a long-established international education hub with English-language instruction, safe campuses and a Mediterranean lifestyle.",
    currency: "EUR",
    image: "/images/countries/cyprus.jpeg",
  },
];

// Reusable indicative programme sets. Universities reference these so the data
// stays readable and easy to update in one place.
const P = {
  health: [
    "Medicine",
    "Dentistry",
    "Pharmacy",
    "Nursing",
    "Physiotherapy",
    "Nutrition & Dietetics",
  ],
  engineering: [
    "Civil Engineering",
    "Architectural Engineering",
    "Computer Engineering",
    "Electrical & Electronics Engineering",
    "Mechanical Engineering",
    "Mechatronics Engineering",
    "Industrial Engineering",
  ],
  computing: [
    "Computer Science",
    "Software Engineering",
    "Artificial Intelligence",
    "Cyber Security",
    "Information Systems",
    "Data Science",
  ],
  business: [
    "Business Administration",
    "Accounting & Finance",
    "Marketing",
    "Economics",
    "International Trade & Logistics",
    "Tourism & Hotel Management",
  ],
  science: [
    "Biotechnology",
    "Chemistry",
    "Physics",
    "Mathematics",
    "Biology",
    "Environmental Sciences",
  ],
  law: [
    "Law",
    "Political Science",
    "International Relations",
    "Psychology",
    "Sociology",
  ],
  media: [
    "Media & Communication",
    "Public Relations & Advertising",
    "Radio, TV & Cinema",
    "Digital Media",
  ],
  arts: [
    "Graphic Design",
    "Interior Architecture",
    "Fashion Design",
    "English Language & Literature",
    "Translation & Interpretation",
  ],
  education: [
    "Education",
    "Early Childhood Education",
    "Special Education",
    "Guidance & Counselling",
  ],
  aviation: ["Aviation Management", "Aircraft Maintenance", "Air Traffic Control"],
};

const unique = (arr) => Array.from(new Set(arr));

function make({
  name,
  country,
  city,
  founded,
  website,
  image = null,
  logo = null,
  description,
  programs,
  degreeLevels = ["Bachelor", "Master"],
  admissionRequirements,
  tuitionFees,
  applicationInfo,
  contact,
  featured = false,
}) {
  return {
    slug: slugify(name),
    name,
    country,
    city,
    founded,
    website,
    image,
    logo,
    description,
    programs: unique(programs),
    degreeLevels,
    admissionRequirements: admissionRequirements || [
      "Completed secondary school certificate (or equivalent) with a strong Grade Point Average.",
      "Passport valid for at least 6 months.",
      "Certified transcripts and a certified copy of your birth certificate.",
      "Language requirement: English-taught programmes typically require proof of English proficiency; foundation or prep year available where needed.",
    ],
    tuitionFees:
      tuitionFees ||
      null,
    applicationInfo:
      applicationInfo ||
      "Submit an application through YANKABA. Our advisors review your documents, match you with the right programme and guide you through admission, fees and visa.",
    contact:
      contact || {
        phone: null,
        email: null,
        address: `${city}, ${
          COUNTRIES.find((c) => c.id === country)?.name || country
        }`,
      },
    featured,
  };
}

/**
 * Convert an arbitrary university name into a URL-safe slug.
 * Handles Turkish characters so slugs remain stable and readable.
 */
export function slugify(value) {
  const map = {
    ç: "c",
    Ç: "c",
    ğ: "g",
    Ğ: "g",
    ı: "i",
    İ: "i",
    ö: "o",
    Ö: "o",
    ş: "s",
    Ş: "s",
    ü: "u",
    Ü: "u",
    é: "e",
    á: "a",
    í: "i",
    ó: "o",
    ú: "u",
  };

  const normalized = String(value)
    .split("")
    .map((ch) => map[ch] || ch)
    .join("")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return normalized
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ---------------------------------------------------------------------------
// Egypt — existing partner universities
// ---------------------------------------------------------------------------

const EGYPT = [
  make({
    name: "Cairo University",
    country: "egypt",
    city: "Cairo",
    founded: "1908",
    website: "https://cu.edu.eg/Home",
    image: "/images/universities/Cairo University.jpg",
    description:
      "Egypt's flagship public research university and one of the oldest and most prestigious institutions in the Arab world, with a large international student community.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.computing,
      ...P.business,
      ...P.science,
      ...P.law,
      ...P.media,
    ],
    degreeLevels: ["Bachelor", "Master", "PhD"],
    featured: true,
  }),
  make({
    name: "Alexandria University",
    country: "egypt",
    city: "Alexandria",
    founded: "1938",
    website: "https://alexu.edu.eg/index.php/en/",
    image: "/images/universities/Alexandria University.jpg",
    description:
      "A leading Mediterranean university known for its medical, engineering and science faculties and its historic seafront campus in Alexandria.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.science,
      ...P.business,
      ...P.law,
    ],
    degreeLevels: ["Bachelor", "Master", "PhD"],
    featured: true,
  }),
  make({
    name: "Ain Shams University",
    country: "egypt",
    city: "Cairo",
    founded: "1950",
    website: "https://www.asu.edu.eg/en/",
    image: "/images/universities/Ain Shams University, Egypt.jpg",
    description:
      "One of Egypt's largest universities, offering a comprehensive range of programmes across medicine, engineering, commerce and the humanities.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.computing,
      ...P.business,
      ...P.education,
      ...P.media,
    ],
    degreeLevels: ["Bachelor", "Master", "PhD"],
  }),
  make({
    name: "Assiut University",
    country: "egypt",
    city: "Assiut",
    founded: "1957",
    website: "https://www.aun.edu.eg/main/",
    image: "/images/universities/Assuit University.jpg",
    description:
      "A major Upper Egypt university with strong medical, engineering, science and agricultural faculties and dedicated international student support.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.science,
      ...P.education,
    ],
    degreeLevels: ["Bachelor", "Master", "PhD"],
  }),
  make({
    name: "Mansoura University",
    country: "egypt",
    city: "Mansoura",
    founded: "1972",
    website: "https://www.mans.edu.eg/en/",
    image: "/images/universities/Mansoura University Egypt 🇪🇬.jpg",
    description:
      "A comprehensive Delta university widely recognised for its medical, engineering and science programmes and its modern teaching hospitals.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.computing,
      ...P.science,
    ],
    degreeLevels: ["Bachelor", "Master", "PhD"],
    featured: true,
  }),
  make({
    name: "Misr University of Science & Technology",
    country: "egypt",
    city: "6th October",
    founded: "1996",
    website: "https://www.must.edu.eg/",
    image:
      "/images/universities/Misr University of Science & Tech.jpg",
    description:
      "A private university in 6th of October City offering applied programmes in engineering, health sciences, business and computer technology.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.computing,
      ...P.business,
    ],
  }),
  make({
    name: "Pharos University",
    country: "egypt",
    city: "Alexandria",
    founded: "2006",
    website: "https://pua.edu.eg/",
    image: "/images/universities/Pharos University.jpg",
    description:
      "A private Alexandrian university with a modern campus and programmes spanning pharmacy, engineering, business and mass communication.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.business,
      ...P.media,
    ],
  }),
  make({
    name: "Helwan University",
    country: "egypt",
    city: "Helwan",
    founded: "1975",
    website: "https://hu.edu.eg/",
    image: "/images/universities/Helwan University.jpg",
    description:
      "Known for its applied arts, fine arts, engineering and business faculties, Helwan University is one of Egypt's most creative institutions.",
    programs: [
      ...P.engineering,
      ...P.arts,
      ...P.business,
      ...P.health,
    ],
  }),
  make({
    name: "Beni Suef University",
    country: "egypt",
    city: "Beni Suef",
    founded: "2005",
    website: "https://www.bsu.edu.eg/Sector.aspx?S=1",
    image: "/images/universities/beni suef university.jpg",
    description:
      "A growing public university in Upper Egypt offering medicine, engineering, science, education and commerce programmes.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.science,
      ...P.education,
    ],
  }),
  make({
    name: "Future University",
    country: "egypt",
    city: "Cairo",
    founded: "2006",
    website: "https://fue.edu.eg/",
    image: "/images/universities/future university.jpg",
    description:
      "A private Cairo university focused on high-demand fields including dentistry, pharmacy, engineering, computer science and economics.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.computing,
      ...P.business,
    ],
    featured: true,
  }),
  make({
    name: "MTI University",
    country: "egypt",
    city: "Cairo",
    founded: "1996",
    website: "https://mti.edu.eg/",
    image: "/images/universities/mti university.jpg",
    description:
      "The Modern Sciences and Arts–style private university offering engineering, computer science, business, pharmacy and dentistry.",
    programs: [
      ...P.engineering,
      ...P.computing,
      ...P.business,
      ...P.health,
    ],
  }),
  make({
    name: "6th October University",
    country: "egypt",
    city: "6th October",
    founded: "1996",
    website: "https://o6u.edu.eg/",
    image: "/images/universities/6th october university.jpg",
    description:
      "A private university in 6th of October City with medicine, dentistry, engineering, computer science and business programmes.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.computing,
      ...P.business,
    ],
  }),
  make({
    name: "Delta University",
    country: "egypt",
    city: "Gamasa",
    founded: "2007",
    website: "https://www.deltauniv.edu.eg/",
    image: "/images/universities/delta university.jpg",
    description:
      "A private university on Egypt's northern coast offering dentistry, pharmacy, engineering, business and physical therapy.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.business,
    ],
  }),
  make({
    name: "Port Said University",
    image: "/images/universities/port-said-university.jpg",
    country: "egypt",
    city: "Port Said",
    founded: "2010",
    website: "https://www.said.edu.eg/",
    description:
      "A public university at the northern entrance of the Suez Canal, offering engineering, science, commerce, education and nursing.",
    programs: [
      ...P.engineering,
      ...P.science,
      ...P.business,
      ...P.education,
    ],
  }),
  make({
    name: "Suez University",
    image: "/images/universities/suez-university.jpg",
    country: "egypt",
    city: "Suez",
    founded: "1975",
    website: "https://www.suez.edu.eg/",
    description:
      "A public university in the Suez Canal region with engineering, petroleum, science, commerce and education faculties.",
    programs: [
      ...P.engineering,
      ...P.science,
      ...P.business,
      ...P.education,
    ],
  }),
];

// ---------------------------------------------------------------------------
// Turkey — Istanbul and Ankara
// ---------------------------------------------------------------------------

const TURKEY = [
  make({
    name: "Istanbul Kent University",
    image: "/images/universities/istanbul-kent-university.webp",
    country: "turkey",
    city: "Istanbul",
    founded: "2016",
    website: "https://www.kent.edu.tr/?lang=en",
    description:
      "A young, city-centred foundation university in Istanbul with a strong focus on health sciences, communication and applied programmes.",
    programs: [...P.health, ...P.media, ...P.business, ...P.arts],
    featured: true,
  }),
  make({
    name: "Haliç University",
    image: "/images/universities/halic-university.jpeg",
    country: "turkey",
    city: "Istanbul",
    founded: "1998",
    website: "https://www.halic.edu.tr/en/",
    description:
      "A foundation university in central Istanbul offering medicine, health sciences, engineering, business and arts programmes.",
    programs: [...P.health, ...P.engineering, ...P.business, ...P.arts],
  }),
  make({
    name: "Okan University",
    image: "/images/universities/okan-university.jpeg",
    country: "turkey",
    city: "Istanbul",
    founded: "1999",
    website: "https://www.okan.edu.tr/en/",
    description:
      "A large Istanbul foundation university with accessible campuses and programmes across health, engineering, business and aviation.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.computing,
      ...P.business,
      ...P.aviation,
    ],
    featured: true,
  }),
  make({
    name: "Medipol University",
    image: "/images/universities/medipol-university.jpeg",
    country: "turkey",
    city: "Istanbul",
    founded: "2009",
    website: "https://www.medipol.edu.tr/en",
    description:
      "One of Turkey's strongest private universities for medicine and health sciences, with modern hospitals and research centres.",
    programs: [...P.health, ...P.engineering, ...P.business, ...P.science],
    featured: true,
  }),
  make({
    name: "Üsküdar University",
    image: "/images/universities/uskudar-university.webp",
    country: "turkey",
    city: "Istanbul",
    founded: "2011",
    website: "https://uskudar.edu.tr/en",
    description:
      "Known for psychology, health sciences, engineering and communication, Üsküdar offers a modern campus on the Asian side of Istanbul.",
    programs: [...P.health, ...P.computing, ...P.media, ...P.law],
  }),
  make({
    name: "Bahçeşehir University",
    image: "/images/universities/bahcesehir-university.jpg",
    country: "turkey",
    city: "Istanbul",
    founded: "1998",
    website: "https://www.bau.edu.tr/",
    description:
      "A globally connected Istanbul university with strong engineering, architecture, business and law faculties and international exchange networks.",
    programs: [
      ...P.engineering,
      ...P.computing,
      ...P.business,
      ...P.law,
      ...P.arts,
    ],
    featured: true,
  }),
  make({
    name: "Beykoz University",
    image: "/images/universities/beykoz-university.jpeg",
    country: "turkey",
    city: "Istanbul",
    founded: "2016",
    website: "https://www.beykoz.edu.tr/en/",
    description:
      "A foundation university on the Bosphorus specialising in logistics, aviation, business and social sciences.",
    programs: [...P.business, ...P.aviation, ...P.law, ...P.media],
  }),
  make({
    name: "Beykent University",
    image: "/images/universities/beykent-university.jpg",
    country: "turkey",
    city: "Istanbul",
    founded: "1997",
    website: "https://www.beykent.edu.tr/en",
    description:
      "A well-established Istanbul foundation university with medicine, dentistry, engineering, business and fine arts programmes.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.business,
      ...P.arts,
    ],
  }),
  make({
    name: "Ibn Khaldun University",
    image: "/images/universities/ibn-khaldoun-university.jpeg",
    country: "turkey",
    city: "Istanbul",
    founded: "2015",
    website: "https://www.ibnhaldun.edu.tr/en",
    description:
      "A foundation university in Istanbul with a focus on social sciences, law, education, health sciences and Islamic studies.",
    programs: [...P.law, ...P.education, ...P.health, ...P.business],
  }),
  make({
    name: "Nişantaşı University",
    image: "/images/universities/nisantasi-university.jpg",
    country: "turkey",
    city: "Istanbul",
    founded: "2012",
    website: "https://www.nisantasi.edu.tr/en/",
    description:
      "A central Istanbul university offering accessible programmes in health, engineering, business, design and aviation.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.business,
      ...P.arts,
      ...P.aviation,
    ],
  }),
  make({
    name: "Işık University",
    image: "/images/universities/isik-university.jpg",
    country: "turkey",
    city: "Istanbul",
    founded: "1996",
    website: "https://www.isikun.edu.tr/en",
    description:
      "A foundation university with a scenic campus north of Istanbul, strong in engineering, arts, business and social sciences.",
    programs: [
      ...P.engineering,
      ...P.computing,
      ...P.business,
      ...P.arts,
    ],
  }),
  make({
    name: "Arel University",
    image: "/images/universities/arel-university.jpg",
    country: "turkey",
    city: "Istanbul",
    founded: "2007",
    website: "https://www.arel.edu.tr/",
    description:
      "An Istanbul foundation university offering medicine, health sciences, engineering, business and communication programmes.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.business,
      ...P.media,
    ],
  }),
  make({
    name: "Istanbul Aydın University",
    image: "/images/universities/istanbul-aydin-university.webp",
    country: "turkey",
    city: "Istanbul",
    founded: "2007",
    website: "https://www.aydin.edu.tr/en-us/",
    description:
      "One of Istanbul's largest foundation universities, with a broad programme catalogue and strong international student services.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.computing,
      ...P.business,
      ...P.media,
      ...P.aviation,
    ],
    featured: true,
  }),
  make({
    name: "Istanbul Gelişim University",
    image: "/images/universities/istanbul-gelisim-university.jpg",
    country: "turkey",
    city: "Istanbul",
    founded: "2008",
    website: "https://www.gelisim.edu.tr/en",
    description:
      "A large, internationally minded Istanbul university with programmes across health, engineering, business, sports and design.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.business,
      ...P.arts,
    ],
    featured: true,
  }),
  make({
    name: "Altınbaş University",
    image: "/images/universities/altinbas-university.jpg",
    country: "turkey",
    city: "Istanbul",
    founded: "2008",
    website: "https://www.altinbas.edu.tr/en",
    description:
      "A modern Istanbul university recognised for medicine, dentistry, engineering, business and law.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.business,
      ...P.law,
    ],
    featured: true,
  }),
  make({
    name: "Lokman Hekim University",
    image: "/images/universities/lokman-hekim-university.webp",
    country: "turkey",
    city: "Ankara",
    founded: "2018",
    website: "https://www.lokmanhekim.edu.tr/en",
    description:
      "A health-focused foundation university in Ankara with medicine, dentistry, pharmacy, health sciences and nursing programmes.",
    programs: [...P.health, ...P.science, ...P.business],
  }),
  make({
    name: "Biruni University",
    image: "/images/universities/biruni-university.jpg",
    country: "turkey",
    city: "Istanbul",
    founded: "2014",
    website: "https://www.biruni.edu.tr/en",
    description:
      "A health and technology university in Istanbul with medicine, dentistry, pharmacy, engineering and health sciences.",
    programs: [...P.health, ...P.engineering, ...P.science, ...P.business],
  }),
  make({
    name: "Istanbul Yeni Yüzyıl University",
    image: "/images/universities/istanbul-yeni-yuzyil-university.jpeg",
    country: "turkey",
    city: "Istanbul",
    founded: "2009",
    website: "https://www.yeniyuzyil.edu.tr/en",
    description:
      "Istanbul's first health-themed foundation university, expanding into engineering, law, business and communication.",
    programs: [...P.health, ...P.law, ...P.business, ...P.engineering],
  }),
  make({
    name: "Kadir Has University",
    image: "/images/universities/kadir-has-university.jpg",
    country: "turkey",
    city: "Istanbul",
    founded: "1997",
    website: "https://www.khas.edu.tr/en",
    description:
      "A selective Istanbul university known for engineering, business, law, communication and film, with a central Golden Horn campus.",
    programs: [
      ...P.engineering,
      ...P.business,
      ...P.law,
      ...P.media,
      ...P.arts,
    ],
    featured: true,
  }),
  make({
    name: "İstinye University",
    image: "/images/universities/istinye-university.jpeg",
    country: "turkey",
    city: "Istanbul",
    founded: "2015",
    website: "https://www.istinye.edu.tr/en",
    description:
      "A research-oriented Istanbul university with medicine, pharmacy, engineering, health sciences and business programmes.",
    programs: [...P.health, ...P.engineering, ...P.business, ...P.science],
  }),
  make({
    name: "Istanbul Kültür University",
    image: "/images/universities/istanbul-kultur-university.jpg",
    country: "turkey",
    city: "Istanbul",
    founded: "1997",
    website: "https://www.iku.edu.tr/en",
    description:
      "A long-established Istanbul foundation university with engineering, architecture, business, law and art & design faculties.",
    programs: [
      ...P.engineering,
      ...P.business,
      ...P.law,
      ...P.arts,
    ],
  }),
  make({
    name: "Istanbul Atlas University",
    image: "/images/universities/istanbul-atlas-university.jpg",
    country: "turkey",
    city: "Istanbul",
    founded: "2018",
    website: "https://www.atlas.edu.tr/en",
    description:
      "A modern Istanbul university focused on medicine, health sciences, engineering, computer science and business.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.computing,
      ...P.business,
    ],
  }),
  make({
    name: "Maltepe University",
    image: "/images/universities/maltepe-university.jpg",
    country: "turkey",
    city: "Istanbul",
    founded: "1997",
    website: "https://www.maltepe.edu.tr/en",
    description:
      "A large Istanbul foundation university with medicine, engineering, business, law, education and communication programmes.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.business,
      ...P.law,
      ...P.education,
      ...P.media,
    ],
  }),
  make({
    name: "Fenerbahçe University",
    image: "/images/universities/fenerbahce-university.jpg",
    country: "turkey",
    city: "Istanbul",
    founded: "2016",
    website: "https://www.fbu.edu.tr/en",
    description:
      "A young Istanbul university with a strong sports sciences identity alongside health, engineering, business and communication.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.business,
      ...P.media,
    ],
  }),
];

// ---------------------------------------------------------------------------
// Cyprus — Northern Cyprus international universities
// ---------------------------------------------------------------------------

const CYPRUS = [
  make({
    name: "Near East University",
    image: "/images/universities/near-east-university.jpg",
    country: "cyprus",
    city: "Nicosia",
    founded: "1988",
    website: "https://www.neu.edu.tr/en/",
    description:
      "The largest university in Northern Cyprus, offering a very broad catalogue from medicine and dentistry to engineering, law and business.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.computing,
      ...P.business,
      ...P.law,
      ...P.arts,
    ],
    degreeLevels: ["Associate", "Bachelor", "Master", "PhD"],
    featured: true,
  }),
  make({
    name: "Cyprus International University",
    image: "/images/universities/cyprus-international-university.jpeg",
    country: "cyprus",
    city: "Nicosia",
    founded: "1997",
    website: "https://www.ciu.edu.tr/en",
    description:
      "A well-known international university in Nicosia with a large global student body and English-taught programmes.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.computing,
      ...P.business,
      ...P.education,
    ],
    featured: true,
  }),
  make({
    name: "Bahçeşehir Cyprus University",
    image: "/images/universities/bahcesehir-cyprus-university.jpeg",
    country: "cyprus",
    city: "Nicosia",
    founded: "2016",
    website: "https://baucyprus.edu.tr/en",
    description:
      "Part of the Bahçeşehir network, offering modern programmes in engineering, business, law, health sciences and communication.",
    programs: [
      ...P.engineering,
      ...P.business,
      ...P.law,
      ...P.health,
      ...P.media,
    ],
  }),
  make({
    name: "Final International University",
    image: "/images/universities/final-international-university.jpg",
    country: "cyprus",
    city: "Kyrenia",
    founded: "2015",
    website: "https://www.final.edu.tr/en",
    description:
      "A modern university in Kyrenia with health sciences, engineering, business, law and education programmes.",
    programs: [
      ...P.health,
      ...P.engineering,
      ...P.business,
      ...P.law,
      ...P.education,
    ],
  }),
  make({
    name: "Eastern Mediterranean University",
    image: "/images/universities/eastern-mediterranean-university.jpg",
    country: "cyprus",
    city: "Famagusta",
    founded: "1979",
    website: "https://www.emu.edu.tr/en",
    description:
      "A large, established international university in Famagusta with recognised engineering, architecture, business and health faculties.",
    programs: [
      ...P.engineering,
      ...P.computing,
      ...P.business,
      ...P.health,
      ...P.arts,
    ],
    degreeLevels: ["Associate", "Bachelor", "Master", "PhD"],
    featured: true,
  }),
  make({
    name: "Cyprus Science University",
    image: "/images/universities/cyprus-science-university.jpeg",
    country: "cyprus",
    city: "Kyrenia",
    founded: "2013",
    website: "https://www.csu.edu.tr/en",
    description:
      "A science and health-focused university in Kyrenia with medicine, health sciences, engineering and business programmes.",
    programs: [...P.health, ...P.engineering, ...P.science, ...P.business],
  }),
];

export const UNIVERSITIES = [...EGYPT, ...TURKEY, ...CYPRUS];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getCountry(id) {
  return COUNTRIES.find((c) => c.id === id) || null;
}

export function getUniversityBySlug(slug) {
  return UNIVERSITIES.find((u) => u.slug === slug) || null;
}

export function getUniversitiesByCountry(countryId) {
  return UNIVERSITIES.filter((u) => u.country === countryId);
}

export function getFeaturedUniversities(limit = 6) {
  const featured = UNIVERSITIES.filter((u) => u.featured);
  return featured.slice(0, limit);
}

/**
 * A balanced featured set that includes an equal number of universities from
 * every country, so the homepage reflects all study destinations rather than
 * whichever countries happen to come first in the data file.
 */
export function getHomeFeatured(perCountry = 2) {
  const picks = [];
  COUNTRIES.forEach((country) => {
    picks.push(
      ...getUniversitiesByCountry(country.id)
        .filter((u) => u.featured)
        .slice(0, perCountry),
    );
  });
  return picks;
}

export function getRelatedUniversities(university, limit = 3) {
  if (!university) return [];
  const sameCountry = UNIVERSITIES.filter(
    (u) => u.country === university.country && u.slug !== university.slug,
  );
  const others = UNIVERSITIES.filter(
    (u) => u.country !== university.country && u.slug !== university.slug,
  );
  return [...sameCountry, ...others].slice(0, limit);
}

export function getAllCities(countryId) {
  const pool = countryId
    ? getUniversitiesByCountry(countryId)
    : UNIVERSITIES;
  return Array.from(new Set(pool.map((u) => u.city))).sort((a, b) =>
    a.localeCompare(b),
  );
}

export function getAllPrograms() {
  return Array.from(new Set(UNIVERSITIES.flatMap((u) => u.programs))).sort(
    (a, b) => a.localeCompare(b),
  );
}

export function getAllDegreeLevels() {
  return DEGREE_LEVELS.filter((level) =>
    UNIVERSITIES.some((u) => u.degreeLevels.includes(level)),
  );
}

// `UNIVERSITIES` is the camelCase-shaped alias used by the rest of the UI.
export const universityCountByCountry = COUNTRIES.reduce((acc, c) => {
  acc[c.id] = getUniversitiesByCountry(c.id).length;
  return acc;
}, {});

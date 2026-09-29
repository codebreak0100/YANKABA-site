import { CONTACT, COUNTRIES, FAQS, UNIVERSITIES } from "@/lib/data";

// Override at build time with REACT_APP_SITE_URL (see scripts/prerender.js).
const SITE_URL = process.env.REACT_APP_SITE_URL || "https://yankabaedu.com";

const SOCIALS = [
  "https://www.instagram.com/yankabaeducationconsultancy",
  "https://www.facebook.com/share/18ogGtfPHY/",
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: CONTACT.brandFull,
      alternateName: CONTACT.brand,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/images/logo/logo.png`,
      image: `${SITE_URL}/images/hero/hero1.jpg`,
      description:
        "YANKABA Education Consultancy guides international students through admission, visas and scholarships at partner universities across Egypt, Turkey and Cyprus.",
      email: CONTACT.email,
      telephone: CONTACT.phone,
      areaServed: COUNTRIES.map((c) => c.name),
      sameAs: SOCIALS,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "admissions",
          telephone: CONTACT.phone,
          email: CONTACT.email,
          availableLanguage: ["English"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: CONTACT.brandFull,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/universities?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#universities`,
      name: "Partner universities in Egypt, Turkey and Cyprus",
      numberOfItems: UNIVERSITIES.length,
      itemListElement: UNIVERSITIES.map((u, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: u.name,
        url: `${SITE_URL}/universities/${u.slug}`,
      })),
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

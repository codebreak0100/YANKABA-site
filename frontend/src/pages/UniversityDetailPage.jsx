import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  GitCompareArrows,
  GraduationCap,
  Heart,
  Info,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import useSeo, { SITE_URL } from "@/lib/useSeo";
import {
  CONTACT,
  DOCUMENTS,
  getCountry,
  getRelatedUniversities,
  getUniversityBySlug,
} from "@/lib/data";
import { useCompare, useSaved } from "@/lib/favorites";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import CompareTray from "@/components/site/CompareTray";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import UniversityCover from "@/components/site/UniversityCover";
import UniversityCard from "@/components/site/UniversityCard";
import NotFound from "@/pages/NotFound";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "programs", label: "Programs" },
  { id: "admissions", label: "Admissions" },
  { id: "fees", label: "Tuition & Fees" },
  { id: "contact", label: "Contact" },
];

function Fact({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#fff5f5] text-[#7a0016]">
        <Icon size={16} />
      </span>
      <div>
        <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
          {label}
        </p>
        <p className="text-sm font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

export default function UniversityDetailPage() {
  const { slug } = useParams();
  const university = getUniversityBySlug(slug);
  const [activeTab, setActiveTab] = useState("overview");
  const { isSaved, toggleSaved } = useSaved();
  const { isComparing, toggleCompare } = useCompare();

  const country = university ? getCountry(university.country) : null;
  const related = useMemo(
    () => (university ? getRelatedUniversities(university, 3) : []),
    [university],
  );

  const jsonLd = useMemo(() => {
    if (!university) return null;
    return {
      "@context": "https://schema.org",
      "@type": "CollegeOrUniversity",
      name: university.name,
      url: `${SITE_URL}/universities/${university.slug}`,
      sameAs: university.website,
      description: university.description,
      foundingDate: university.founded,
      address: {
        "@type": "PostalAddress",
        addressLocality: university.city,
        addressCountry: country?.name,
      },
    };
  }, [university, country]);

  useSeo({
    title: university ? university.name : "University not found",
    description: university
      ? `${university.name} in ${university.city}, ${country?.name}. Explore programs, degree levels, admission requirements and tuition guidance.`
      : "The university you are looking for could not be found.",
    path: `/universities/${slug}`,
    image: university?.image || "/images/hero/hero1.jpg",
    type: "website",
    jsonLd,
  });

  if (!university) {
    return <NotFound />;
  }

  const saved = isSaved(university.slug);
  const comparing = isComparing(university.slug);

  const inquiryText = encodeURIComponent(
    `Hi YANKABA! I'd like to learn more about ${university.name} in ${university.city}, ${country?.name}.`,
  );

  return (
    <div
      data-testid="university-detail-page"
      className="site-canvas bg-[#F7F6F2] text-gray-900"
    >
      <Navbar />
      <main id="main">
        {/* Cover hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#250006] via-[#680013] to-[#160005] pt-28 pb-16 text-white lg:pt-36 lg:pb-20">
          <div className="absolute inset-0 opacity-40">
            <UniversityCover university={university} eager />
            <div className="absolute inset-0 bg-gradient-to-t from-[#160005] via-[#35000a]/85 to-[#250006]/70" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
            <Breadcrumbs
              light
              items={[
                { label: "Universities", to: "/universities" },
                {
                  label: country?.name || "Country",
                  to: `/universities?country=${university.country}`,
                },
                { label: university.name },
              ]}
            />

            <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold backdrop-blur">
                    <MapPin size={12} /> {university.city}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold backdrop-blur">
                    {country?.flag} {country?.name}
                  </span>
                  {university.founded && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold backdrop-blur">
                      <CalendarDays size={12} /> Est. {university.founded}
                    </span>
                  )}
                </div>

                <h1 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.03] tracking-tighter sm:text-5xl lg:text-6xl">
                  {university.name}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 lg:text-lg">
                  {university.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/#apply"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#7a0016] transition-all hover:-translate-y-0.5 hover:bg-[#ffd9dd]"
                >
                  <GraduationCap size={17} /> Start application
                </Link>
                <a
                  href={`https://wa.me/${CONTACT.whatsappRaw}?text=${inquiryText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0B7A38] px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0A6B30]"
                >
                  <MessageCircle size={17} /> Ask an advisor
                </a>
                <button
                  type="button"
                  onClick={() => toggleSaved(university.slug)}
                  aria-pressed={saved}
                  aria-label={
                    saved
                      ? `Remove ${university.name} from saved`
                      : `Save ${university.name}`
                  }
                  className={`grid h-[50px] w-[50px] place-items-center rounded-full border transition-colors ${
                    saved
                      ? "border-[#D62839] bg-[#D62839] text-white"
                      : "border-white/25 bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  <Heart size={18} fill={saved ? "currentColor" : "none"} />
                </button>
                <button
                  type="button"
                  onClick={() => toggleCompare(university.slug)}
                  aria-pressed={comparing}
                  aria-label={
                    comparing
                      ? `Remove ${university.name} from comparison`
                      : `Add ${university.name} to comparison`
                  }
                  className={`grid h-[50px] w-[50px] place-items-center rounded-full border transition-colors ${
                    comparing
                      ? "border-[#7a0016] bg-white text-[#7a0016]"
                      : "border-white/25 bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  <GitCompareArrows size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick facts */}
        <section className="border-b border-gray-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-10">
            <Fact icon={MapPin} label="Location" value={`${university.city}, ${country?.name}`} />
            <Fact
              icon={Layers}
              label="Degree levels"
              value={university.degreeLevels.join(", ")}
            />
            <Fact
              icon={BookOpen}
              label="Programs"
              value={`${university.programs.length}+ available`}
            />
            <Fact
              icon={CalendarDays}
              label="Established"
              value={university.founded || "Contact us"}
            />
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:px-10">
            {/* Main content */}
            <div className="lg:col-span-8">
              <div
                role="tablist"
                aria-label={`${university.name} details`}
                className="flex flex-wrap gap-2 border-b border-gray-200 pb-4"
              >
                {TABS.map((tab) => {
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      id={`tab-${tab.id}`}
                      role="tab"
                      type="button"
                      aria-selected={active}
                      aria-controls={`panel-${tab.id}`}
                      onClick={() => setActiveTab(tab.id)}
                      data-testid={`detail-tab-${tab.id}`}
                      className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                        active
                          ? "bg-[#7a0016] text-white shadow-md shadow-[#7a0016]/25"
                          : "bg-white text-gray-700 border border-gray-200 hover:border-[#D62839] hover:text-[#7a0016]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8">
                {activeTab === "overview" && (
                  <div
                    id="panel-overview"
                    role="tabpanel"
                    aria-labelledby="tab-overview"
                    className="animate-fade-up space-y-8"
                  >
                    <div>
                      <h2 className="font-display text-2xl font-extrabold tracking-tight text-gray-900">
                        About {university.name}
                      </h2>
                      <p className="mt-4 leading-relaxed text-gray-700">
                        {university.description}
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-gray-200 bg-white p-6">
                        <h3 className="flex items-center gap-2 font-display text-lg font-extrabold text-gray-900">
                          <Layers size={18} className="text-[#7a0016]" />
                          Degree levels
                        </h3>
                        <ul className="mt-4 space-y-2">
                          {university.degreeLevels.map((level) => (
                            <li
                              key={level}
                              className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                            >
                              <CheckCircle2
                                size={16}
                                className="text-[#0B7A38]"
                              />
                              {level}&apos;s degree
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-gray-200 bg-white p-6">
                        <h3 className="flex items-center gap-2 font-display text-lg font-extrabold text-gray-900">
                          <BookOpen size={18} className="text-[#7a0016]" />
                          Study areas
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-gray-700">
                          {university.programs.slice(0, 6).join(", ")}
                          {university.programs.length > 6 &&
                            ` and ${university.programs.length - 6} more.`}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl border border-[#D62839]/20 bg-[#fff5f5] p-5">
                      <Info size={18} className="mt-0.5 shrink-0 text-[#7a0016]" />
                      <p className="text-sm leading-relaxed text-gray-700">
                        Programme availability, fees and intake dates can change.
                        Our advisors confirm the latest details with the
                        university before you apply.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "programs" && (
                  <div
                    id="panel-programs"
                    role="tabpanel"
                    aria-labelledby="tab-programs"
                    className="animate-fade-up"
                  >
                    <h2 className="font-display text-2xl font-extrabold tracking-tight text-gray-900">
                      Available programs
                    </h2>
                    <p className="mt-3 text-sm text-gray-600">
                      Indicative programme list for {university.name}. Contact us
                      to confirm availability and entry requirements.
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {university.programs.map((program) => (
                        <li
                          key={program}
                          className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-[#D62839]"
                        >
                          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#fff5f5] text-[#7a0016]">
                            <BookOpen size={15} />
                          </span>
                          {program}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "admissions" && (
                  <div
                    id="panel-admissions"
                    role="tabpanel"
                    aria-labelledby="tab-admissions"
                    className="animate-fade-up space-y-8"
                  >
                    <div>
                      <h2 className="font-display text-2xl font-extrabold tracking-tight text-gray-900">
                        Admission requirements
                      </h2>
                      <ul className="mt-5 space-y-3">
                        {university.admissionRequirements.map((req) => (
                          <li
                            key={req}
                            className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm leading-relaxed text-gray-700 border border-gray-100"
                          >
                            <CheckCircle2
                              size={18}
                              className="mt-0.5 shrink-0 text-[#0B7A38]"
                            />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-extrabold text-gray-900">
                        Documents checklist
                      </h3>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {DOCUMENTS.map((doc) => (
                          <li
                            key={doc}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <CheckCircle2
                              size={15}
                              className="mt-0.5 shrink-0 text-[#7a0016]"
                            />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-6">
                      <h3 className="font-display text-lg font-extrabold text-gray-900">
                        How to apply
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-gray-700">
                        {university.applicationInfo}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "fees" && (
                  <div
                    id="panel-fees"
                    role="tabpanel"
                    aria-labelledby="tab-fees"
                    className="animate-fade-up"
                  >
                    <h2 className="font-display text-2xl font-extrabold tracking-tight text-gray-900">
                      Tuition &amp; fees
                    </h2>
                    {university.tuitionFees && university.tuitionFees.length > 0 ? (
                      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-[#f7f6f2]">
                            <tr>
                              <th className="px-5 py-3 font-bold text-gray-700">
                                Item
                              </th>
                              <th className="px-5 py-3 font-bold text-gray-700">
                                Amount
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {university.tuitionFees.map((fee) => (
                              <tr
                                key={fee.label}
                                className="border-t border-gray-100"
                              >
                                <td className="px-5 py-3 text-gray-700">
                                  {fee.label}
                                  {fee.note && (
                                    <span className="block text-xs text-gray-400">
                                      {fee.note}
                                    </span>
                                  )}
                                </td>
                                <td className="px-5 py-3 font-bold text-gray-900">
                                  {fee.amount}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-dashed border-gray-300 bg-white p-6">
                        <Info
                          size={20}
                          className="mt-0.5 shrink-0 text-[#7a0016]"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">
                            Tuition information coming soon
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-gray-600">
                            Fees for {university.name} vary by programme and are
                            confirmed at the point of admission. Request an
                            up-to-date fee sheet from an advisor — it only takes
                            a moment.
                          </p>
                          <a
                            href={`https://wa.me/${CONTACT.whatsappRaw}?text=${inquiryText}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#7a0016] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#D62839]"
                          >
                            Request fees
                            <ArrowRight size={15} />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "contact" && (
                  <div
                    id="panel-contact"
                    role="tabpanel"
                    aria-labelledby="tab-contact"
                    className="animate-fade-up"
                  >
                    <h2 className="font-display text-2xl font-extrabold tracking-tight text-gray-900">
                      Contact &amp; enquiries
                    </h2>
                    <p className="mt-3 text-sm text-gray-600">
                      Reach out about {university.name} and our advisors will
                      guide you through the application.
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {university.contact?.phone && (
                        <a
                          href={`tel:${university.contact.phone}`}
                          className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-5 transition-colors hover:border-[#D62839]"
                        >
                          <Phone size={18} className="text-[#7a0016]" />
                          <span className="text-sm font-semibold text-gray-800">
                            {university.contact.phone}
                          </span>
                        </a>
                      )}
                      {university.contact?.email && (
                        <a
                          href={`mailto:${university.contact.email}`}
                          className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-5 transition-colors hover:border-[#D62839]"
                        >
                          <Mail size={18} className="text-[#7a0016]" />
                          <span className="text-sm font-semibold break-all text-gray-800">
                            {university.contact.email}
                          </span>
                        </a>
                      )}
                      <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-5">
                        <MapPin size={18} className="text-[#7a0016]" />
                        <span className="text-sm font-semibold text-gray-800">
                          {university.contact?.address ||
                            `${university.city}, ${country?.name}`}
                        </span>
                      </div>
                      {university.website && (
                        <a
                          href={university.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-5 transition-colors hover:border-[#D62839]"
                        >
                          <ExternalLink size={18} className="text-[#7a0016]" />
                          <span className="text-sm font-semibold text-gray-800">
                            Official website
                          </span>
                        </a>
                      )}
                    </div>

                    <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#250006] via-[#680013] to-[#160005] p-7 text-white">
                      <h3 className="font-display text-xl font-extrabold">
                        Have a question about this university?
                      </h3>
                      <p className="mt-2 text-sm text-white/75">
                        Send us a message and get a personal response, usually
                        within 24 hours.
                      </p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        <a
                          href={`https://wa.me/${CONTACT.whatsappRaw}?text=${inquiryText}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#0B7A38] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0A6B30]"
                        >
                          <MessageCircle size={16} /> WhatsApp enquiry
                        </a>
                        <Link
                          to="/#apply"
                          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#7a0016] transition-colors hover:bg-[#ffd9dd]"
                        >
                          Open application form
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-10">
                <Link
                  to={`/universities?country=${university.country}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#7a0016] hover:text-[#D62839] transition-colors"
                >
                  <ArrowLeft size={16} />
                  Back to universities in {country?.name}
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <div className="aspect-[16/10] bg-gray-100">
                    <UniversityCover university={university} />
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-lg font-extrabold text-gray-900">
                      Quick facts
                    </h2>
                    <dl className="mt-4 space-y-3 text-sm">
                      <div className="flex justify-between gap-4">
                        <dt className="text-gray-500">Country</dt>
                        <dd className="font-semibold text-gray-900">
                          {country?.name}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-gray-500">City</dt>
                        <dd className="font-semibold text-gray-900">
                          {university.city}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-gray-500">Established</dt>
                        <dd className="font-semibold text-gray-900">
                          {university.founded || "—"}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-gray-500">Programs</dt>
                        <dd className="font-semibold text-gray-900">
                          {university.programs.length}+
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-6 flex flex-col gap-3">
                      <a
                        href={
                          university.website || `https://wa.me/${CONTACT.whatsappRaw}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7a0016] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#D62839]"
                      >
                        <ExternalLink size={15} />
                        Official website
                      </a>
                      <Link
                        to="/#apply"
                        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 px-5 py-3 text-sm font-bold text-gray-800 transition-colors hover:border-[#7a0016] hover:text-[#7a0016]"
                      >
                        Apply now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h2 className="font-display text-lg font-extrabold text-gray-900">
                    Need help deciding?
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Compare this university with others and talk to an advisor
                    about the best fit for your goals.
                  </p>
                  <Link
                    to="/universities"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#7a0016] hover:text-[#D62839] transition-colors"
                  >
                    Browse more universities
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="border-t border-gray-200 bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900">
                Related universities
              </h2>
              <p className="mt-3 text-gray-600">
                More institutions you might want to explore.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((u) => (
                  <UniversityCard key={u.slug} university={u} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <aside aria-label="Quick contact">
        <WhatsAppFloat />
      </aside>
      <CompareTray />
    </div>
  );
}

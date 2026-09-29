//Student gallery images
import gallery1 from "../assets/gallery/gallery1.jpg";
import gallery2 from "../assets/gallery/gallery2.jpg";
import gallery3 from "../assets/gallery/gallery3.jpg";
import gallery4 from "../assets/gallery/gallery4.jpg";
import gallery5 from "../assets/gallery/gallery5.jpg";
import gallery6 from "../assets/gallery/gallery6.jpg";
import gallery7 from "../assets/gallery/gallery7.jpg";
import gallery8 from "../assets/gallery/gallery8.jpg";
import gallery9 from "../assets/gallery/gallery9.jpg";
import gallery10 from "../assets/gallery/gallery10.jpg";
import gallery11 from "../assets/gallery/gallery11.jpg";
import gallery12 from "../assets/gallery/gallery12.jpg";
import gallery14 from "../assets/gallery/gallery14.jpg";

// Student images
import student1 from "../assets/students/student1.jpg";
import student2 from "../assets/students/student2.jpg";
import student3 from "../assets/students/student3.jpg";
import student4 from "../assets/students/student4.jpg";
import student5 from "../assets/students/student5.jpg";
import student6 from "../assets/students/student6.jpg";

// The unified university directory lives in ./universities.js. It is re-exported
// here so existing imports from "@/lib/data" keep working unchanged.
export {
  UNIVERSITIES,
  COUNTRIES,
  DEGREE_LEVELS,
  PROGRAM_CATEGORIES,
  getCountry,
  getUniversityBySlug,
  getUniversitiesByCountry,
  getFeaturedUniversities,
  getHomeFeatured,
  getRelatedUniversities,
  getAllCities,
  getAllPrograms,
  getAllDegreeLevels,
  slugify,
} from "./universities";

// Static content for YANKABA Education Consultancy

export const CONTACT = {
  phone: "+2348064846033",
  whatsapp: "+201100844026",
  whatsappRaw: "201100844026",
  email: "info@yankabaedu.com",
  brand: "YANKABA",
  brandFull: "YANKABA Education Consultancy",
};

export const STATS = [
  { value: "3", label: "Study Destinations" },
  { value: "45+", label: "Partner Universities" },
  { value: "1000+", label: "Success Stories" },
  { value: "24h", label: "Response Time" },
];

export const FEATURES = [
  {
    title: "One-to-One Consultation",
    body: "Personalised guidance tailored to your academic goals and ambitions.",
    icon: "users",
  },
  {
    title: "Highly Motivated Team",
    body: "Study-abroad professionals fully dedicated to your success.",
    icon: "target",
  },
  {
    title: "User Friendly Environment",
    body: "A supportive, transparent consultation experience from day one.",
    icon: "sparkles",
  },
  {
    title: "Easiest Process",
    body: "From applying to enrolment we simplify every single step.",
    icon: "check-circle-2",
  },
];

export const SERVICES = [
  {
    title: "University Selection",
    body: "Expert guidance in choosing the right university and program that match your career goals.",
    icon: "graduation-cap",
  },
  {
    title: "Application Assistance",
    body: "Complete support with application forms, document preparation and submission.",
    icon: "file-text",
  },
  {
    title: "Visa Support",
    body: "Comprehensive visa guidance and documentation for smooth entry into your destination country.",
    icon: "plane",
  },
  {
    title: "Accommodation Help",
    body: "Help finding suitable, affordable accommodation near your university campus.",
    icon: "home",
  },
  {
    title: "Pre-Departure Briefing",
    body: "Orientation sessions to prepare you for life and studies abroad.",
    icon: "compass",
  },
  {
    title: "Ongoing Support",
    body: "Continuous support throughout your studies — from enrolment to graduation.",
    icon: "handshake",
  },
];

export const FIELDS = [
  // Health Sciences
  { name: "Medicine", duration: "5 years", category: "Health Sciences" },
  { name: "Dentistry", duration: "5 years", category: "Health Sciences" },
  { name: "Pharmacy", duration: "4 years", category: "Health Sciences" },
  { name: "Nursing", duration: "4 years", category: "Health Sciences" },
  { name: "Physiotherapy", duration: "4 years", category: "Health Sciences" },
  { name: "Medical Laboratory Technology (MLT)", duration: "4 years", category: "Health Sciences" },
  { name: "Radiography & Medical Imaging Technology (RMIT)", duration: "4 years", category: "Health Sciences" },
  { name: "Respiratory Care Technology (RCT)", duration: "4 years", category: "Health Sciences" },
  { name: "Biotechnology", duration: "4 years", category: "Health Sciences" },
  { name: "Health Administration & Information Technology (HAIT)", duration: "4 years", category: "Health Sciences" },

  // Computer Science
  { name: "Computer Science", duration: "4 years", category: "Computer Science" },
  { name: "Cyber Security", duration: "4 years", category: "Computer Science" },
  { name: "Artificial Intelligence", duration: "4 years", category: "Computer Science" },
  { name: "Data Science", duration: "4 years", category: "Computer Science" },
  { name: "Information Systems", duration: "4 years", category: "Computer Science" },
  { name: "Mobile & Cloud Computing", duration: "4 years", category: "Computer Science" },
  { name: "Game Development", duration: "4 years", category: "Computer Science" },

  // Engineering
  { name: "Architectural Engineering", duration: "4 years", category: "Engineering" },
  { name: "Civil Engineering", duration: "4 years", category: "Engineering" },
  { name: "Industrial & Systems Engineering", duration: "4 years", category: "Engineering" },
  { name: "Computer & Software Engineering", duration: "4 years", category: "Engineering" },
  { name: "Electronic & Communication Engineering", duration: "4 years", category: "Engineering" },
  { name: "Electrical Power & Machines Engineering", duration: "4 years", category: "Engineering" },
  { name: "Biomedical Engineering", duration: "4 years", category: "Engineering" },
  { name: "Mechatronics Engineering", duration: "4 years", category: "Engineering" },

  // Natural Sciences
  { name: "Chemistry", duration: "4 years", category: "Natural Sciences" },
  { name: "Physics", duration: "4 years", category: "Natural Sciences" },
  { name: "Mathematics, Statistics & Computer Science", duration: "4 years", category: "Natural Sciences" },
  { name: "Biochemistry", duration: "4 years", category: "Natural Sciences" },
  { name: "Botany & Microbiology", duration: "4 years", category: "Natural Sciences" },
  { name: "Zoology", duration: "4 years", category: "Natural Sciences" },
  { name: "Geology", duration: "4 years", category: "Natural Sciences" },
  { name: "Geophysics", duration: "4 years", category: "Natural Sciences" },
  { name: "Astronomy & Meteorology", duration: "4 years", category: "Natural Sciences" },
  { name: "Entomology", duration: "4 years", category: "Natural Sciences" },
  { name: "Environmental Sciences", duration: "4 years", category: "Natural Sciences" },

  // Business & Management
  { name: "Business Administration", duration: "4 years", category: "Business & Management" },
  { name: "Commerce", duration: "4 years", category: "Business & Management" },
  { name: "Accounting", duration: "4 years", category: "Business & Management" },
  { name: "Marketing", duration: "4 years", category: "Business & Management" },
  { name: "Economics", duration: "4 years", category: "Business & Management" },
  { name: "Finance & Investment", duration: "4 years", category: "Business & Management" },
  { name: "Hotel & Tourism Management", duration: "4 years", category: "Business & Management" },

  // Media & Communication
  { name: "Broadcasting", duration: "4 years", category: "Media & Communication" },
  { name: "Radio & Television", duration: "4 years", category: "Media & Communication" },
  { name: "Public Relations & Advertising", duration: "4 years", category: "Media & Communication" },
  { name: "Print & Electronic Journalism", duration: "4 years", category: "Media & Communication" },

  // Law & Political Studies
  { name: "Law", duration: "4 years", category: "Law & Political Studies" },
  { name: "Political Science", duration: "4 years", category: "Law & Political Studies" },
  { name: "International Relations", duration: "4 years", category: "Law & Political Studies" },

  // Arts, Languages & Humanities
  { name: "Archaeology", duration: "4 years", category: "Arts, Languages & Humanities" },
  { name: "Linguistics & Translation", duration: "4 years", category: "Arts, Languages & Humanities" },

  // Education
  { name: "Education", duration: "4 years", category: "Education" },
  { name: "Special Education", duration: "4 years", category: "Education" },

   // Veterinary Medicine
  { name: "Veterinary Medicine", duration: "4 years", category: "Veterinary Medicine" },

  // Agriculture
  { name: "Agriculture", duration: "4 years", category: "Agriculture" },
  { name: "Agricultural Economics", duration: "4 years", category: "Agriculture" },
  { name: "Agronomy", duration: "4 years", category: "Agriculture" },
  { name: "Animal Production", duration: "4 years", category: "Agriculture" },
  { name: "Plant Protection", duration: "4 years", category: "Agriculture" },
  { name: "Food Science & Technology", duration: "4 years", category: "Agriculture" },
  { name: "Horticulture", duration: "4 years", category: "Agriculture" },
  { name: "Soil & Water Sciences", duration: "4 years", category: "Agriculture" },
];

export const DOCUMENTS = [
  "Copy of Passport Data Page",
  "Certificate of Birth",
  "Primary and High School Certificates",
  "Six (6) Passport Photographs (35×45mm, white background)",
  "Recommendation Letter from Embassy",
];

export const COSTS = [
  { label: "Application Fee", amount: "$175", note: "Government/University Fee" },
  { label: "Admission Fee", amount: "$170", note: "Government/University Fee" },
  { label: "Students Club Fund", amount: "$150", note: "Government/University Fee" },
  { label: "University Registration Services", amount: "$1,500", note: "Government/University Fee" },
  { label: "Annual Latency Fee", amount: "$300/yr", note: "annual Latency Fee" },
  { label: "Certification of Documents/Stamps", amount: "$100", note: "Government/University Fee" },
  { label: "YANKABA Service Fee", amount: "$500", note: "Consultancy Fee" },
];

export const STEPS = [
  {
    n: "01",
    title: "Initial Consultation",
    body: "Free consultation to understand your goals and recommend suitable universities.",
  },
  {
    n: "02",
    title: "Application Preparation",
    body: "We help prepare all required documents and submit applications to your chosen universities.",
  },
  {
    n: "03",
    title: "Admission & Visa",
    body: "Support with admission confirmation and student visa application process.",
  },
  {
    n: "04",
    title: "Pre-Departure",
    body: "Orientation, accommodation assistance and preparation for your journey abroad.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Dr Jakino Geri Lawrence",
    country: "South Sudan",
    course: "Medicine · Alexandria University",
    quote:
      "Studying medicine in Egypt has been an incredible journey. YANKABA supported me from admission to settling in Alexandria, making every step simple and stress-free.",
    image: student6,
  },
  {
    name: "Ahmad Sanusi",
    country: "Nigeria",
    course: "Faculty of Commerce · Cairo University",
    quote:
      "I was worried about the admission process, but YANKABA handled everything professionally. Today I'm proudly studying Commerce at Cairo University and couldn't be happier.",
    image: student1,
  },
  {
    name: "Dr Amira Ismail",
    country: "Nigeria",
    course: "Medicine · Cairo University",
    quote:
      "Choosing YANKABA was one of the best decisions I made. Their team guided me through admission, visa processing, and accommodation, making my transition to Egypt smooth.",
    image: student2,
  },
  {
    name: "RN Maryam Umar Aliyu",
    country: "Nigeria",
    course: "Nursing · Alexandria University",
    quote:
      "YANKABA answered all my questions and kept me informed throughout the application process. Their support gave me confidence to pursue my nursing career abroad.",
    image: student3,
  },
  {
    name: "Dr Halimatu Sadiya Abubakar",
    country: "Nigeria",
    course: "Medicine · Alexandria University",
    quote:
      "From document preparation to university registration, everything was organized perfectly. I highly recommend YANKABA to anyone planning to study in Egypt.",
    image: student4,
  },
  {
    name: "Sadat Umar",
    country: "Nigeria",
    course: "Cyber Security · MTI University",
    quote:
      "As an international student, I expected many challenges, but YANKABA made the entire process straightforward. Their dedication helped me begin my Cyber Security degree with confidence.",
    image: student5,
  },
];

export const GALLERY = [
  {
    image: gallery1,
    title: "Meeting with the Minister of Higher Education",
    description:
      "A successful meeting with the Minister of Higher Education to review ongoing efforts to support incoming international students.",
  },
  {
    image: gallery2,
    title: "International Cultural Day",
    description:
      "Celebrating cultural diversity through the International Students Cultural Day event.",
  },
  {
    image: gallery3,
    title: "Arabic Language Classes",
    description: "2025/2026 Arabic Class Students.",
  },
  {
    image: gallery4,
    title: "International Cultural Day",
    description:
      "Celebrating cultural diversity through performances, exhibitions, and traditional attire during the International Cultural Day event.",
  },
  {
    image: gallery5,
    title: "Ministry of Higher Education Event",
    description:
      "A special occasion organized by the Ministry of Higher Education, bringing together officials and international students to promote collaboration and academic engagement.",
  },
  /*{
    image: gallery6,
    title: "Arabic Language Classes",
    description:
      "International students participating in Arabic language classes.",
  },*/
  {
    image: gallery7,
    title: "Ministry of Higher Education Meeting",
    description:
      "A successful meeting between the Ministry of Higher Education and the Office of International Students to strengthen collaboration and student support.",
  },
  {
    image: gallery8,
    title: "Inauguration of Senghor University's New Campus",
    description:
      "The President of France attended the inauguration of Senghor University's new main campus in Alexandria.",
  },
  {
    image: gallery9,
    title: "Official Visit",
    description:
      "An official visit to the Director of the Office of International Students to discuss initiatives and student services.",
  },
  {
    image: gallery10,
    title: "International Cultural Day",
    description:
      "Students showcasing their cultures and traditions during the International Students Cultural Day celebration.",
  },
  {
    image: gallery11,
    title: "International Cultural Day",
    description:
      "Promoting cultural exchange and unity among international students.",
  },
  {
    image: gallery12,
    title: "Graduation Ceremony",
    description:
      "Celebrating Students' Academic Success in Egypt.",
  },
  {
    image: gallery14,
    title: "Graduation Ceremony",
    description:
      "Yankaba Students Completing Their Academic Journey in Egypt.",
  },
];

export const FAQS = [
  {
    q: "Which countries can I study in through YANKABA?",
    a: "We support admissions in Egypt, Turkey and Cyprus. You can explore universities by country in our directory and our advisors will help you compare options based on your budget, programme and career goals.",
  },
  {
    q: "Is YANKABA officially authorized to handle admissions?",
    a: "For Egypt we work through the Central Department for International Students Affairs (WAFEDEN), under the Ministry of Higher Education. For Turkey and Cyprus we apply directly to each university's international office.",
  },
  {
    q: "Do you guarantee a scholarship?",
    a: "Our Premium Scholarship Package gives qualified students up to 100% scholarship coverage on tuition for the full duration of their studies after the one-time fees are paid.",
  },
  {
    q: "How long does the admission process take?",
    a: "Admission typically takes 5 working days maximum from document submission, though timelines vary by university and country.",
  },
  {
    q: "What is the language of instruction?",
    a: "Most international programs are taught in English. Arabic and Turkish programs are also available in the relevant countries, and we can advise on the best fit for you.",
  },
  {
    q: "What are the payment terms?",
    a: "50% of the Service Fee is required upfront. The remaining 50% is due once admission is secured. Flexible payment plans are available — contact us to discuss options.",
  },
];

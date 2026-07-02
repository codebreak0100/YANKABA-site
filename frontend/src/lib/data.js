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

// Student images
import student1 from "../assets/students/student1.jpg";
import student2 from "../assets/students/student2.jpg";
import student3 from "../assets/students/student3.jpg";
import student4 from "../assets/students/student4.jpg";
import student5 from "../assets/students/student5.jpg";
import student6 from "../assets/students/student6.jpg";

import university1 from "../assets/universities/Port Said.jpg";
import university2 from "../assets/universities/Suez University.jpg";

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
  { value: "15+", label: "Partner Universities" },
  { value: "1000+", label: "Success Stories" },
  { value: "100%", label: "Success Rate" },
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
    body: "Study-in-Egypt professionals fully dedicated to your success.",
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
    body: "Comprehensive visa guidance and documentation for smooth entry into Egypt.",
    icon: "plane",
  },
  {
    title: "Accommodation Help",
    body: "Help finding suitable, affordable accommodation near your university campus.",
    icon: "home",
  },
  {
    title: "Pre-Departure Briefing",
    body: "Orientation sessions to prepare you for life and studies in Egypt.",
    icon: "compass",
  },
  {
    title: "Ongoing Support",
    body: "Continuous support throughout your studies — from enrolment to graduation.",
    icon: "handshake",
  },
];

/*export const UNIVERSITIES = [
  {
    name: "Cairo University",
    url: "https://cu.edu.eg/Home",
    city: "Cairo",
    founded: "1908",
    image:
      "https://images.unsplash.com/photo-1583468982228-19f19164aee2?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    name: "Alexandria University",
    url: "https://alexu.edu.eg/index.php/en/",
    city: "Alexandria",
    founded: "1938",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    name: "Ain Shams University",
    url: "https://www.asu.edu.eg/en/",
    city: "Cairo",
    founded: "1950",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    name: "Assuit University",
    url: "https://www.aun.edu.eg/main/",
    city: "Assiut",
    founded: "1957",
    image:
      "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    name: "Mansoura University",
    url: "https://www.mans.edu.eg/en/",
    city: "Mansoura",
    founded: "1972",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    name: "Misr University of Science & Tech",
    url: "https://www.must.edu.eg/",
    city: "6th October",
    founded: "1996",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    name: "Pharos University",
    url: "https://pua.edu.eg/",
    city: "Alexandria",
    founded: "2006",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    name: "Helwan University",
    url: "https://hu.edu.eg/",
    city: "Helwan",
    founded: "1975",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    name: "Beni Suef University",
    url: "https://www.bsu.edu.eg/Sector.aspx?S=1",
    city: "Beni Suef",
    founded: "2005",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    name: "Future University",
    url: "https://fue.edu.eg/",
    city: "Cairo",
    founded: "2006",
    image:
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    name: "MTI University",
    url: "https://mti.edu.eg/",
    city: "Cairo",
    founded: "1996",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    name: "6th October University",
    url: "https://o6u.edu.eg/",
    city: "6th October",
    founded: "1996",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    name: "Delta University",
    url: "https://www.deltauniv.edu.eg/",
    city: "Gamasa",
    founded: "2007",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
];*/

// Universities Images
export const UNIVERSITIES = [
  {
    name: "Cairo University",
    url: "https://cu.edu.eg/Home",
    city: "Cairo",
    founded: "1908",
    image: "/images/universities/Cairo University.jpg",
  },
  {
    name: "Alexandria University",
    url: "https://alexu.edu.eg/index.php/en/",
    city: "Alexandria",
    founded: "1938",
    image: "/images/universities/Alexandria University.jpg",
  },
  {
    name: "Ain Shams University",
    url: "https://www.asu.edu.eg/en/",
    city: "Cairo",
    founded: "1950",
    image: "/images/universities/Ain Shams University, Egypt.jpg",
  },
  {
    name: "Assiut University",
    url: "https://www.aun.edu.eg/main/",
    city: "Assiut",
    founded: "1957",
    image: "/images/universities/Assuit University.jpg",
  },
  {
    name: "Mansoura University",
    url: "https://www.mans.edu.eg/en/",
    city: "Mansoura",
    founded: "1972",
    image: "/images/universities/Mansoura University Egypt 🇪🇬.jpg",
  },
  {
    name: "Misr University of Science & Technology",
    url: "https://www.must.edu.eg/",
    city: "6th October",
    founded: "1996",
    image: "/images/universities/Misr University of Science & Tech.jpg",
  },
  {
    name: "Pharos University",
    url: "https://pua.edu.eg/",
    city: "Alexandria",
    founded: "2006",
    image: "/images/universities/Pharos University.jpg",
  },
  {
    name: "Helwan University",
    url: "https://hu.edu.eg/",
    city: "Helwan",
    founded: "1975",
    image: "/images/universities/Helwan University.jpg",
  },
  {
    name: "Beni Suef University",
    url: "https://www.bsu.edu.eg/Sector.aspx?S=1",
    city: "Beni Suef",
    founded: "2005",
    image: "/images/universities/beni suef university.jpg",
  },
  {
    name: "Future University",
    url: "https://fue.edu.eg/",
    city: "Cairo",
    founded: "2006",
    image: "/images/universities/future university.jpg",
  },
  {
    name: "MTI University",
    url: "https://mti.edu.eg/",
    city: "Cairo",
    founded: "1996",
    image: "/images/universities/mti university.jpg",
  },
  {
    name: "6th October University",
    url: "https://o6u.edu.eg/",
    city: "6th October",
    founded: "1996",
    image: "/images/universities/6th october university.jpg",
  },
  {
    name: "Delta University",
    url: "https://www.deltauniv.edu.eg/",
    city: "Gamasa",
    founded: "2007",
    image: "/images/universities/delta university.jpg",
  },
  {
    name: "Port Said University",
    url: "https://www.deltauniv.edu.eg/",
    city: "Port Said",
    founded: "2010",
    image: university1, 
  },
  {
    name: "Suez University",
    url: "https://www.deltauniv.edu.eg/",
    city: "Suez",
    founded: "1975",
    image: university2,
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
    body: "Orientation, accommodation assistance and preparation for your journey to Egypt.",
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

/*export const GALLERY = [
  "https://images.pexels.com/photos/7683897/pexels-photo-7683897.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/6214718/pexels-photo-6214718.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.unsplash.com/photo-1689785380577-93f35f4d6bf9?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.unsplash.com/photo-1594750852563-5ed8e0421d40?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
];*/
export const GALLERY = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
];

export const FAQS = [
  {
    q: "Is YANKABA officially authorized to handle admissions in Egypt?",
    a: "Yes. We work through the Central Department for International Students Affairs (WAFEDEN), under the Ministry of Higher Education in Egypt.",
  },
  {
    q: "Do you guarantee a scholarship?",
    a: "Our Premium Scholarship Package gives qualified students up to 100% scholarship coverage on tuition for the full duration of their studies after the one-time fees are paid.",
  },
  {
    q: "How long does the admission process take?",
    a: "Admission takes 5 working Days Maximum from document submission.",
  },
  {
    q: "What is the language of instruction?",
    a: "Most international programs are taught in English. Arabic programs are also available and we can advise on the best fit for you.",
  },
  {
    q: "What are the payment terms?",
    a: "50% of the Service Fee is required upfront. The remaining 50% is due once admission is secured. Flexible payment plans are available — contact us to discuss options.",
  },
];

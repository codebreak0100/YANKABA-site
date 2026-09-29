import useSeo from "@/lib/useSeo";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import CountryCards from "@/components/site/CountryCards";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Universities from "@/components/site/Universities";
import Programs from "@/components/site/Programs";
import Costs from "@/components/site/Costs";
import Process from "@/components/site/Process";
import Testimonials from "@/components/site/Testimonials";
import Gallery from "@/components/site/Gallery";
import ApplyForm from "@/components/site/ApplyForm";
import FAQ from "@/components/site/FAQ";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import CompareTray from "@/components/site/CompareTray";
import StructuredData from "@/components/site/StructuredData";

export default function Home() {
  useSeo({
    title: "Study Abroad in Egypt, Turkey & Cyprus",
    description:
      "YANKABA helps international students access world-class universities in Egypt, Turkey & Cyprus with scholarships and full admission support — from application to graduation.",
    path: "/",
    image: "/images/hero/hero1.jpg",
  });

  return (
    <div data-testid="home-page" className="site-canvas bg-[#F7F6F2] text-gray-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:bg-white focus:text-[#7a0016] focus:rounded-full focus:shadow-lg focus:font-bold"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <CountryCards />
        <About />
        <Services />
        <Universities />
        <Programs />
        <Costs />
        <Process />
        <Testimonials />
        <Gallery />
        <ApplyForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <aside aria-label="Quick contact">
        <WhatsAppFloat />
      </aside>
      <CompareTray />
      <StructuredData />
    </div>
  );
}

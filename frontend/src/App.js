import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
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

function Home() {
  return (
    <div data-testid="home-page" className="bg-[#FAFAFA] text-gray-900">
      <Navbar />
      <main>
        <Hero />
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
      <WhatsAppFloat />
      <Toaster position="top-center" richColors />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

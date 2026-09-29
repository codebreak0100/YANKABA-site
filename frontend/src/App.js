import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

import ScrollToTop from "@/components/site/ScrollToTop";
import Home from "@/pages/Home";
import UniversitiesPage from "@/pages/UniversitiesPage";
import UniversityDetailPage from "@/pages/UniversityDetailPage";
import CountriesPage from "@/pages/CountriesPage";
import ProgramsPage from "@/pages/ProgramsPage";
import ComparePage from "@/pages/ComparePage";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universities" element={<UniversitiesPage />} />
          <Route path="/universities/:slug" element={<UniversityDetailPage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster position="top-center" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;

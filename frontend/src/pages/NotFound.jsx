import { Link } from "react-router-dom";
import { Compass, ArrowRight } from "lucide-react";
import useSeo from "@/lib/useSeo";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export default function NotFound() {
  useSeo({
    title: "Page not found",
    description:
      "The page you are looking for could not be found. Explore universities in Egypt, Turkey and Cyprus instead.",
    path: "/404",
  });

  return (
    <div data-testid="not-found-page" className="site-canvas bg-[#F7F6F2]">
      <Navbar solid />
      <main
        id="main"
        className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 py-32 text-center sm:px-6"
      >
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#fff5f5] text-[#7a0016]">
          <Compass size={30} />
        </div>
        <p className="mt-6 font-display text-6xl font-extrabold tracking-tighter text-[#7a0016]">
          404
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-gray-900">
          This page took a wrong turn
        </h1>
        <p className="mt-4 max-w-md text-gray-600 leading-relaxed">
          We couldn&apos;t find the page you were looking for. It may have moved
          or the link may be incorrect.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#7a0016] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#D62839]"
          >
            Back to home
          </Link>
          <Link
            to="/universities"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-7 py-3.5 text-sm font-bold text-gray-800 transition-colors hover:border-[#7a0016] hover:text-[#7a0016]"
          >
            Browse universities
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

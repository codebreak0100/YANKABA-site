import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll behaviour for a single-page-app:
 * - navigating to a hash scrolls to that section (with a small retry so it also
 *   works when the target page has just mounted),
 * - any other navigation returns the user to the top of the page.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        if (attempts < 6) {
          attempts += 1;
          window.setTimeout(tryScroll, 60);
        }
      };
      tryScroll();
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

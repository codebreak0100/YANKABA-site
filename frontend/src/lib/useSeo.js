import { useEffect } from "react";

export const SITE_URL = (
  process.env.REACT_APP_SITE_URL || "https://yankabaedu.com"
).replace(/\/$/, "");

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Set per-page document metadata (title, description, canonical, Open Graph,
 * Twitter and optional JSON-LD). Safe to call on every render — values are
 * updated in place.
 */
export default function useSeo({
  title,
  description,
  path = "/",
  image = "/images/hero/hero1.jpg",
  type = "website",
  jsonLd = null,
}) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | YANKABA Education Consultancy`
      : "YANKABA Education Consultancy";
    const canonical = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
    const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

    document.title = fullTitle;

    if (description) {
      upsertMeta('meta[name="description"]', {
        name: "description",
        content: description,
      });
    }

    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: fullTitle,
    });
    if (description) {
      upsertMeta('meta[property="og:description"]', {
        property: "og:description",
        content: description,
      });
    }
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: type,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonical,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: fullTitle,
    });
    if (description) {
      upsertMeta('meta[name="twitter:description"]', {
        name: "twitter:description",
        content: description,
      });
    }

    upsertLink("canonical", canonical);

    if (jsonLd) {
      upsertJsonLd("page-jsonld", jsonLd);
    }
    return () => {
      if (jsonLd) upsertJsonLd("page-jsonld", null);
    };
  }, [title, description, path, image, type, jsonLd]);
}

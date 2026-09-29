/* eslint-disable no-console */
const http = require("http");
const fs = require("fs");
const path = require("path");

require("dotenv").config();

const BUILD_DIR = path.join(__dirname, "..", "build");
const PORT = Number(process.env.PRERENDER_PORT || 47621);
const ORIGIN = `http://127.0.0.1:${PORT}`;

// Canonical production origin. Override with REACT_APP_SITE_URL (used by both
// the app bundle and this script) or SITE_URL.
const SITE_URL = (
  process.env.REACT_APP_SITE_URL ||
  process.env.SITE_URL ||
  "https://yankabaedu.com"
).replace(/\/$/, "");

// The pristine CRA shell. It is served for every HTML request during capture so
// client-side rendering always starts from a clean document.
const PRISTINE_INDEX = fs.readFileSync(
  path.join(BUILD_DIR, "index.html"),
  "utf8",
);

// Routes that always exist. University detail routes are discovered at runtime
// from the directory page.
const STATIC_ROUTES = ["/", "/universities", "/countries", "/programs", "/compare"];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".webmanifest": "application/manifest+json",
};

function createServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const urlPath = decodeURIComponent(req.url.split("?")[0]);

      // Unknown routes end with "/" when written to disk, so a request for
      // "/universities" should prefer "universities/index.html" if it exists.
      const candidates = [];
      if (urlPath === "/") {
        candidates.push(path.join(BUILD_DIR, "index.html"));
      } else {
        const rel = urlPath.replace(/^\/+/, "");
        candidates.push(path.join(BUILD_DIR, rel));
        candidates.push(path.join(BUILD_DIR, rel, "index.html"));
      }

      const serve = (index) => {
        if (index >= candidates.length) {
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          res.end(PRISTINE_INDEX);
          return;
        }
        const filePath = candidates[index];
        if (!filePath.startsWith(BUILD_DIR)) {
          res.writeHead(403);
          res.end("Forbidden");
          return;
        }
        fs.readFile(filePath, (err, data) => {
          if (err || fs.statSync(filePath).isDirectory?.()) {
            serve(index + 1);
            return;
          }
          res.writeHead(200, {
            "Content-Type":
              MIME[path.extname(filePath)] || "application/octet-stream",
          });
          res.end(data);
        });
      };

      try {
        serve(0);
      } catch {
        res.writeHead(500);
        res.end("Server error");
      }
    });
    server.listen(PORT, "127.0.0.1", () => resolve(server));
  });
}

const IGNORE_CONSOLE =
  /posthog|failed to load resource|net::|download the react devtools|favicon/i;

function insertTextSeparators() {
  const insert = (node) => {
    const children = Array.from(node.childNodes);
    for (const child of children) {
      if (
        child.nodeType === Node.TEXT_NODE &&
        child.nextSibling &&
        child.nextSibling.nodeType === Node.TEXT_NODE
      ) {
        child.parentNode.insertBefore(
          document.createComment(""),
          child.nextSibling,
        );
      }
      if (child.nodeType === Node.ELEMENT_NODE) insert(child);
    }
  };
  const root = document.getElementById("root");
  if (root) insert(root);
}

function outputPathFor(route) {
  const clean = route.split("?")[0].replace(/\/$/, "");
  if (clean === "") return path.join(BUILD_DIR, "index.html");
  return path.join(BUILD_DIR, clean.replace(/^\//, ""), "index.html");
}

function writeSeoFiles(routes) {
  const today = new Date().toISOString().split("T")[0];

  const priorityFor = (route) => {
    if (route === "/") return "1.0";
    if (route.startsWith("/universities/")) return "0.7";
    if (route === "/universities" || route === "/countries") return "0.9";
    return "0.6";
  };

  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${SITE_URL}${route === "/" ? "/" : route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.startsWith("/universities/") ? "yearly" : "monthly"}</changefreq>
    <priority>${priorityFor(route)}</priority>
  </url>`,
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  fs.writeFileSync(path.join(BUILD_DIR, "sitemap.xml"), sitemap);

  const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
  fs.writeFileSync(path.join(BUILD_DIR, "robots.txt"), robots);
}

async function main() {
  const indexPath = path.join(BUILD_DIR, "index.html");
  if (!fs.existsSync(indexPath)) {
    throw new Error("build/index.html not found — run the build first.");
  }

  const { chromium } = require("@playwright/test");

  const server = await createServer();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));
  page.on("console", (msg) => {
    if (msg.type() === "error" && !IGNORE_CONSOLE.test(msg.text())) {
      errors.push(msg.text());
    }
  });

  const captured = new Map();

  const capture = async (route) => {
    await page.goto(ORIGIN + route, { waitUntil: "domcontentloaded" });
    await page.waitForSelector('[data-testid="footer"]', { timeout: 30000 });
    await page.waitForTimeout(500);
    await page.evaluate(insertTextSeparators);
    const html = (await page.content()).replace(/__SITE_URL__/g, SITE_URL);
    captured.set(route, html);
  };

  try {
    // Discover university detail routes from the directory page.
    await page.goto(ORIGIN + "/universities", { waitUntil: "domcontentloaded" });
    await page.waitForSelector('[data-testid="footer"]', { timeout: 30000 });
    const detailRoutes = await page.$$eval(
      'a[href^="/universities/"]',
      (links) =>
        Array.from(
          new Set(links.map((a) => a.getAttribute("href").split("?")[0])),
        ),
    );

    const routes = [...STATIC_ROUTES, ...detailRoutes];

    for (const route of routes) {
      await capture(route);
    }

    // Write all pages only after capture so the pristine shell is used for the
    // whole run.
    for (const [route, html] of captured.entries()) {
      const target = outputPathFor(route);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, html);
    }

    writeSeoFiles(routes);

    // Validate that the prerendered home markup hydrates cleanly.
    await page.goto(ORIGIN + "/", { waitUntil: "domcontentloaded" });
    await page.waitForSelector('[data-testid="hero-title"]', { timeout: 30000 });
    await page.waitForTimeout(1200);

    const homeHtml = captured.get("/");
    const hasContent =
      homeHtml.includes('data-testid="hero-title"') &&
      homeHtml.includes("Begin your journey");

    const hydrationErrors = errors.filter((e) =>
      /hydrat|did not match|text content does not match/i.test(e),
    );
    const renderErrors = errors.filter((e) => !hydrationErrors.includes(e));

    if (!hasContent) {
      throw new Error("Prerendered HTML is missing the app content.");
    }
    if (hydrationErrors.length) {
      throw new Error("Hydration mismatch:\n" + hydrationErrors.join("\n"));
    }
    if (renderErrors.length) {
      throw new Error("Console errors:\n" + renderErrors.join("\n"));
    }

    const homeSize = fs.statSync(indexPath).size;
    console.log(
      `Prerender: wrote ${routes.length} pages (home ${(homeSize / 1024).toFixed(
        1,
      )} KB), sitemap.xml (${routes.length} URLs) and robots.txt for ${SITE_URL} — hydration verified.`,
    );
  } finally {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

main().catch((err) => {
  console.error("\nPrerender failed:\n" + err.message);
  process.exit(1);
});

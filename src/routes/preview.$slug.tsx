import { createFileRoute, Link } from "@tanstack/react-router";
import { previewConfigs } from "@/previews.config";
import { siteConfig } from "@/site.config";
import { SitePage } from "./index";

export const Route = createFileRoute("/preview/$slug")({
  head: ({ params }) => {
    const config = previewConfigs[params.slug] ?? siteConfig;

    return {
      meta: [
        { title: `${config.name} | Preview webu` },
        { name: "description", content: config.seo.description },
        { property: "og:title", content: `${config.name} | Preview webu` },
        { property: "og:description", content: config.seo.ogDescription },
        { property: "og:type", content: "website" },
      ],
    };
  },
  component: PreviewPage,
});

function PreviewPage() {
  const { slug } = Route.useParams();
  const config = previewConfigs[slug];

  if (!config) {
    return (
      <main className="grid min-h-screen place-items-center bg-background px-5 text-center text-foreground">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-sage-deep">Preview nenalezeno</p>
          <h1 className="mt-3 font-serif text-4xl">Tahle varianta zatím neexistuje.</h1>
          <p className="mt-4 text-muted-foreground">Zkontrolujte odkaz, nebo se vraťte na základní šablonu.</p>
          <Link
            to="/"
            className="mt-7 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            Otevřít základní šablonu
          </Link>
        </div>
      </main>
    );
  }

  return <SitePage config={config} />;
}

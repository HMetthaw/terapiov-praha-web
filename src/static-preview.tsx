import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { previewConfigs } from "./previews.config";
import { siteConfig } from "./site.config";
import { SitePage } from "./routes/index";

const pathParts = window.location.pathname.split("/").filter(Boolean);
const previewIndex = pathParts.indexOf("preview");
const slug = previewIndex >= 0 ? pathParts[previewIndex + 1] : undefined;
const config = slug ? (previewConfigs[slug] ?? siteConfig) : siteConfig;

document.title = `${config.name} | Preview webu`;

const description = document.querySelector('meta[name="description"]');
if (description) {
  description.setAttribute("content", config.seo.description);
}

const root = document.getElementById("root");

if (!root) {
  throw new Error("Missing root element");
}

createRoot(root).render(
  <StrictMode>
    <SitePage config={config} />
  </StrictMode>,
);

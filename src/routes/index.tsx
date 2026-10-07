import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import websiteHtml from "../../index.html?raw";
import { initializeWebsite } from "../../js/script.js";

const imageUrls = import.meta.glob<string>("../../images/*.jpg", { eager: true, query: "?url", import: "default" });
const body = websiteHtml.split("<body>")[1]?.split('<script type="module"')[0] ?? "";
const renderedHtml = body.replace(/src="images\/([^\"]+)"/g, (_match, filename: string) => {
  const imageUrl = imageUrls[`../../images/${filename}`];
  return `src="${imageUrl ?? ''}"`;
});
const title = "MP Snacks & Bites | Hot Snacks & Chai in Yercaud";
const description = "MP Snacks & Bites in Yercaud serves fresh bajji, Maggie, sweet corn, bread omelette, onion pakoda, tea, coffee, chilli cauliflower and our special Mudavattu Kilangu Soup.";
export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
});
function Index() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => { if (root.current) return initializeWebsite(root.current); }, []);
  return <div ref={root} dangerouslySetInnerHTML={{ __html: renderedHtml }} />;
}

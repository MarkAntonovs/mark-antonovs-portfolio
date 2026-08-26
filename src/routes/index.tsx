import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Work } from "@/components/site/Work";
import { About } from "@/components/site/About";
import { Capabilities } from "@/components/site/Capabilities";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Mark Antonovs — Web Developer & Digital Product Builder";
const description =
  "Mark Antonovs is a web developer in Jönköping, Sweden, building business websites, responsive frontends and information-heavy digital products.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Work />
        <About />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

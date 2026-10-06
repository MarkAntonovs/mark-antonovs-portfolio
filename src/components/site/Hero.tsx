import { CONTACT } from "./data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36 lg:pt-44">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <p className="eyebrow flex items-center gap-3">
              <span className="h-2 w-2 bg-primary" aria-hidden />
              Web designer &amp; developer · Jönköping
            </p>
            <h1 className="mt-7 text-[3.15rem] leading-[0.98] sm:text-7xl lg:text-[5.25rem]">
              Websites built around
              <br className="hidden sm:block" />{" "}
              <span className="italic text-primary">real businesses.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm Marks Antonovs. I design and build production websites for businesses and
              independent digital products — from focused company sites to information-heavy
              comparison platforms.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex h-12 items-center rounded-sm bg-foreground px-7 text-sm tracking-wide text-background transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-primary"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center rounded-sm border border-foreground/25 px-7 text-sm tracking-wide transition-[border-color,color,transform] hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-4">
            <figure className="relative">
              <div
                className="absolute -right-4 -bottom-4 h-36 w-36 bg-primary sm:-right-5 sm:-bottom-5"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-sm border border-hairline bg-paper-deep">
                <img
                  src="/images/mark-antonovs.jpg"
                  alt="Portrait of Marks Antonovs, web designer and developer based in Jönköping, Sweden"
                  width={1000}
                  height={1484}
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <figcaption className="relative mt-5 flex items-center justify-between border-t border-hairline pt-3 text-xs tracking-wide text-muted-foreground">
                <span>Marks Antonovs</span>
                <span>{CONTACT.location}</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-24 grid gap-5 border-t border-hairline py-7 text-xs tracking-[0.14em] text-muted-foreground uppercase sm:grid-cols-2 md:mt-32 lg:grid-cols-4">
          <span>01 · Business websites</span>
          <span>02 · Digital products</span>
          <span>03 · Responsive development</span>
          <span>04 · Information architecture</span>
        </div>
      </div>
    </section>
  );
}

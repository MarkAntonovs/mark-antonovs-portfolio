import { CONTACT } from "./data";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 lg:pt-44">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">Web Developer &amp; Digital Product Builder</p>
            <h1 className="mt-6 text-[2.75rem] leading-[1.04] sm:text-6xl lg:text-[4.6rem]">
              Websites built around
              <br className="hidden sm:block" /> real businesses.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm Mark Antonovs, a web developer based in {CONTACT.location}. I build modern
              business websites and independent digital products — from information-heavy
              comparison platforms to clear, well-structured company sites.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex h-12 items-center rounded-sm bg-foreground px-7 text-sm tracking-wide text-background transition-opacity hover:opacity-85"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center rounded-sm border border-foreground/20 px-7 text-sm tracking-wide transition-colors hover:border-foreground/50"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="relative">
              <div className="overflow-hidden rounded-sm bg-paper-deep">
                <img
                  src="/images/mark-antonovs.jpg"
                  alt="Portrait of Mark Antonovs, web developer based in Jönköping, Sweden"
                  width={1000}
                  height={1484}
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between border-t border-hairline pt-3 text-xs tracking-wide text-muted-foreground">
                <span>Mark Antonovs</span>
                <span>{CONTACT.location}</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap gap-x-10 gap-y-3 border-t border-hairline pt-6 text-xs tracking-[0.14em] text-muted-foreground uppercase md:mt-28">
          <span>Business websites</span>
          <span>Digital products</span>
          <span>Responsive development</span>
          <span>Information-heavy platforms</span>
        </div>
      </div>
    </section>
  );
}

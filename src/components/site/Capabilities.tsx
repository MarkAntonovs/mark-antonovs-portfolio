import { Reveal } from "./Reveal";
import { CAPABILITIES, TECH } from "./data";

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Capabilities</p>
            <h2 className="mt-5 text-4xl leading-[1.1]">What I do</h2>
          </Reveal>

          <div className="lg:col-span-8">
            <ul className="border-t border-hairline">
              {CAPABILITIES.map((c, i) => (
                <Reveal
                  as="li"
                  key={c.title}
                  delay={i * 50}
                  className="group flex flex-col gap-3 border-b border-hairline py-7 sm:grid sm:grid-cols-[2rem_1fr_1fr] sm:items-baseline sm:gap-8"
                >
                  <span className="text-xs tracking-[0.16em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl transition-colors group-hover:text-primary sm:text-2xl">
                    {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-right">
                    {c.body}
                  </p>
                </Reveal>
              ))}
            </ul>

            <Reveal className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="eyebrow">Tools</span>
              {TECH.map((t) => (
                <span key={t} className="text-sm text-muted-foreground">
                  {t}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

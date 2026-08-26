import { Reveal } from "./Reveal";
import { CONTACT } from "./data";

export function About() {
  return (
    <section id="about" className="border-y border-hairline bg-paper-deep/60 py-24 md:py-36">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">About</p>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-8">
            <p className="max-w-3xl text-2xl leading-[1.45] sm:text-[1.75rem]">
              I'm a web developer based in {CONTACT.location}, building business websites and
              independent digital products.
            </p>
            <div className="mt-8 grid max-w-3xl gap-6 text-base leading-relaxed text-muted-foreground sm:grid-cols-2">
              <p>
                Most of my work sits somewhere between design and development: figuring out how
                information should be structured, then building the interface that carries it.
                I care about pages that load fast, read well and hold up on a phone.
              </p>
              <p>
                I work directly with the people behind a business, keep the process simple and
                stay involved through launch. If a project needs a specific structure rather than
                a template, that's usually where I'm most useful.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

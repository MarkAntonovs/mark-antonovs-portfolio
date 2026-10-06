import { Reveal } from "./Reveal";
import { CONTACT } from "./data";

export function About() {
  return (
    <section id="about" className="bg-foreground py-24 text-background md:py-36">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow !text-background/55">About</p>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-8">
            <p className="max-w-3xl font-display text-3xl leading-[1.3] sm:text-[2.15rem]">
              I'm a web developer based in {CONTACT.location}, building business websites and
              independent digital products.
            </p>
            <div className="mt-10 grid max-w-3xl gap-8 border-t border-background/20 pt-8 text-base leading-relaxed text-background/65 sm:grid-cols-2">
              <p>
                Most of my work sits somewhere between design and development: figuring out how
                information should be structured, then building the interface that carries it. I
                care about pages that load fast, read well and hold up on a phone.
              </p>
              <p>
                I work directly with the people behind a business, keep the process simple and stay
                involved through launch. If a project needs a specific structure rather than a
                template, that's usually where I'm most useful.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

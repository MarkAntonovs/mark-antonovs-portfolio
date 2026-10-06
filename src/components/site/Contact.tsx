import { Reveal } from "./Reveal";
import { CONTACT } from "./data";

const ITEMS = [
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: "LinkedIn", value: "marks-antonovs", href: CONTACT.linkedin },
  { label: "GitHub", value: "MarkAntonovs", href: CONTACT.github },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-hairline bg-paper-deep py-24 md:py-36">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-6xl lg:text-8xl">
            Have something in mind?
          </h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tell me about the business and what the site needs to do. I'll reply with an honest view
            of scope, timeline and whether I'm the right person for it.
          </p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-10 inline-flex h-12 items-center rounded-sm bg-foreground px-7 text-sm tracking-wide text-background transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-primary"
          >
            {CONTACT.email}
          </a>
        </Reveal>

        <div className="mt-16 grid border-t border-hairline sm:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.label} delay={i * 70}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                className={`group flex h-full flex-col gap-3 border-b border-hairline py-7 transition-colors hover:text-primary sm:px-6 sm:first:pl-0 ${
                  i > 0 ? "sm:border-l" : ""
                }`}
              >
                <span className="eyebrow">{item.label}</span>
                <span className="truncate text-sm">
                  {item.value}{" "}
                  <span
                    aria-hidden
                    className="inline-block transition-transform group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { BrowserFrame } from "./BrowserFrame";
import { Reveal } from "./Reveal";
import { FEATURED, OTHER, type Project } from "./data";

function VisitLink({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      className="group inline-flex items-center gap-2 border-b border-foreground/25 pb-1 text-sm tracking-wide transition-colors hover:border-primary hover:text-primary"
    >
      Visit live site
      <span aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
        ↗
      </span>
    </a>
  );
}

function FeaturedProject({
  project,
  index,
  flip,
}: {
  project: Project;
  index: number;
  flip?: boolean;
}) {
  return (
    <Reveal as="article" className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-14">
      <div className={`lg:col-span-8 ${flip ? "lg:order-2" : ""}`}>
        <BrowserFrame
          src={project.image}
          alt={`Screenshot of the ${project.name} website`}
          domain={project.domain}
          priority={index === 0}
        />
      </div>
      <div className={`lg:col-span-4 ${flip ? "lg:order-1" : ""}`}>
        <span className="eyebrow">{String(index + 1).padStart(2, "0")} — Featured</span>
        <h3 className="mt-4 text-3xl sm:text-4xl">{project.name}</h3>
        <p className="mt-2 text-sm text-primary">{project.category}</p>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-7">
          <VisitLink url={project.url} />
        </div>
      </div>
    </Reveal>
  );
}

function SecondaryProject({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal as="article" delay={delay} className="flex flex-col">
      <BrowserFrame
        src={project.image}
        alt={`Screenshot of the ${project.name} website`}
        domain={project.domain}
      />
      <h3 className="mt-6 text-2xl">{project.name}</h3>
      <p className="mt-1.5 text-sm text-primary">{project.category}</p>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="mt-5">
        <VisitLink url={project.url} />
      </div>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-5 text-4xl leading-[1.1] sm:text-5xl">
            Live websites and platforms, in production.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-24 md:mt-24 md:space-y-32">
          {FEATURED.map((p, i) => (
            <FeaturedProject key={p.name} project={p} index={i} flip={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-24 border-t border-hairline pt-16 md:mt-32 md:pt-20">
          <Reveal>
            <p className="eyebrow">Also built</p>
          </Reveal>
          <div className="mt-12 grid gap-14 md:grid-cols-2 md:gap-x-12 md:gap-y-20">
            {OTHER.map((p, i) => (
              <SecondaryProject key={p.name} project={p} delay={(i % 2) * 80} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

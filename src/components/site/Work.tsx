import { BrowserFrame } from "./BrowserFrame";
import { Reveal } from "./Reveal";
import { PROJECTS, type Project } from "./data";

function VisitLink({ url, domain }: { url: string; domain: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      className="group inline-flex items-center gap-2 border-b border-foreground/25 pb-1 text-sm tracking-wide transition-colors hover:border-primary hover:text-primary"
    >
      Visit {domain}
      <span
        aria-hidden
        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      >
        ↗
      </span>
    </a>
  );
}

function ProjectEntry({
  project,
  index,
  flip,
}: {
  project: Project;
  index: number;
  flip?: boolean;
}) {
  return (
    <Reveal
      as="article"
      className="grid gap-9 border-t border-hairline pt-10 md:pt-14 lg:grid-cols-12 lg:items-center lg:gap-16"
    >
      <div className={`lg:col-span-8 ${flip ? "lg:order-2" : ""}`}>
        <BrowserFrame
          src={project.image}
          alt={`Screenshot of the ${project.name} website`}
          domain={project.domain}
          priority={index === 0}
        />
      </div>
      <div className={`lg:col-span-4 ${flip ? "lg:order-1" : ""}`}>
        <span className="eyebrow">Project {String(index + 1).padStart(2, "0")}</span>
        <h3 className="mt-5 text-4xl sm:text-5xl lg:text-[3.35rem]">{project.name}</h3>
        <p className="mt-3 text-sm font-medium text-primary">{project.category}</p>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-7">
          <VisitLink url={project.url} domain={project.domain} />
        </div>
      </div>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="border-t border-hairline bg-paper-deep/45 py-24 md:py-36">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <Reveal className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-9">
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-5 max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              Live websites and digital products in production.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground md:col-span-3 md:text-right">
            Seven projects. One standard of care, from structure through launch.
          </p>
        </Reveal>

        <div className="mt-16 space-y-24 md:mt-24 md:space-y-32 lg:space-y-36">
          {PROJECTS.map((project, index) => (
            <ProjectEntry
              key={project.name}
              project={project}
              index={index}
              flip={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

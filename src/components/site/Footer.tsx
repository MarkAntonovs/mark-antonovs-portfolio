import { CONTACT } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-hairline py-10">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-6 text-xs tracking-wide text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <span>© {new Date().getFullYear()} Mark Antonovs — {CONTACT.location}</span>
        <div className="flex gap-6">
          <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-foreground">
            Email
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

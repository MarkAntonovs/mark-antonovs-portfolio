export function BrowserFrame({
  src,
  alt,
  domain,
  priority = false,
}: {
  src: string;
  alt: string;
  domain: string;
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-md border border-hairline bg-card shadow-[0_24px_60px_-32px_rgba(20,24,40,0.35)]">
      <div className="flex items-center gap-3 border-b border-hairline bg-paper-deep/70 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-hairline" />
          <span className="h-2 w-2 rounded-full bg-hairline" />
          <span className="h-2 w-2 rounded-full bg-hairline" />
        </div>
        <div className="mx-auto max-w-[70%] truncate rounded-sm bg-background px-3 py-1 text-[11px] tracking-wide text-muted-foreground">
          {domain}
        </div>
      </div>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="block w-full"
      />
    </div>
  );
}

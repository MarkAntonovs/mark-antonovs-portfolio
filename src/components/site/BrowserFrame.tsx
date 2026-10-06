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
    <div className="group/frame overflow-hidden rounded-sm border border-hairline bg-card shadow-[0_28px_70px_-40px_rgba(20,18,16,0.5)] transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-[0_34px_80px_-38px_rgba(20,18,16,0.58)]">
      <div className="flex items-center gap-3 border-b border-hairline bg-paper-deep/75 px-4 py-2.5">
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
        width={1600}
        height={1000}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="block w-full transition-transform duration-700 ease-out group-hover/frame:scale-[1.012]"
      />
    </div>
  );
}

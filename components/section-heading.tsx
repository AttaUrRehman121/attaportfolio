type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-200/90">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold text-slate-50 md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-lg leading-relaxed text-slate-300/90">
          {description}
        </p>
      ) : null}
    </div>
  );
}

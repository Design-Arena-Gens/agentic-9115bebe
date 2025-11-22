type PromptCardProps = {
  title: string;
  description: string;
  cues: ReadonlyArray<string>;
  accent?: "aurora" | "fuchsia" | "cyan";
};

const accentPalette: Record<NonNullable<PromptCardProps["accent"]>, string> = {
  aurora: "from-aurora-500/20 via-aurora-400/10 to-aurora-300/10 border-aurora-300/30",
  fuchsia: "from-fuchsia-500/20 via-pink-400/10 to-fuchsia-500/10 border-fuchsia-300/20",
  cyan: "from-cyan-500/20 via-sky-400/10 to-cyan-400/10 border-cyan-300/20"
};

export default function PromptCard({
  title,
  description,
  cues,
  accent = "aurora"
}: PromptCardProps) {
  const accentClass = accentPalette[accent] ?? accentPalette.aurora;

  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-gradient-to-br p-6 text-slate-100 transition hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(32,64,145,0.35)] ${accentClass}`}
    >
      <div className="relative">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-200/80">{description}</p>
      </div>
      <ul className="mt-4 grid gap-2 text-sm">
        {cues.map((cue) => (
          <li key={cue} className="flex items-start gap-3 rounded-xl bg-white/5 p-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-white/60" />
            <span className="leading-relaxed text-slate-100/90">{cue}</span>
          </li>
        ))}
      </ul>
      <div className="pointer-events-none absolute -bottom-14 right-6 h-28 w-28 rounded-full bg-white/10 blur-3xl transition group-hover:-bottom-8 group-hover:blur-[70px]" />
    </article>
  );
}

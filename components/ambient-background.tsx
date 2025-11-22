import { memo } from "react";

type AmbientBackgroundProps = {
  variant?: "dawn" | "dusk" | "midnight";
};

const gradientMap: Record<NonNullable<AmbientBackgroundProps["variant"]>, string> = {
  dawn: "from-aurora-500/40 via-purple-500/30 to-cyan-500/40",
  dusk: "from-purple-900/50 via-aurora-700/30 to-fuchsia-700/40",
  midnight: "from-slate-900/60 via-blue-900/50 to-black/60"
};

function AmbientBackground({ variant = "dawn" }: AmbientBackgroundProps) {
  const gradientClass = gradientMap[variant] ?? gradientMap.dawn;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`} />
      <div className="absolute -left-32 top-12 h-72 w-72 rounded-full bg-aurora-300/20 blur-3xl" />
      <div className="absolute bottom-16 right-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="absolute bottom-10 left-24 h-60 w-60 rounded-full bg-fuchsia-400/20 blur-[100px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
    </div>
  );
}

export default memo(AmbientBackground);

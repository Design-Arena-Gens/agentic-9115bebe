import { useMemo } from "react";

export type MoodKey = "calm" | "energized" | "reflective";

export type Mood = {
  key: MoodKey;
  label: string;
  description: string;
  affirmations: string[];
};

type MoodSelectorProps = {
  activeMood: MoodKey;
  moods: Mood[];
  onMoodChange: (key: MoodKey) => void;
};

export default function MoodSelector({ activeMood, moods, onMoodChange }: MoodSelectorProps) {
  const activeAffirmations = useMemo(
    () => moods.find((mood) => mood.key === activeMood)?.affirmations ?? [],
    [activeMood, moods]
  );

  return (
    <section className="glass relative overflow-hidden rounded-3xl p-6 backdrop-blur-md">
      <div className="absolute -top-40 -right-28 h-72 w-72 rounded-full bg-aurora-400/20 blur-3xl" />
      <div className="relative">
        <span className="text-sm uppercase tracking-[0.35em] text-slate-300/80">Mood Dial</span>
        <h2 className="mt-2 text-2xl font-semibold text-white">How do you feel right now?</h2>
        <p className="mt-2 max-w-xl text-sm text-slate-300/80">
          Pick the signal that resonates. We will adapt the soundscape, tempo, and prompts to
          harmonize with your present state.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {moods.map((mood) => {
            const isActive = mood.key === activeMood;
            return (
              <button
                key={mood.key}
                type="button"
                onClick={() => onMoodChange(mood.key)}
                className={`group relative flex-1 min-w-[140px] rounded-2xl border px-4 py-3 text-left transition focus:outline-none focus:ring-2 focus:ring-aurora-300/70 sm:flex-none ${
                  isActive
                    ? "border-aurora-300/70 bg-aurora-500/20 text-white shadow-[0_12px_40px_rgba(65,130,255,0.25)]"
                    : "border-white/10 bg-white/5 text-slate-200 hover:border-aurora-200/60 hover:bg-aurora-500/10"
                }`}
              >
                <span className="text-base font-semibold">{mood.label}</span>
                <p className="mt-1 text-xs leading-5 text-slate-200/80">{mood.description}</p>
              </button>
            );
          })}
        </div>
        <div className="mt-6 grid gap-3 text-sm text-slate-200">
          {activeAffirmations.map((affirmation, index) => (
            <p
              key={affirmation}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 leading-relaxed"
            >
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-aurora-200">
                {index + 1}
              </span>
              <span>{affirmation}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

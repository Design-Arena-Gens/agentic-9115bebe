"use client";

import { useMemo, useState } from "react";
import AmbientBackground from "../components/ambient-background";
import MoodSelector, { type Mood, type MoodKey } from "../components/mood-selector";
import PromptCard from "../components/prompt-card";

const moods: Mood[] = [
  {
    key: "calm",
    label: "Calm",
    description: "You crave gentle expansion without rocking the waters.",
    affirmations: [
      "Your breath is an anchor—steady, rhythmic, reliable.",
      "Small ripples can carry you toward vast new horizons.",
      "You can move slowly and still move meaningfully."
    ]
  },
  {
    key: "energized",
    label: "Energized",
    description: "You are ready to channel momentum into something vivid.",
    affirmations: [
      "Focus is fuel; your clarity transforms sparks into auroras.",
      "Your enthusiasm is contagious—let it illuminate the room.",
      "Every bold note you strike helps others find their tempo."
    ]
  },
  {
    key: "reflective",
    label: "Reflective",
    description: "You wish to translate observations into insight.",
    affirmations: [
      "Questions are doorways; you are brave for opening them.",
      "Stillness can be a studio where breakthroughs quietly emerge.",
      "You already hold the wisdom you are seeking."
    ]
  }
];

const journeyStages = [
  {
    title: "Arrive",
    subtitle: "Ground, notice, attune",
    description:
      "Let the soundbed and breath pacing ease you into presence. Observe the textures of your current state without judgment.",
    cues: [
      "Three cycles of 4-4-6 breathing before exploring anything else.",
      "Name the dominant feeling in a single word and let it rest on the page.",
      "Capture one physical sensation that stands out right now."
    ],
    accent: "aurora"
  },
  {
    title: "Align",
    subtitle: "Select your harmonic intention",
    description:
      "Choose a focal resonance: a relational note to nurture, a project to shape, or a moment to reframe. Anchor your attention with intention.",
    cues: [
      "Who benefits when this comes into alignment? Write their initials.",
      "What newly aligned outcome would feel like a green light in your body?",
      "Sketch a single sentence mantra that describes being in alignment."
    ],
    accent: "cyan"
  },
  {
    title: "Amplify",
    subtitle: "Translate clarity into motion",
    description:
      "Let rhythm turn insight into kinetic energy. Decide the next micro-step with integrity and commit to honoring it within 24 hours.",
    cues: [
      "List one decision you can make now that removes friction later.",
      "Note a collaborator or ally who can help keep the rhythm steady.",
      "Schedule a 15-minute check-in with yourself to celebrate progress."
    ],
    accent: "fuchsia"
  }
] as const;

const soundscapes: Record<MoodKey, { title: string; subtitle: string; length: string }> = {
  calm: {
    title: "Oceanic Lull",
    subtitle: "Slow tidal swells with gentle piano harmonics",
    length: "12:48"
  },
  energized: {
    title: "Solar Bloom",
    subtitle: "Up-tempo arps layered with radiant percussion",
    length: "09:12"
  },
  reflective: {
    title: "Moonlight Echo",
    subtitle: "Soft synth pads, distant choirs, midnight rain",
    length: "14:06"
  }
};

export default function Page() {
  const [activeMood, setActiveMood] = useState<MoodKey>("calm");

  const activeSoundscape = useMemo(() => soundscapes[activeMood], [activeMood]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <AmbientBackground variant={activeMood === "energized" ? "dusk" : activeMood === "calm" ? "dawn" : "midnight"} />
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-24 sm:px-8 lg:px-10">
        <header className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <div className="absolute inset-y-0 right-0 hidden w-1/3 lg:block">
            <div className="absolute inset-6 rounded-[42px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent opacity-90" />
            <div className="absolute bottom-10 right-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-sm text-slate-200">
              <div className="h-10 w-10 rounded-full border border-aurora-300/40 bg-aurora-400/20" />
              <div>
                <p className="font-medium uppercase tracking-[0.3em] text-aurora-100">HJ</p>
                <p className="text-xs text-slate-300/80">Harmonic Journey Lab</p>
              </div>
            </div>
          </div>
          <div className="relative max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-aurora-100">
              Hj • Harmonic Journey
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.15] text-white sm:text-5xl">
              Tune your inner frequency, then orchestrate the next graceful move.
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-200/85">
              Hj is a micro-studio for aligning headspace and heartspace. Follow the three-step ritual—Arrive,
              Align, Amplify—to transform diffuse feelings into confident motion in less than 15 minutes.
            </p>
          </div>
        </header>

        <section id="sound" className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <MoodSelector activeMood={activeMood} moods={moods} onMoodChange={setActiveMood} />
          <aside className="glass relative overflow-hidden rounded-3xl p-6 backdrop-blur-md">
            <div className="absolute -right-16 -top-20 h-60 w-60 rounded-full bg-aurora-300/30 blur-3xl" />
            <div className="relative flex flex-col gap-6">
              <div>
                <span className="text-sm uppercase tracking-[0.35em] text-slate-300/75">Soundbed</span>
                <h3 className="mt-1 text-2xl font-semibold text-white">{activeSoundscape.title}</h3>
                <p className="mt-2 text-sm text-slate-200/75">{activeSoundscape.subtitle}</p>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-5 py-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-aurora-100">Length</p>
                  <p className="text-lg font-semibold text-white">{activeSoundscape.length}</p>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-3 rounded-full border border-aurora-300/40 bg-aurora-400/20 px-5 py-2 text-sm font-semibold text-aurora-50 transition hover:border-aurora-200/60 hover:bg-aurora-400/30 focus:outline-none focus:ring-2 focus:ring-aurora-200/60"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                    ▶
                  </span>
                  Play Preview
                </button>
              </div>
              <ul className="space-y-3 text-sm text-slate-200/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-aurora-200/80" />
                  Optimize focus with spatial audio cues tuned to your mood profile.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-aurora-200/80" />
                  Optional haptic pacing prompts keep breathing steady and intentional.
                </li>
              </ul>
            </div>
          </aside>
        </section>

        <section id="ritual" className="grid gap-6 md:grid-cols-3">
          {journeyStages.map((stage) => (
            <PromptCard
              key={stage.title}
              title={`${stage.title} · ${stage.subtitle}`}
              description={stage.description}
              cues={stage.cues}
              accent={stage.accent}
            />
          ))}
        </section>

        <section id="log" className="glass relative overflow-hidden rounded-3xl p-8 backdrop-blur-md">
          <div className="absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-aurora-300/30 blur-3xl" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-white">Daily resonance check-in</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300/85">
                Track how your internal harmony evolves. Reflect on changes in energy, clarity, and alignment so you
                can celebrate the micro-shifts. Hj keeps a private log stored locally in your browser.
              </p>
            </div>
            <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
              <form className="space-y-4">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-300/70">Current Frequency</span>
                  <input
                    type="text"
                    name="frequency"
                    placeholder="e.g. grounded, restless, radiant..."
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-aurora-200/60 focus:outline-none focus:ring-2 focus:ring-aurora-200/30"
                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-300/70">Micro-action</span>
                  <input
                    type="text"
                    name="microAction"
                    placeholder="Name the next small step you’ll take..."
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-aurora-200/60 focus:outline-none focus:ring-2 focus:ring-aurora-200/30"
                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-300/70">One word intention</span>
                  <input
                    type="text"
                    name="intention"
                    placeholder="Bridge, thrive, soften, glow..."
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-aurora-200/60 focus:outline-none focus:ring-2 focus:ring-aurora-200/30"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-2xl border border-aurora-300/40 bg-aurora-400/20 px-4 py-3 text-sm font-semibold text-aurora-50 transition hover:border-aurora-200/60 hover:bg-aurora-400/30 focus:outline-none focus:ring-2 focus:ring-aurora-200/60"
                >
                  Save Resonance Log
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative z-10 border-t border-white/10 bg-black/60 py-8 text-sm text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hj Studio. All frequencies reserved.</p>
          <div className="flex gap-6">
            <a className="transition hover:text-white" href="#ritual">
              Ritual
            </a>
            <a className="transition hover:text-white" href="#sound">
              Sound
            </a>
            <a className="transition hover:text-white" href="#log">
              Log
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

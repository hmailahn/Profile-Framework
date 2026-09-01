import type { Challenge } from '../../types';

interface ProjectChallengesProps {
  challenges: Challenge[];
}

export default function ProjectChallenges({ challenges }: ProjectChallengesProps) {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
          Strategy
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">Challenges & Solutions</h2>
      </div>
      <div className="space-y-6">
        {challenges.map((item) => (
          <div key={item.challenge} className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="mt-3 flex h-2 w-2 items-center justify-center rounded-full bg-slate-400 dark:bg-slate-500 shrink-0"></span>
              <span className="text-base leading-relaxed text-slate-700 dark:text-slate-200 font-medium xl:text-lg">
                {item.challenge}
              </span>
            </div>
            <div className="flex items-start gap-3 ml-6">
              <span className="mt-3 flex h-1.5 w-1.5 items-center justify-center rounded-full bg-primary-500 dark:bg-primary-400 shrink-0"></span>
              <span className="leading-relaxed text-slate-600 dark:text-slate-400">
                {item.solution}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

interface ProjectOverviewProps {
  detailedDescription: string;
}

export default function ProjectOverview({ detailedDescription }: ProjectOverviewProps) {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
          Overview
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">About this project</h2>
      </div>
      <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 xl:text-lg">
        {detailedDescription}
      </p>
    </section>
  );
}
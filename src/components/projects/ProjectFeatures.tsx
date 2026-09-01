interface ProjectFeaturesProps {
  features: string[];
}

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
          Highlights
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">Key outcomes</h2>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 xl:text-base">
            <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
              ✓
            </span>
            <span className="font-medium">{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

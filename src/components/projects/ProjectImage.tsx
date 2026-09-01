import type { Project } from '../../types';

interface ProjectImageProps {
  project: Project;
}

export default function ProjectImage({ project }: ProjectImageProps) {
  return (
<div className="flex flex-col gap-6 w-fit mx-auto"> 
      <img
        src={project.image}
        alt={project.title}
        // Removed max-w-full to let w-fit handle the sizing logic
        className="h-auto max-h-96 rounded-[1rem] md:rounded-[1.5rem] lg:rounded-[2rem] object-contain shadow-2xl shadow-slate-900/40"
      />
      {/* The dl will now align perfectly with the image edges */}
      <dl className="grid grid-cols-2 gap-4 text-slate-100 px-2">
        <div>
          <dt className="text-xs uppercase tracking-[0.2em] text-slate-300">Status</dt>
          <dd className="mt-2 text-base font-semibold">
            {project.githubUrl ? 'Open Source' : 'Private Build'}
          </dd>
        </div>
      </dl>
    </div>
  );
}
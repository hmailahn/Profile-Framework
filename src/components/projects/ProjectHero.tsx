import { FiExternalLink, FiGithub } from 'react-icons/fi';
import ProjectImage from './ProjectImage';
import type { Project } from '../../types';

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section>
      <div className="relative mx-auto max-w-5xl xl:max-w-[80vw] 4xl:max-w-[70vw] pb-12 pt-10 px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          <div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl xl:text-6xl" style={{ color: 'var(--color-text)' }}>
              {project.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed xl:text-xl" style={{ color: 'var(--color-text-muted)' }}>
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-sm px-4 py-1 text-xs font-semibold uppercase tracking-wide"
                  style={{
                    backgroundColor: 'var(--color-primary-soft)',
                    border: '1px solid var(--color-primary-border)',
                    color: 'var(--color-text)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm px-6 py-3 font-semibold shadow-lg transition hover:-translate-y-0.5"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-text)',
                    boxShadow: '0 10px 30px -12px color-mix(in srgb, var(--color-shadow) 60%, transparent)',
                  }}
                >
                  <FiExternalLink size={18} />
                  View Live Demo
                </a>
              )}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm px-6 py-3 font-semibold transition hover:-translate-y-0.5"
                  style={{
                    color: 'var(--color-text)',
                    border: '1px solid var(--color-primary-border)',
                    backgroundColor: 'color-mix(in srgb, var(--color-primary) 8%, transparent)',
                  }}
                >
                  <FiGithub size={18} />
                  Explore Code
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center gap-2 rounded-sm px-6 py-3 font-semibold"
                  style={{
                    color: 'var(--color-text-muted)',
                    border: '1px solid var(--color-border)',
                    backgroundColor: 'color-mix(in srgb, var(--color-surface) 80%, transparent)',
                  }}
                >
                  <FiGithub size={18} />
                  Private Repository
                </button>
              )}
            </div>
          </div>

          <ProjectImage project={project} />
        </div>
      </div>
    </section>
  );
}
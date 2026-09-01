import { useParams } from 'react-router-dom';
import { projects } from '../data/portfolio';
import {
  ProjectNotFound,
  ProjectHero,
  ProjectOverview,
  ProjectTechnologies,
  ProjectFeatures,
  ProjectChallenges,
} from '../components/projects';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { useScrollToSection } from '../hooks/useScrollToSection';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const scrollToSection = useScrollToSection();

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <div className="min-h-screen relative pt-24 pb-16">

      <div className="relative z-10">
        <div className="mx-auto max-w-5xl xl:max-w-[80vw] 4xl:max-w-[70vw] px-8 sm:px-12 lg:px-16 pt-8">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/', onClick: () => scrollToSection('#home') },
            { label: 'Projects', to: '/', onClick: () => scrollToSection('#projects') },
            { label: project.title, current: true },
          ]}
          className='mb-2'
        />
      </div>
      <ProjectHero project={project} />

      <div className="mx-auto mt-12 flex max-w-5xl xl:max-w-[80vw] 4xl:max-w-[70vw] flex-col gap-12 px-8 sm:px-12 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] border-b border-theme pb-10">
          {project.detailedDescription && (
            <ProjectOverview detailedDescription={project.detailedDescription} />
          )}

          {project.challenges && (
            <ProjectChallenges challenges={project.challenges} />
          )}
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] pb-10">
          {project.technologies && project.technologies.length > 0 && (
            <ProjectTechnologies technologies={project.technologies} />
          )}

          {project.features && project.features.length > 0 && (
            <ProjectFeatures features={project.features} />
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

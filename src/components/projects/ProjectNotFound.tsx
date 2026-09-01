import { Link } from 'react-router-dom';

interface ProjectNotFoundProps {
  className?: string;
}

export default function ProjectNotFound({ className = '' }: ProjectNotFoundProps) {
  return (
    <div className={`min-h-screen flex items-center justify-center ${className}`}>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Project Not Found</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
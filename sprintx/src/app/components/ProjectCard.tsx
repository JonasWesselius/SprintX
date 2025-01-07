import Link from 'next/link';
import { type Project, type CompletedProject } from '../lib/mockData';

interface ProjectCardProps {
  project: Project;
}

function isCompletedProject(project: Project): project is CompletedProject {
  return project.status === "completed";
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/class/student/project/${project.id}`} className="block">
      <div className="p-4 border rounded-lg shadow hover:shadow-md transition-shadow bg-white dark:bg-gray-800">
        <h3 className="font-bold text-lg">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
        <div className="flex gap-2">
          <span className={`px-2 py-1 rounded-full text-sm ${
            project.status === 'completed' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {project.status === 'completed' ? 'Afgerond' : 'In uitvoering'}
          </span>
          {isCompletedProject(project) && (
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {project.grade}%
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

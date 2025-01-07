'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { mockStudents, mockProjects, mockStudentProjects } from '../../../../lib/mockData';
import Link from 'next/link';

interface ProjectCardProps {
  project: typeof mockProjects[keyof typeof mockProjects];
  studentId: number;
}

function ProjectCard({ project, studentId }: ProjectCardProps) {
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
          {project.grade && (
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {project.grade}%
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function StudentPortfolio() {
  const [activeTab, setActiveTab] = useState('current');
  const params = useParams();
  const router = useRouter();
  const studentId = parseInt(params.studentId as string);
  const className = params.className as string;

  const student = mockStudents[className]?.find(s => s.id === studentId);
  const studentProjects = mockStudentProjects[studentId] || [];
  const allProjects = studentProjects.map(projectId => mockProjects[projectId as keyof typeof mockProjects]);

  // Filter projects based on active tab and student's year
  const currentYear = parseInt(className[0]); // Gets the year from class name (e.g., "3tca" -> 3)
  const filteredProjects = allProjects.filter(project => {
    if (activeTab === 'current') {
      return project.yearLevel === currentYear;
    } else {
      return project.yearLevel < currentYear;
    }
  });

  if (!student) {
    return <div>Student niet gevonden</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={() => router.push(`/class/${className}`)}
          className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded transition-colors"
        >
          ← Terug
        </button>
        <h1 className="text-2xl font-bold">{student.name}'s Portfolio</h1>
      </div>
      
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded transition-colors ${
            activeTab === 'current' 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('current')}
        >
          Huidige jaar
        </button>
        <button
          className={`px-4 py-2 rounded transition-colors ${
            activeTab === 'previous' 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('previous')}
        >
          Voorgaande jaren
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project}
              studentId={studentId}
            />
          ))
        ) : (
          <p>Geen projecten gevonden.</p>
        )}
      </div>
    </div>
  );
} 
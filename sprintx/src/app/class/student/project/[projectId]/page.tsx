'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { mockProjects, type Project, type CompletedProject } from '../../../../lib/mockData';
import Tabs from '@/app/components/Tabs';

function isCompletedProject(project: Project): project is CompletedProject {
  return project.status === "completed";
}

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('assignment');
  const projectId = params.projectId as string;

  const projectData = mockProjects[projectId as keyof typeof mockProjects];

  if (!projectData) {
    return <div>Project niet gevonden</div>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Header with back button */}
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={() => router.back()}
          className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded transition-colors"
        >
          ← Terug
        </button>
        <h1 className="text-2xl font-bold">{projectData.title}</h1>
      </div>

      {/* Status and Grade */}
      <div className="flex gap-4 items-center mb-6">
        <span className={`px-3 py-1 rounded-full text-sm ${
          projectData.status === 'completed' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {projectData.status === 'completed' ? 'Afgerond' : 'In uitvoering'}
        </span>
        {isCompletedProject(projectData) && (
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            Cijfer: {projectData.grade}%
          </span>
        )}
      </div>

      {/* Tabs */}
      <Tabs
        tabs={[
          { id: 'assignment', label: 'Opdracht' },
          { id: 'student-work', label: 'Student werk' },
          { id: 'feedback', label: 'Docent feedback' }
        ]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* Content */}
      <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        {activeTab === 'assignment' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Project Omschrijving</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">{projectData.description}</p>
              <h3 className="text-lg font-semibold mb-2">Voorbeeld werk</h3>
              <p>{projectData.exampleWork}</p>
            </div>
          </div>
        )}

        {activeTab === 'student-work' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Student werk</h2>
            <div className="prose dark:prose-invert max-w-none">
              {isCompletedProject(projectData) ? (
                <p>{projectData.studentWork}</p>
              ) : (
                <p className="text-gray-500 italic">Geen werk ingeleverd.</p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'feedback' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Docent Feedback</h2>
            <div className="prose dark:prose-invert max-w-none">
              {isCompletedProject(projectData) ? (
                <>
                  <p>{projectData.teacherFeedback}</p>
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900 rounded">
                    <p className="font-semibold">Eindcijfer: {projectData.grade}%</p>
                  </div>
                </>
              ) : (
                <p className="text-gray-500 italic">Geen feedback geleverd.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
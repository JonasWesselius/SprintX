'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { mockProjects, type Project, type CompletedProject } from '../../../lib/mockData';
import Tabs from '@/app/components/Tabs';

function isCompletedProject(project: Project): project is CompletedProject {
  return project.status === "completed";
}

export default function ProjectPage() {
  const { project } = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('example');

  const projectData = mockProjects[project as keyof typeof mockProjects];

  if (!projectData) {
    return <div>Project niet gevonden</div>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Project Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <button 
            onClick={() => router.back()}
            className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded transition-colors"
          >
            ← Terug
          </button>
          <h1 className="text-2xl font-bold">{projectData.title}</h1>
        </div>
        <div className="flex gap-4 items-center mb-4">
          <span className={`px-3 py-1 rounded-full text-sm ${
            projectData.status === 'completed' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {projectData.status === 'completed' ? 'Completed' : 'In Progress'}
          </span>
          {isCompletedProject(projectData) && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Cijfer: {projectData.grade}%
            </span>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-300">{projectData.description}</p>
      </div>

      {/* Tabs */}
      <Tabs
        tabs={[
          { id: 'example', label: 'Example' },
          { id: 'submission', label: 'Student Work' },
          { id: 'feedback', label: 'Feedback' }
        ]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* Tab Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-6">
        {activeTab === 'example' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Project voorbeeld</h2>
            <div className="prose dark:prose-invert max-w-none">
              {projectData.exampleWork}
            </div>
          </div>
        )}

        {activeTab === 'submission' && (
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
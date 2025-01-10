'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { mockStudents, mockProjects, mockStudentProjects, type ClassName, type StudentId, type Subject } from '../../../../lib/mockData';
import ProjectCard from '@/app/components/ProjectCard';

export default function StudentPortfolio() {
  const [activeTab, setActiveTab] = useState('current');
  const [activeSubject, setActiveSubject] = useState<Subject>('metaal');
  const params = useParams();
  const router = useRouter();
  const studentId = parseInt(params.studentId as string) as StudentId;
  const className = params.className as ClassName;

  const student = mockStudents[className]?.find(s => s.id === studentId);
  const studentProjects = mockStudentProjects[studentId] || [];
  const allProjects = studentProjects.map(projectId => mockProjects[projectId as keyof typeof mockProjects]);

  // Filter projects based on active tab and student's year
  const currentYear = parseInt(className[0]); // Gets the year from class name (e.g., "3tca" -> 3)
  const filteredProjects = allProjects.filter(project => {
    const yearMatches = activeTab === 'current' 
      ? project.yearLevel === currentYear
      : project.yearLevel < currentYear;
    
    return yearMatches && project.subject === activeSubject;
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
        <h1 className="text-2xl font-bold">{student.name}&apos;s Portfolio</h1>
      </div>
      
      <div className="flex gap-4 mb-6">
        {(['metaal', 'hout', 'elektro', 'engineering'] as Subject[]).map(subject => (
          <button
            key={subject}
            className={`px-4 py-2 rounded transition-colors ${
              activeSubject === subject
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
            onClick={() => setActiveSubject(subject)}
          >
            {subject.charAt(0).toUpperCase() + subject.slice(1)}
          </button>
        ))}
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
            />
          ))
        ) : (
          <p>Geen projecten gevonden voor {activeSubject}.</p>
        )}
      </div>
    </div>
  );
} 
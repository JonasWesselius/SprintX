'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Tabs from '@/app/components/Tabs';

interface ProjectsProps {
  studentId: string;
}

function CurrentYearProjects({ studentId }: ProjectsProps) {
  return <div>Current year projects for student {studentId}</div>;
}

function PreviousYearProjects({ studentId }: ProjectsProps) {
  return <div>Previous year projects for student {studentId}</div>;
}

export default function StudentPortfolio() {
  const [activeTab, setActiveTab] = useState('current');
  const { student } = useParams();

  return (
    <div className="container mx-auto p-6">
      <Tabs
        tabs={[
          { id: 'current', label: 'Current Year' },
          { id: 'previous', label: 'Previous Years' }
        ]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeTab === 'current' ? (
          <CurrentYearProjects studentId={student as string} />
        ) : (
          <PreviousYearProjects studentId={student as string} />
        )}
      </div>
    </div>
  );
}
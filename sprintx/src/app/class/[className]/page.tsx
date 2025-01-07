'use client';

import { useParams, useRouter } from 'next/navigation';
import StudentCard from '../../components/StudentCard';
import { mockStudents } from '../../lib/mockData';

export default function ClassPage() {
  const params = useParams();
  const router = useRouter();
  const className = params.className as string;
  const students = mockStudents[className] || [];

  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-4 p-6">
        <button 
          onClick={() => router.push('/')}
          className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded transition-colors"
        >
          ← Terug
        </button>
        <h1 className="text-2xl font-bold">Klas {className}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        {students.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
} 
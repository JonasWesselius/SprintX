'use client';

import { useParams } from 'next/navigation';
import StudentCard from '../components/StudentCard';
import { mockStudents, type ClassName } from '../lib/mockData';

export default function ClassPage() {
  const params = useParams();
  const className = params.className as ClassName;
  const students = mockStudents[className] || [];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        {students.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}
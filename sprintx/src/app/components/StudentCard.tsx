import Link from 'next/link';

interface StudentCardProps {
  student: {
    id: number;
    name: string;
    class: string;
    yearStarted: number;
  };
}

export default function StudentCard({ student }: StudentCardProps) {
  return (
    <Link href={`/class/${student.class}/student/${student.id}`}>
      <div className="p-4 border rounded-lg shadow hover:shadow-md transition-shadow bg-white dark:bg-gray-800">
        <h3 className="font-bold text-lg">{student.name}</h3>
        <p className="text-gray-600 dark:text-gray-300">Klas: {student.class}</p>
        <p className="text-gray-600 dark:text-gray-300">Begonnen in: {student.yearStarted}</p>
      </div>
    </Link>
  );
}

import { db } from './db';
import { eq } from 'drizzle-orm';
import { students, projects, studentProjects } from './schema';

// Get all students in a class
export async function getStudentsByClass(className: string) {
  const result = await db
    .select()
    .from(students)
    .leftJoin(studentProjects, eq(students.id, studentProjects.studentId))
    .leftJoin(projects, eq(studentProjects.projectId, projects.id))
    .where(eq(students.class, className));
  
  return result;
}

// Get a specific project with details
export async function getProjectDetails(projectId: number) {
  const result = await db
    .select()
    .from(projects)
    .leftJoin(studentProjects, eq(projects.id, studentProjects.projectId))
    .leftJoin(students, eq(studentProjects.studentId, students.id))
    .where(eq(projects.id, projectId));
  
  return result;
}

// Create a new student
export async function createStudent(data: {
  name: string;
  class: string;
  yearStarted: number;
}) {
  return await db
    .insert(students)
    .values(data)
    .returning();
} 
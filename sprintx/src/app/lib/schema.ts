import { pgTable, serial, text, integer, timestamp, real } from 'drizzle-orm/pg-core';

export const students = pgTable('students', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  class: text('class').notNull(),
  yearStarted: integer('year_started').notNull()
});

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  exampleWork: text('example_work').notNull(),
  yearLevel: integer('year_level').notNull()
});

export const studentProjects = pgTable('student_projects', {
  id: serial('id').primaryKey(),
  studentId: integer('student_id').references(() => students.id),
  projectId: integer('project_id').references(() => projects.id),
  status: text('status').notNull(), // 'completed' or 'in_progress'
  grade: real('grade'),
  feedback: text('feedback'),
  studentWork: text('student_work'),
  submittedAt: timestamp('submitted_at')
}); 
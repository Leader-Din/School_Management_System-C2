// Department.ts

import { Teacher } from "./Teacher";
export class Department {
  private teachers: Teacher[] = [];

  constructor(private name: string) {}

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  getTeachers(): Teacher[] {
    return [...this.teachers];
  }

  getName(): string {
    return this.name;
  }
}

// Admin.ts
import { User } from "./User";
import { Subject } from "./Subject";
import { Teacher } from "./Teacher";

export class Admin extends User {
  private subjects: Subject[] = [];
  private teachers: Teacher[] = [];

  constructor(
    userId: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string
  ) {
    super(userId, firstName, lastName, email, password, phone);
  }

  addSubject(subject: Subject): void {
    this.subjects.push(subject);
    console.log(`Subject ${subject.getCodeSubject()} added by ${this.getFullName()}.`);
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
    console.log(`Teacher ${teacher.getFullName()} added by ${this.getFullName()}.`);
  }

  getSubjects(): Subject[] {
    return [...this.subjects];
  }

  getTeachers(): Teacher[] {
    return [...this.teachers];
  }
}
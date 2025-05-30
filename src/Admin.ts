import type { Subject } from "./Subject";
import { User } from "./User";
import type { Teacher } from "./Teacher";

class Admin extends User{
    subjects: Subject[] = [];
  teachers: Teacher[] = [];

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

  assignSubjectToStudents(subject: Subject): void {
    this.subjects.push(subject);
  }

  assignTeacherToStudents(teacher: Teacher): void {
    this.teachers.push(teacher);
  }
}

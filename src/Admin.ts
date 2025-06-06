// Admin.ts

import { User } from "./User";
import { Subject } from "./Subject";
import { Teacher } from "./Teacher";
import { Student } from "./Student";

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

  assignSubjectToStudents(subject: Subject, student: Student): void {
    console.log(`Subject ${subject.getCodeSubject()} assigned to ${student.getFullName()} by ${this.getFullName()}.`);
  }

  assignTeacherToStudents(teacher: Teacher, student: Student): void {
    console.log(`Teacher ${teacher.getFullName()} assigned to ${student.getFullName()} by ${this.getFullName()}.`);
  }

  addStudentReport(studentExamReport: StudentExamReport): void {
    studentExamReport.showFullReport();
  }

  viewAllTeachers(): Teacher[] {
    return [...this.teachers];
  }

  viewAllSubjects(): Subject[] {
    return [...this.subjects];
  }
}

// SchoolManagementSystem.ts
export class SchoolManagementSystem {
  constructor(
    private name: string,
    private address: string,
    private contact: string,
    private schoolID: string
  ) {}

  public viewSchoolDetails(): string {
    return `School Name: ${this.name}, Address: ${this.address}, Contact: ${this.contact}, School ID: ${this.schoolID}`;
  }

  public viewSchoolID(): string {
    return this.schoolID;
  }
}
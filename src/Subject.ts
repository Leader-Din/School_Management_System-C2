// Subject.ts

import { Teacher } from "./Teacher";
export class Subject {
  constructor(
    private subjectID: number,
    private codeSubject: string,
    private teachers: Teacher[]
  ) {}

  public updateSubject(subjectID: number, codeSubject: string, teachers: Teacher[]): void {
    this.subjectID = subjectID;
    this.codeSubject = codeSubject;
    this.teachers = teachers;
  }

  public addSubject(subjectID: number, codeSubject: string, teacher: Teacher): void {
    this.subjectID = subjectID;
    this.codeSubject = codeSubject;
    this.teachers.push(teacher);
  }

  public getSubjectID(): number {
    return this.subjectID;
  }

  public getCodeSubject(): string {
    return this.codeSubject;
  }

  public getTeachers(): Teacher[] {
    return [...this.teachers];
  }
}
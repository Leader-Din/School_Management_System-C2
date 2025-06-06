// Assignment.ts

import { StudyMaterial } from "./StudyMaterial";
export class Assignment {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public dueDate: Date,
    public subjectCode: string
  ) {}

  getDetails(): string {
    return `Assignment: ${this.title} (${this.subjectCode}) - Due on ${this.dueDate.toDateString()}`;
  }

  public uploadStudyMaterial(title: string, content: string[]): StudyMaterial {
    return new StudyMaterial(title, content);
  }
}

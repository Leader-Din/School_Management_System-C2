// Assignment.ts
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
}
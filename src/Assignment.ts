export class Assignment {
    id: number;
    title: string;
    description: string;
    dueDate: Date;
    subjectCode: string;

    constructor(id: number, title: string, description: string, dueDate: Date, subjectCode: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.subjectCode = subjectCode;
    }

    // Optional: method to show assignment details
    getDetails(): string {
        return `Assignment: ${this.title} (${this.subjectCode}) - Due on ${this.dueDate.toDateString()}`;
    }
}

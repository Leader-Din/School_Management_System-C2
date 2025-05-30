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
}

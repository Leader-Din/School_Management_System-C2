import { Teacher } from "./Teacher";

export class Subject {
    constructor(
        private subjectID: number,
        public name: string,
        private codeSubject: string,
        private teachers: Teacher[]
    ) {}

    public updateSubject(subjectID: number, name: string, codeSubject: string, teachers: Teacher[]): void {
        this.subjectID = subjectID;
        this.name = name;
        this.codeSubject = codeSubject;
        this.teachers = teachers;
    }
}

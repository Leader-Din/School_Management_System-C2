import type { Teacher } from "./Teacher";
export class Department {
        teachers: Teacher[] = [];

    constructor(private name: string) {
        this.name = name;
    }
    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }
}
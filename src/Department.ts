import type { Teacher } from "./Teacher";
export class Department {
        teachers: Teacher[] = [];

    constructor(private name: string) {
        this.name = name;
    }
    addTeacher(p0: string, teacher: Teacher): void {
        this.teachers.push(teacher);
    }
}
import type { Teacher } from "./Teacher";
export class Department {
        teachers: Teacher[] = [];

    constructor(private departmentName: string[]) {
        this.departmentName = departmentName;
    }
    
    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }
}
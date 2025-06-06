import { Assignment } from "./Assignment";
import { Grade } from "./Grade";
import { Student } from "./Student";
import { StudyMaterial } from "./StudyMaterial";
import { Teacher } from "./Teacher";

export class Classroom {
    private studyMaterials: StudyMaterial[] = [];
    private assignments: Assignment[] = [];
    private grades: Grade[] = [];
    private teachers: Teacher[] = [];
    private students: Student[] = [];

    constructor(private name: string) {}

    public getName(): string {
        return this.name;
    }

    public addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }

    public addStudent(student: Student): void {
        this.students.push(student);
    }

    public getStudents(): Student[] {
        return this.students;
    }

    public getTeachers(): Teacher[] {
        return this.teachers;
    }

    public getAssignments(): Assignment[] {
        return this.assignments;
    }

    public getStudyMaterials(): StudyMaterial[] {
        return this.studyMaterials;
    }

    public getGrades(): Grade[] {
        return this.grades;
    }

    public downloadStudyMaterial(studyMaterial: StudyMaterial): StudyMaterial {
        const found = this.studyMaterials.find(
            (sm) => sm.title === studyMaterial.title
        );
        if (found) {
            console.log(`Downloading study material "${found.title}" from classroom "${this.name}".`);
            return found;
        } else {
            throw new Error("Study material not found.");
        }
    }

}

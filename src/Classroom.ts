// Classroom.ts
import { StudyMaterial } from "./StudyMaterial";
import { Assignment } from "./Assignment";
import { Grade } from "./Grade";
import { Teacher } from "./Teacher";
import { Student } from "./Student";

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

  public downloadStudyMaterial(studyMaterial: StudyMaterial): StudyMaterial {
    const found = this.studyMaterials.find((sm) => sm.title === studyMaterial.title);
    if (found) {
      console.log(`Downloading study material "${found.title}" from classroom "${this.name}".`);
      return found;
    } else {
      throw "Study material not found.";
    }
  }

  public addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  public addStudent(student: Student): void {
    this.students.push(student);
  }

  public addAssignment(assignment: Assignment): void {
    this.assignments.push(assignment);
  }

  public addGrade(grade: Grade): void {
    this.grades.push(grade);
  }

  public addStudyMaterial(material: StudyMaterial): void {
    this.studyMaterials.push(material);
  }

  public getStudents(): Student[] {
    return [...this.students];
  }

  public getTeachers(): Teacher[] {
    return [...this.teachers];
  }

  public getAssignments(): Assignment[] {
    return [...this.assignments];
  }

  public getStudyMaterials(): StudyMaterial[] {
    return [...this.studyMaterials];
  }

  public getGrades(): Grade[] {
    return [...this.grades];
  }
}
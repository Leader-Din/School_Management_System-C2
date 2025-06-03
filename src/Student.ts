// Student.ts
import { GoogleClassroom } from "./GoogleClassroom";
import { TimeTable } from "./TimeTable";
import { User } from "./User";
import { Assignment } from "./Assignment";
import { Classroom } from "./Classroom";
import { StudyMaterial } from "./StudyMaterial";
import { Exam } from "./Exam";
import { Grade } from "./Grade";

export class Student extends User {
  private submittedAssignments: Assignment[] = [];

  constructor(
    userId: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    private timetable: TimeTable,
    private googleClassroom: GoogleClassroom
  ) {
    super(userId, firstName, lastName, email, password, phone);
  }

  public viewTimetable(): TimeTable {
    return this.timetable;
  }

  public viewExamSchedules(): Exam[] {
    return this.timetable.getExamSchedules();
  }

  public viewStudyMaterials(classroom: Classroom): StudyMaterial[] {
    return classroom.getStudyMaterials();
  }

  public viewAssignments(classroom: Classroom): Assignment[] {
    return classroom.getAssignments();
  }

  public viewAssignmentGrades(classroom: Classroom): Grade[] {
    return classroom.getGrades().filter((grade) => grade.studentID === this.getUserId());
  }

  public submitAssignment(assignment: Assignment, classroom: Classroom): void {
    const exists = classroom.getAssignments().find((a) => a.id === assignment.id);
    if (exists) {
      this.submittedAssignments.push(assignment);
      console.log(`${this.getFullName()} submitted assignment "${assignment.title}" to classroom "${classroom.getName()}".`);
    } else {
      console.log(`Assignment "${assignment.title}" not found in classroom "${classroom.getName()}".`);
    }
  }

  public downloadMaterial(studyMaterial: StudyMaterial, classroom: Classroom): void {
    try {
      const material = classroom.downloadStudyMaterial(studyMaterial);
      console.log(`${this.getFullName()} downloaded "${material.title}" from classroom "${classroom.getName()}".`);
    } catch (error) {
      console.log(`${this.getFullName()} failed to download: ${error}`);
    }
  }
}
// GoogleClassroom.ts
import { Classroom } from "./Classroom";

export class GoogleClassroom {
  private classrooms: Classroom[] = [];

  createClassroom(name: string): Classroom {
    const newClassroom = new Classroom(name);
    this.classrooms.push(newClassroom);
    return newClassroom;
  }

  getAllClassrooms(): Classroom[] {
    return [...this.classrooms];
  }
}
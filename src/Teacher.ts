import type { Department } from "./Department";
import { User } from "./User";
export class Teacher extends User {
    department: Department;
    teachers: any;

  constructor(userId: number, firstName: string, lastName: string, email: string, password: string, phone: string, department: Department) {
    super(userId, firstName, lastName, email, password, phone);
    this.department = department;
    this.department.addTeacher(this);
  }
}
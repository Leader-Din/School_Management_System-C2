import { User } from "./User";
import type { Department } from "./Department";

export class Teacher extends User {
    constructor(
        userId: number,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        phone: string,
        private department: Department
    ) {
        super(userId, firstName, lastName, email, password, phone);
    }
}

import type { GoogleClassroom } from "./GoogleClassroom";
import type { TimeTable } from "./TimeTable";
import { User } from "./User";

class Student extends User{
    constructor (
        userId : number, firstName : string, 
        lastName : string, email : string, 
        password : string, phone : string, 
        private assignments : string[], 
        private timetable : TimeTable,
        private googleClassroom : GoogleClassroom
    ) {
        super(userId, firstName, lastName, email, password, phone);
    }

    public viewTimetable() : TimeTable {
        return this.timetable;
    }

    public viewExamSchedules() : TimeTable {
        return this.timetable;
    }

    public viewStudyMaterial() : GoogleClassroom {
        return this.googleClassroom;
    }

    public viewAssignment() : GoogleClassroom {
        return this.googleClassroom;
    }

    public viewAssignmentGrade() : GoogleClassroom {
        return this.googleClassroom;
    }
}
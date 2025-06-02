import { SchoolManagementSystem } from "./src/SchoolManagementSystem";
import { Exam } from "./src/Exam";
import { Grade } from "./src/Grade";
import { Subject } from "./src/Subject";
import { Teacher } from "./src/Teacher";
import { Room } from "./src/Room";
import { Classroom } from "./src/Classroom";
import { GoogleClassroom } from "./src/GoogleClassroom";
import { Assignment } from "./src/Assignment";
import { StudyMaterial } from "./src/StudyMaterial";
import { Feedback } from "./src/Feedback";
import { Department } from "./src/Department";
import { TimeTable } from "./src/TimeTable";
import { Student } from "./src/Student";

// ___________________________________________________________________GoogleClassroom_______________________________________________________________
// // Create GoogleClassroom instance
// const googleClassroom = new GoogleClassroom();

// // Create classrooms
// googleClassroom.createClassroom("Math");
// googleClassroom.createClassroom("Science");
// googleClassroom.createClassroom("History");

// // Get all classrooms
// const classrooms = googleClassroom.getAllClassrooms();

// for (let i = 0; i < classrooms.length; i++) {
//     const classroom = classrooms[i];
//     if (classroom) { // Check if classroom is defined
//         console.log(`Classroom name: ${classroom.getName()}`);
//     }
// }

// _________________________________________________________________Classroom_____________________________________________________________________



// School
const school = new SchoolManagementSystem("My School", "123 St", "123456789");
console.log(school.viewSchoolDetails());

// Department
const csDept = new Department("Computer Science");

// Teacher
const teacher = new Teacher(1, "Alice", "Doe", "alice@school.com", "pass123", "0987654321", csDept);

// Subject
const subject = new Subject(1, "CS101", [teacher]);

// Exam + Timetable
const room = { name: "Room 101", className: "CS101", classLocation: "First Floor" }; // Room object with all required properties
const exam = new Exam([subject], "CS101", new Date(), room);
const timetable = new TimeTable(new Date(), "Room 101", "CS101", [exam]);

// Student
const assignments = [new Assignment(1, "HW1", "Solve problems 1-5", new Date("2024-06-30"), "CS101")];
const googleClassroom = new GoogleClassroom();
// If Student expects string[] for assignments, extract assignment names or IDs:
const assignmentNames = assignments.map(a => a.title); // or a.id if IDs are expected
const student = new Student(2, "Bob", "Smith", "bob@school.com", "pass123", "0123456789", assignmentNames, timetable, googleClassroom);

// show it on console
console.log(student.viewTimetable());
console.log(student.viewStudyMaterial());
student.login("bob@school.com", "pass123");
student.logout();

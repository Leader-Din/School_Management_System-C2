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
import { Admin } from "./src/Admin";
// School
const school = new SchoolManagementSystem("My School", "123 St", "123456789");
console.log(school.viewSchoolDetails());

// Department
const csDept = new Department("Computer Science");

// Teacher
const teacher = new Teacher(1, "Alice", "Doe", "alice@school.com", "pass123", "0987654321", csDept);
csDept.addTeacher(teacher);

// Subject
const subject = new Subject(1, "CS101", [teacher]);

// Admin
const admin = new Admin(3, "John", "Smith", "john@school.com", "admin123", "1112223333");
admin.addSubject(subject);
admin.addTeacher(teacher);

// Exam + Timetable
const room = new Room("CS101", "First Floor");
const exam = new Exam([subject], "CS101 Midterm", new Date("2025-06-10"), room);
const timetable = new TimeTable(new Date("2025-06-10"), "Room 101", "CS101", [exam]);

// GoogleClassroom and Classroom
const googleClassroom = new GoogleClassroom();
const classroom = googleClassroom.createClassroom("CS101 Classroom");
classroom.addTeacher(teacher);

// Student
const assignment = new Assignment(1, "HW1", "Solve problems 1-5", new Date("2025-06-30"), "CS101");
const student = new Student(
  2,
  "Pheakdy",
  "Din",
  "pheakdy@school.com",
  "pass123",
  "0123456789",
  timetable,
  googleClassroom
);

// Add assignment and study material
teacher.uploadAssignment(classroom, assignment);
const studyMaterial = new StudyMaterial("CS101 Notes", ["Chapter 1: Intro", "Chapter 2: Variables"]);
teacher.uploadStudyMaterial(classroom, studyMaterial);

// Student interactions
console.log(student.viewTimetable());
console.log(student.viewExamSchedules());
console.log(student.viewAssignments(classroom));
console.log(student.viewStudyMaterials(classroom));
student.submitAssignment(assignment, classroom);
student.downloadMaterial(studyMaterial, classroom);

// Grade
const grade = new Grade(assignment.id, student.getUserId(), 85, "Good work!");
teacher.returnGrade(classroom, grade);
console.log(student.viewAssignmentGrades(classroom));

// Feedback
const feedback = new Feedback(subject.getSubjectID());
feedback.addComment("Great course!");
feedback.addRating("5/5");

// Login and Register
student.login("pheakdy@school.com", "pass123");
student.register("Leader", "Din", "leader@school.com", "leader123", "1234567890");
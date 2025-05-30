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



// School
const school = new SchoolManagementSystem("My School", "123 St", "123456789");
console.log(school.viewSchoolDetails());

// Department
const csDept = new Department("Computer Science");

// Teacher
const teacher = new Teacher(1, "Alice", "Doe", "alice@school.com", "pass123", "0987654321", csDept);

// Subject
const subject = new Subject(1, "CS101", [teacher]);
// Grade
const grade1 = new Grade(1, 1001, 92, "Excellent work!");
grade1.showGrade();

// Exam + Timetable
const room = new Room("Room 101"); 
const exam = new Exam([subject], "CS101", new Date(), room);
const timetable = new TimeTable(new Date(), "Room 101", "CS101", [exam]);

// Student
const assignments = [new Assignment(1, "HW1", "Solve problems 1-5", new Date("2024-06-30"), "CS101")];
const googleClassroom = new GoogleClassroom();
// If Student expects string[] for assignments, extract assignment names or IDs:
const assignmentNames = assignments.map(a => a.title); // or a.id if IDs are expected
const student = new Student(1, "Bob", "Smith", "bob@school.com", "pass123", "0123456789", assignmentNames, timetable, googleClassroom);

// Classroom
const classroom = new Classroom("CS101");
// Add teacher and student to classroom
classroom.addTeacher(teacher);
classroom.addStudent(student);
// Teacher uploads assignment and study material
teacher.uploadAssignment(classroom, new Assignment(1, "Project", "Build a web app", new Date("2024-07-15"), "CS101"));
teacher.uploadStudyMaterial(classroom, new StudyMaterial("Lecture Notes", ["Introduction to CS"]));
// Student submits assignment and downloads study material
if (assignments[0]) {
	student.submitAssignment(assignments[0], classroom);
} else {
	console.error("No assignment found to submit.");
}
student.downloadMaterial(new StudyMaterial("Lecture Notes", ["Introduction to CS"]), classroom);
// Teacher returns grade for student
const grade = teacher.returnGrade(classroom, new Grade(1, 2, 100, "Excellent work!")); // Replace "A" with a number, e.g., 1
// Feedback
const feedback = new Feedback(1);
feedback.addCommentToSubject(1, "Great job on the project!");
feedback.addRatingToSubject(1, "A+");
// Show feedback
console.log(`Feedback for Subject ID ${feedback.subjectID}:`);
console.log(`Comment: ${feedback.comment}`);
console.log(`Rating: ${feedback.rating}`);
// Show classroom details
console.log(`Classroom Name: ${classroom.getName()}`);
// Show teachers and students in classroom
console.log("Teachers in Classroom:", classroom.getTeachers().map(t => t.getFullName()));
console.log("Students in Classroom:", classroom.getStudents().map(s => s.getFullName()));
// Show assignments and study materials in classroom
console.log("Assignments in Classroom:", classroom.getAssignments().map(a => a.title));
console.log("Study Materials in Classroom:", classroom.getStudyMaterials().map(sm => sm.title));
// Show grades in classroom
console.log("Grades in Classroom:", classroom.getGrades().map(
  g => `Student ID: ${g.studentID}, Assignment ID: ${g.assignmentID}, Score: ${g.score}, Feedback: ${g.feedback}`
));
// Show teacher details
console.log(`Teacher: ${teacher.getFullName()}`);
// Show teacher's study materials
console.log("Teacher's Study Materials:", teacher.getStudyMaterials().map(sm => sm.title));
// Show teacher's assignments
console.log("Teacher's Assignments:", teacher.getAssignments().map(a => a.title));
// Show teacher's grades
console.log("Teacher's Grades:", teacher.getGrades().map(
  g => `Student ID: ${g.studentID}, Assignment ID: ${g.assignmentID}, Grade: ${g.getLetterGrade()}`
));
// show it on console
console.log(student.viewTimetable());
console.log(student.viewStudyMaterial());
student.login("bob@school.com", "pass123");
student.logout();
console.log(student.viewExamSchedules());
console.log(student.viewAssignment());
console.log(student.viewAssignmentGrade());

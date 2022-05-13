const students = [
  { name: "harry", subject: "javascript" },
  { name: "rohan", subject: "machine learining" },
];

function enrollStudent(student, callback) {
  setTimeout(function () {
    students.push(student);
    console.log("Student has been enrolled");
    callback();
  }, 1000);
}
function getStudents() {
  setTimeout(function () {
    console.log("hi i am here!");
  }, 5000);
}
console.log("hi");
let newStudent = { name: "sunny", subject: "bio" };
enrollStudent(newStudent, getStudents);
getStudents();

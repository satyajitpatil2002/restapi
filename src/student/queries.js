// queries.js
const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1";
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";
const addStudent = "INSERT INTO students(name, email, age, dob) VALUES ($1, $2, $3, $4)";
// Corrected the key name in the export statement
module.exports = {
    getStudents,
    getStudentById,
    checkEmailExists,
    addStudent,  // Corrected the key name to match the query
};

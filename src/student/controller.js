
const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
const addStudent = (req, res) => {
    const { name, email, age, dob } = req.body;

    // Check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("email is already exist.");
        }
        pool.query(
            queries.addStudent,
            [name,email,age,dob],
            (error,results)=>{
                if(error)throw error;
                res.status(201).send("student created successfuly");

            }
        ); 
    });
};
const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);

    // Check if the student exists
    pool.query(queries.getStudentById, [id], (error, results) => {
        if (error) {
            throw error;
        }

        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            // Student not found, send a response
            return res.status(404).send("Student not found in the database. Cannot remove.");
        }

        // Student exists, proceed with removal
        pool.query(queries.removeStudent, [id], (removalError, removalResults) => {
            if (removalError) {
                throw removalError;
            }
            res.status(200).send("Student removed successfully.");
        });
    });
};





module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
};
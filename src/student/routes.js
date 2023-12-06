// routes.js
const express = require('express');
const controller = require('./controller');

const router = express.Router();

// Define routes
router.get('/', controller.getStudents);
router.post('/',controller.addStudent);
router.get('/:id', controller.getStudentById);
router.delete('/:id',controller.removeStudent);



module.exports = router;
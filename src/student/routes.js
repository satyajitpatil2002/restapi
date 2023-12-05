// routes.js
const express = require('express');
const controller = require('./controller');

const router = express.Router();

// Define routes
router.get('/', controller.getStudents);
router.get('/:id', controller.getStudentById);

module.exports = router;
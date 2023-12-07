document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('studentForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const ageInput = document.getElementById('age');
    const dobInput = document.getElementById('dob');
    const studentList = document.getElementById('studentList');

    // Fetch students from the server and render them
    const fetchAndRenderStudents = async () => {
        const response = await fetch('/api/v1/students');
        const students = await response.json();

        studentList.innerHTML = '';
        students.forEach(student => renderStudent(student));
    };

    // Render a student
    const renderStudent = student => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${student.name}</span>
            <span>${student.email}</span>
            <span>${student.age}</span>
            <span>${student.dob}</span>
        `;
        studentList.appendChild(li);
    };

    // Submit form to add a new student
    studentForm.addEventListener('submit', async event => {
        event.preventDefault();
        const name = nameInput.value;
        const email = emailInput.value;
        const age = ageInput.value;
        const dob = dobInput.value;

        await fetch('/api/v1/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, age, dob }),
        });

        // Clear input fields
        nameInput.value = '';
        emailInput.value = '';
        ageInput.value = '';
        dobInput.value = '';

        fetchAndRenderStudents();
    });

    // Initial fetch and render students
    fetchAndRenderStudents();
});

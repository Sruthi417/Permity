document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    const departmentSelect = document.getElementById("department");
    const courseSelect = document.getElementById("course");

    // Course options for each department
    const courses = {
        "cs": ["BCA", "B.Sc CS", "MCA", "M.Sc CS"],
        "it": ["B.Tech IT", "M.Tech IT", "Diploma IT"],
        "ee": ["B.Tech Electrical", "M.Tech Electrical", "Diploma Electrical"],
        "mech": ["B.Tech Mechanical", "M.Tech Mechanical", "Diploma Mechanical"]
    };

    // Update courses when department is selected
    departmentSelect.addEventListener("change", function() {
        const selectedDept = departmentSelect.value;
        courseSelect.innerHTML = '<option value="" disabled selected>Select a Course</option>'; // Reset

        if (selectedDept in courses) {
            courses[selectedDept].forEach(course => {
                let option = document.createElement("option");
                option.value = course.toLowerCase();
                option.textContent = course;
                courseSelect.appendChild(option);
            });
        }
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const department = departmentSelect.value;
        const course = courseSelect.value;
        const rollno = document.getElementById("rollno").value.trim();
        const phone = document.getElementById("phone").value.trim();

        // Simple Validation
        if (name === "" || email === "" || department === "" || course === "" || rollno === "" || phone === "") {
            alert("Please fill in all the fields.");
            return;
        }

        // Show Success Message
        alert(`Login Successful!\nName: ${name}\nEmail: ${email}\nDepartment: ${department}\nCourse: ${course}\nRoll No: ${rollno}\nPhone: ${phone}`);
        
        // Clear form fields
        form.reset();
    });
});

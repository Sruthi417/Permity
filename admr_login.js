document.addEventListener("DOMContentLoaded", function () {
    const designation = document.getElementById("designation");
    const department = document.getElementById("department");
    const departmentBox = department.parentElement;
    
    // List of departments
    const departments = ["Computer Science", "Electronics", "Mechanical", "Civil", "Biotechnology"];
    
    // Populate the department dropdown
    function populateDepartments() {
        department.innerHTML = '<option value="" disabled selected>Select a Department</option>';
        departments.forEach(dep => {
            const option = document.createElement("option");
            option.value = dep.toLowerCase().replace(" ", "_");
            option.textContent = dep;
            department.appendChild(option);
        });
    }
    
    // Initially hide the department field
    departmentBox.style.display = "none";
    
    // Event listener for designation change
    designation.addEventListener("change", function () {
        if (this.value === "teacher" || this.value === "hod") {
            departmentBox.style.display = "block";
            populateDepartments();
        } else {
            departmentBox.style.display = "none";
            department.innerHTML = ""; // Clear department options
        }
    });
    
    // Form submission event listener
    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const selectedDesignation = designation.value;
        const selectedDepartment = department.value;
        
        let message = `Name: ${name}\nDesignation: ${selectedDesignation}\nEmail: ${email}`;
        
        if (selectedDesignation === "teacher" || selectedDesignation === "hod") {
            message += `\nDepartment: ${selectedDepartment}`;
        }
        
        alert("Login Successful!\n" + message);
    });
});

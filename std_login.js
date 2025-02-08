document.addEventListener("DOMContentLoaded", function () {
    // Form submission event listener
    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission from reloading the page
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (name && email) {
            // Display the login information in an alert box
            alert(`Login Successful!\nName: ${name}\nEmail: ${email}`);
        } else {
            // Display an error if fields are empty
            alert("Please fill out all fields.");
        }
    });
});

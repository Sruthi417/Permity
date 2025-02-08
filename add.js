// Open Modal
function openModal() {
    document.getElementById("permissionModal").style.display = "flex";
}

// Close Modal
function closeModal() {
    document.getElementById("permissionModal").style.display = "none";
}

// Submit Permission Request
function submitPermission() {
    const permissionType = document.getElementById("permissionType").value;
    alert(`You have selected ${permissionType} for permission application.`);
    closeModal();
}

// Home button functionality (Just a placeholder)
function goHome() {
    alert("Returning to Home Page...");
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === document.getElementById("permissionModal")) {
        closeModal();
    }
};

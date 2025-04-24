document.addEventListener("DOMContentLoaded", function () {
    
    // Sidebar Navigation Active State
    const sidebarLinks = document.querySelectorAll(".sidebar ul li a");
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function () {
            sidebarLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Favorite Cars Toggle
    const favoriteCars = document.querySelectorAll(".favorite-car");
    favoriteCars.forEach(car => {
        car.addEventListener("click", function () {
            this.classList.toggle("selected"); // Toggle selection
        });
    });

    // Logout Button Functionality
    const logoutButton = document.querySelector(".fa-sign-out-alt");
    logoutButton.addEventListener("click", function () {
        if (confirm("Are you sure you want to log out?")) {
            localStorage.removeItem("user");
            window.location.href = "login.html"; // Redirect to login page
        }
    });

    // Sidebar Toggle (For Responsive Design)
    const menuIcon = document.querySelector("#menu-icon");
    const sidebar = document.querySelector(".sidebar");

    if (menuIcon) {
        menuIcon.addEventListener("click", function () {
            sidebar.classList.toggle("active");
        });
    }

    // Close Sidebar When Clicking Outside (For Mobile)
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const profileIcon = document.getElementById("profileIcon");

    profileIcon.addEventListener("click", () => {
        window.location.href = "profile.html"; // Redirect to profile page
    });

    const saveButton = document.querySelector(".save-btn");
    if (saveButton) {
        saveButton.addEventListener("click", () => {
            alert("Your changes have been saved successfully!");
        });
    }

    // Add active state styling for selected menu item
    const menuItems = document.querySelectorAll(".menu li");
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menuItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            // Optional: show/hide content sections based on selection
            const target = item.getAttribute("data-target");
            const sections = document.querySelectorAll(".content-section");
            sections.forEach(section => {
                section.style.display = section.id === target ? "block" : "none";
            });
        });
    });

    // Display user avatar beside profile icon
    const avatarImg = document.createElement("img");
    avatarImg.src = "user-avatar.png"; // Path to user logo/avatar
    avatarImg.alt = "User Avatar";
    avatarImg.className = "navbar-avatar";

    const navItems = document.querySelector(".nav-items");
    if (navItems) {
        navItems.insertBefore(avatarImg, profileIcon);
    }
});

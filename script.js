
let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
    const sr = ScrollReveal({
        distance: '60px',
        duration: 2500,
        delay: 400,
        reset: true
    });

    // Wait for DOM content to be loaded before revealing elements
    document.addEventListener("DOMContentLoaded", function() {
        sr.reveal('.text', {delay: 200, origin: 'top'});
        sr.reveal('.form-container form', {delay: 200, origin: 'left'});
        sr.reveal('.heading', {delay: 800, origin: 'top'});
        sr.reveal('.ride-container .box', {delay: 600, origin: 'top'});
        sr.reveal('.services-container .box', {delay: 600, origin: 'top'});
        sr.reveal('.about-container .box', {delay: 600, origin: 'top'});
        sr.reveal('.reviews-container .box', {delay: 600, origin: 'top'});
        sr.reveal('.newsletter .box', {delay: 400, origin: 'bottom'});
        sr.reveal('.welcome-text', {
            delay: 300,
            origin: 'left',
            distance: '150px',
            duration: 1200,
            easing: 'ease-in-out',
            reset: true
        });
    });
    //header-btn click function
    document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll(".header-btn a");
    
        buttons.forEach(button => {
            button.addEventListener("click", function (event) {
                // Prevent default link behavior
                event.preventDefault();
    
                // Remove 'active-btn' class from all buttons
                buttons.forEach(btn => btn.classList.remove("active-btn"));
    
                // Add 'active-btn' class only to the clicked button
                this.classList.add("active-btn");
            });
        });
    });
    
    function showCategory(category) {
        var carSection = document.getElementById("car-section");
        var bikeSection = document.getElementById("bike-section");
        var carBtn = document.getElementById("car-btn");
        var bikeBtn = document.getElementById("bike-btn");
    
        if (category === "car") {
            carSection.style.display = "block";
            bikeSection.style.display = "none";
            carBtn.classList.add("active");
            bikeBtn.classList.remove("active");
        } else {
            carSection.style.display = "none";
            bikeSection.style.display = "block";
            bikeBtn.classList.add("active");
            carBtn.classList.remove("active");
        }
    }
    
    // Set default view to cars when page loads
    document.addEventListener("DOMContentLoaded", function() {
        showCategory("car");
    });
    function searchVehicle() {
        const searchInput = document.getElementById('search-bar').value.toLowerCase();
        const vehicles = document.querySelectorAll('.services-container .box');
    
        vehicles.forEach(vehicle => {
            const vehicleName = vehicle.querySelector('h3').textContent.toLowerCase();
            if (vehicleName.includes(searchInput)) {
                vehicle.style.display = 'block';
            } else {
                vehicle.style.display = 'none';
            }
        });
    }
    
    function filterVehicles() {
        let typeFilter = document.getElementById("type-filter").value;
        let brandFilter = document.getElementById("brand-filter").value;
        let priceFilter = document.getElementById("price-filter").value;
        let vehicles = document.querySelectorAll(".vehicle-box");
    
        vehicles.forEach(vehicle => {
            let type = vehicle.getAttribute("data-type");
            let brand = vehicle.getAttribute("data-brand");
            let price = parseInt(vehicle.getAttribute("data-price"));
    
            if ((typeFilter === "all" || type === typeFilter) &&
                (brandFilter === "all" || brand === brandFilter) &&
                (price <= priceFilter)) {
                vehicle.style.display = "block";
            } else {
                vehicle.style.display = "none";
            }
        });
    }
    
    function updatePrice() {
        let price = document.getElementById("price-filter").value;
        document.getElementById("price-value").textContent = `₹${price}`;
        filterVehicles();
    }
    
    // Ensure filters apply on load
    document.addEventListener("DOMContentLoaded", filterVehicles);
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            document.getElementById("booking-form").style.display = "block";
        });
    });
    
    
    
    
    document.addEventListener("DOMContentLoaded", function () {
        const rentButtons = document.querySelectorAll(".rent-now");
        const bookingForm = document.getElementById("booking-form");
    
        // Create an overlay for better UI experience
        const overlay = document.createElement("div");
        overlay.id = "overlay";
        document.body.appendChild(overlay);
    
        rentButtons.forEach(button => {
            button.addEventListener("click", function (event) {
                event.preventDefault(); // Stop the page from scrolling up
                bookingForm.style.display = "block"; // Show form
                overlay.style.display = "block"; // Show overlay
            });
        });
    
        // Close form when clicking outside
        overlay.addEventListener("click", function () {
            bookingForm.style.display = "none"; // Hide form
            overlay.style.display = "none"; // Hide overlay
        });
    });
    
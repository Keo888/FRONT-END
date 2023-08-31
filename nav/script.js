document.getElementById("menu-icon").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("active");
});

document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Booking submitted! We will contact you shortly.");
});

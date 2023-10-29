document.addEventListener("DOMContentLoaded", function () {
    const attendeeList = document.getElementById("attendee-list");
    const registerButton = document.getElementById("register-button");

    registerButton.addEventListener("click", function () {
        const newAttendee = prompt("Ingresa el nombre del asistente:");
        if (newAttendee) {
            const listItem = document.createElement("li");
            listItem.textContent = newAttendee;
            attendeeList.appendChild(listItem);
        }
    });
});





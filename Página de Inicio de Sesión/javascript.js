document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Comprueba si el nombre de usuario y la contraseña son correctos (esto es solo un ejemplo)
        if (username === "usuario" && password === "contraseña") {
            alert("Inicio de sesión exitoso.");
            // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
        } else {
            alert("Inicio de sesión fallido. Inténtalo de nuevo.");
        }
    });
});





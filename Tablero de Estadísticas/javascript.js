document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
            datasets: [
                {
                    label: "Ventas",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
});
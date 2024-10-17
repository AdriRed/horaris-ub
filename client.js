document.addEventListener("DOMContentLoaded", function () {
});

document.getElementById("butt").addEventListener("click", function () {
    let id = document.getElementById("id-horari").value;
    const url = `/api/horaris/getPlanificacioAssignatura/${id}/TG1035/2024/1/CAT`;  // Aquesta és la ruta que has definit al servidor

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("result").innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error("Error en la petició:", error);
            document.getElementById("result").innerHTML = "Error en la petició";
        });

})
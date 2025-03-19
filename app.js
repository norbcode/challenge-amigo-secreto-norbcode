// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Funcion para agregrar Amigo
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const botonAgregar = document.querySelector(".button-add");
    if (input.value.trim() !== "") {
        amigos.push(input.value.trim());
        actualizarLista();
        input.value = "";
    }
    botonAgregar.disabled = true;
}

// Funcion para actualizar de lista
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Funcion para sortear amigo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    if (amigos.length > 0) {
        const ganador = amigos[Math.floor(Math.random() * amigos.length)];
        let li = document.createElement("li");
        li.textContent = "Tu amigo secreto es: " + ganador;
        resultado.appendChild(li);
    } else {
        alert("Agrega al menos un participante para realizar el sorteo.");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("amigo");
    const botonAgregar = document.querySelector(".button-add");

    input.addEventListener("input", function () {
        botonAgregar.disabled = input.value.trim() === "";
    });
});